import React, { useState, useEffect, useCallback } from 'react';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/typeIcons';
import { getLateTasks, createTask, getTaskById, updatetask, deleteTask } from '../../services';
import validate from '../../utils/taskValidation';
import usePathName from '../../utils/usePathname';

export default function Task(props) {
  const [lateTasks, setLateTasks] = useState(0);
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');

  const navigate = useNavigate();
  const pathname = usePathName();

  const getTask = useCallback(async () => {
    setId(pathname);
    if (id) {
      const { type, title, description, when, done: feito } = await getTaskById(id);
      setType(type);
      setTitle(title);
      setDescription(description);
      setDate(format(new Date(when), 'yyyy-MM-dd'));
      setHour(format(new Date(when), 'HH:mm'));
      setDone(feito);
    }
  }, [id, pathname]);

  useEffect(() => {
    getLateTasks().then((res) => setLateTasks(res));
    getTask();
  }, [getTask]);

  const submitTask = async () => {
    const info = {
      macaddress,
      type,
      title,
      description,
      date,
      hour,
      done,
    };
    const verify = validate(info);
    if (verify.message) {
      return global.alert(verify.message);
    }
    const taskExist = await getTaskById(id);
    if (taskExist) {
      const { error } = await updatetask(info, id);
      if (error) {
        return global.alert(error);
      } else {
        global.alert('Tarefa atualizada com sucesso');
        return navigate('/');
      }
    }
    const result = await createTask(info);
    if ('error' in result) {
      return global.alert(result.error);
    } else {
      global.alert('Tarefa cadastrada com sucesso');
      return navigate('/');
    }
  }

  const deleteHandler = async () => {
    const confirmation = window.confirm('Você realmente quer excluir essa tarefa?');
    console.log(confirmation)
    if (confirmation === true) {
      const result = await deleteTask(id);
      const response = result.message ? 'Tarefa excluída com sucesso!' : result.error;
      global.alert(response);
      return navigate('/');
    }
  }

  return (
    <S.Container>
      <Header lateTasks={ lateTasks } />
      <S.Form>
        <S.TypeIcons>
          { typeIcons.map((icon, index) =>
              index> 0 &&
              <button key={ v4() } type="button" onClick={() => setType(index)}>
                <img src={ icon } alt="logo-tarefa"
                className={ type && type !== index && 'inactive' }
                />
              </button>
            )
          }
        </S.TypeIcons>
        <S.Input>
          <span>Título</span>
          <input type="text" placeholder="Título da tarefa..."
            onChange={({ target }) => setTitle(target.value)}
            value={ title }
          />
        </S.Input>
        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={ 7 } placeholder="detalhes da tarefa"
            onChange={({ target }) => setDescription(target.value)}
            value={ description }
          />
        </S.TextArea>
        <S.Input>
          <span>Data da tarefa</span>
          <input type="date"
            onChange={({ target }) => setDate(target.value)}
            value={ date }
          />
        </S.Input>
        <S.Input>
          <span>Horário da tarefa</span>
          <input type="time"
            onChange={({ target }) => setHour(target.value)}
            value={ hour }
          />
        </S.Input>
        <S.Options>
          <div>
            <label>
              Concluído
              <input type="checkbox" checked={ done }  onChange={() => setDone(!done)} />
            </label>
          </div>
          { id && <button type="button" onClick={ deleteHandler }>Excluir</button> }
        </S.Options>
        <S.Save>
          <button type="button" onClick={ submitTask }>Salvar</button>
        </S.Save>
      </S.Form>
      <Footer />
    </S.Container>
  );
};

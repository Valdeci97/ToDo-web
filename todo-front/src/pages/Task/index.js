import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/typeIcons';
import { getLateTasks } from '../../services';

export default function Task() {
  const [lateTasks, setLateTasks] = useState(0);
  const [type, setType] = useState();

  useEffect(() => {
    getLateTasks().then((res) => setLateTasks(res));
  }, []);

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
          <input type="text" placeholder="Título da tarefa..." />
        </S.Input>
        <S.TextArea>
          <span>Detalhes</span>
          <textarea rows={ 7 } placeholder="detalhes da tarefa" />
        </S.TextArea>
        <S.Input>
          <span>Data da tarefa</span>
          <input type="date" />
        </S.Input>
        <S.Input>
          <span>Horário da tarefa</span>
          <input type="time" />
        </S.Input>
        <S.Options>
          <div>
            <label>
              Concluído
              <input type="checkbox" />
            </label>
          </div>
          <button type="button">Excluir</button>
        </S.Options>
        <S.Save>
          <button type="button">Salvar</button>
        </S.Save>
      </S.Form>
      <Footer />
    </S.Container>
  );
};

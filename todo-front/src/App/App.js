import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterCard from '../components/FilterCard';
import TaskCard from '../components/TaskCard';
import * as S from './styles';
import getTasks from '../services';

const filterOptions = ['Todos', 'Hoje', 'Semana', 'Mês', 'Ano'];

function App() {
  const [isActive, setIsActive] = useState('Todos');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(isActive).then((res) => setTasks(res));
  }, [isActive]);

  return (
    <S.Container>
      <Header />
      <S.FilterArea>
        {
          filterOptions.map((element, index) =>
          <button type="button" onClick={ () => setIsActive(element) }>
              <FilterCard
                text={ element }
                key={ index }
                isActive={ isActive === element }
              />
            </button>
          )
        }
      </S.FilterArea>
      <S.ContentArea>
        {
         tasks.map(({ type, title, when }) => {
           return (
             <TaskCard type={ type } title={ title } when={ when } />  
           );
         }) 
        }
      </S.ContentArea>
      <Footer />
    </S.Container>
  );
}

export default App;

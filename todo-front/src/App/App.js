import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterCard from '../components/FilterCard';
import TaskCard from '../components/TaskCard';
import * as S from './styles';

const filterOptions = ['Todos', 'Hoje', 'Semana', 'Mês', 'Ano'];

function App() {
  const [isActive, setIsActive] = useState('Todos');
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
        <TaskCard />
      </S.ContentArea>
      <Footer />
    </S.Container>
  );
}

export default App;

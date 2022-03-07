import React from 'react';

import * as S from './styles';
import defaultIcon from '../../assets/default-icon-light.png';

export default function TaskCard() {
  return (
    <S.Container>
      <S.Top>
        <img src={ defaultIcon } alt="tarefa padrão" />
        <h3>Tarefa teste</h3>
      </S.Top>
      <S.Bottom>
        <strong>06/03/2022</strong>
        <span>10:00</span>
      </S.Bottom>
    </S.Container>
  );
}

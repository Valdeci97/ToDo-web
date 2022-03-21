import React, { useMemo } from 'react';
import { format } from 'date-fns';

import * as S from './styles';
import defaultIcon from '../../assets/default-icon-light.png';

export default function TaskCard({ type, title, when }) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));
  return (
    <S.Container>
      <S.Top>
        <img src={ defaultIcon } alt="tarefa padrão" />
        <h3>{ title }</h3>
      </S.Top>
      <S.Bottom>
        <strong>{ date }</strong>
        <span>{ hour }</span>
      </S.Bottom>
    </S.Container>
  );
}

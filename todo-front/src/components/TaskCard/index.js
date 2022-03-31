import React, { useMemo } from 'react';
import { format } from 'date-fns';

import * as S from './styles';
import typeIcons from '../../utils/typeIcons';

export default function TaskCard({ type, title, when, done }) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));
  return (
    <S.Container done={ done }>
      <S.Top>
        <img src={ typeIcons[type] } alt="tarefa padrão" />
        <h3>{ title }</h3>
      </S.Top>
      <S.Bottom>
        <strong>{ date }</strong>
        <span>{ hour }</span>
      </S.Bottom>
    </S.Container>
  );
}

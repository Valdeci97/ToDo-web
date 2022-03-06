import React from 'react';

import filter from '../../assets/filter-light.png';
import * as S from './styles';

export default function FilterCard({ text, isActive }) {
  return (
    <S.Container isActive={ isActive }>
      <img src={ filter } alt="Ícone de filtro" />
      <span>{ text }</span>
    </S.Container>
  );
};

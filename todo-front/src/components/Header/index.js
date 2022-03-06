import React from 'react';

import * as S from './styles';
import logo from '../../assets/logo-light.png';
import bell from '../../assets/bell-light.png';

export default function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={ logo } alt="Logo Todo" />
      </S.LeftSide>
      <S.RightSide>
        <a href="#">INÍCIO</a>
        <span className="pipe" />
        <a href="#">NOVA TAREFA</a>
        <span className="pipe" />
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="pipe" />
        <a href="#" id="notification">
          <img src={ bell } alt="Notificação" />
          <span>5</span>
        </a>
      </S.RightSide>
    </S.Container>
  );
}

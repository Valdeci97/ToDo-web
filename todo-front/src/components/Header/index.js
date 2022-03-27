import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import logo from '../../assets/logo-light.png';
import bell from '../../assets/bell-light.png';

export default function Header({ lateTasks, clickNotification }) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={ logo } alt="Logo Todo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">INÍCIO</Link>
        <span className="pipe" />
        <Link to="/task">NOVA TAREFA</Link>
        <span className="pipe" />
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="pipe" />
        <button onClick={ clickNotification } id="notification">
          <img src={ bell } alt="Notificação" />
          <span>{ lateTasks }</span>
        </button>
      </S.RightSide>
    </S.Container>
  );
}

import React from 'react';
import Qr from 'qrcode.react';

import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function QrCode() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>Capture o Qrcode pelo app</h1>
        <span>Suas atividades serão sincronizadas com as do celular.</span>
        <S.QrCode>
          <Qr value="getmacaddress" size={ 250 } />
        </S.QrCode>
        <S.ValidateCode>
          <span>Digite o código recebido</span>
          <input type="text" />
          <button type="button">SINCRONIZAR</button>
        </S.ValidateCode>
      </S.Content>
      <Footer />
    </S.Container>
  );
};

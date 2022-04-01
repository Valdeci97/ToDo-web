import React from 'react';

import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function QrCode() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <h1>Capture o Qrcode pelo app</h1>
        <S.QrCode>
          
        </S.QrCode>
        <span>Suas atividades serão sincronizadas com as do celular.</span>
      </S.Content>
      <Footer />
    </S.Container>
  );
};

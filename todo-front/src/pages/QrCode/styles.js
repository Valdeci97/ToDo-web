import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  h1 {
    text-align: center;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`;

export const QrCode = styled.div`
  background: green;
  height: 250px;
  width: 100%;
`;

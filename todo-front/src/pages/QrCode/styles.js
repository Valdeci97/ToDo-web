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
    color: #2A5AF2;
    margin-bottom: 10px;
    text-align: center;
  }

  span {
    color: #2A5AF2;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const QrCode = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
`;

export const ValidateCode = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    color: #000;
  }

  input {
    padding: 6px;
    text-align: center;
    width: 30%;
  }

  button {
    background: #2A5AF2;
    border: 2px solid #000;
    border-radius: 15px;
    color: #FFF;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    padding: 6px;
    width: 30%;

    &:hover {
      background: #FAFE36;
      color: #000;
      font-size: 26px;
      transition: all 0.4s ease;
      width: 35%;
    }
  }
`;

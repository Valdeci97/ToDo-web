import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  width: 65%;
`;

export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .inactive {
    opacity: 0.3;
  }

  button {
    border: none;
    background: none;
  }

  img {
    width: 50px;
    height: 50px;
    margin: 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px;
  color: #555;

  input {
    margin-top: 5px;
    font-size: 15px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #000;
  }
`;

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #555;

  span {
    margin: 5px;
  }

  textarea {
    font-size: 15px;
    border: none;
    border-bottom: 1px solid #000;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      opacity: 0.8;
    }
  }

  div {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Save = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    background: #99AAEA;
    border: 2px solid #000;
    border-radius: 10px;
    font-size: 22px;
    font-weight: bold;
    margin: 5px 0;
    width: 60%;

    &:hover {
      background: #fafe36;
      cursor: pointer;
    }
  }

`;

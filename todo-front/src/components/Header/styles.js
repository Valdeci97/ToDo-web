import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #99AAEA;
  display: flex;
  border-bottom: 5px solid #25040c;
`;

export const LeftSide = styled.div`
  width: 50%;
  heigth: 70px;
  display: flex;
  align-items: center;
  padding-left: 8px;

  img {
    height: 45px;
    width: 100px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  heigth: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: unset;
    color: #25040c;
    font-weigth: bold;
    margin: 0 10px;

    &:hover {
      color: #fafdec;
    }
  }

  #notification {
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 40px;
      heigth: 40px;
    }

    span {
      background: #fafdec;
      color: #25040c;
      padding: 3px 6px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 20px;
    }

    &:hover {
      opacity: 0.6;
    }
  }

  .pipe::after {
    color: #25040c;
    content: "|"
  }

`;

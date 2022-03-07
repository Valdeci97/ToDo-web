import styled from "styled-components";

export const Container = styled.div`
  background: #99AAEA;
  border-radius: 8px;
  box-shadow: 8px 8px 10px 0px rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 250px;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
    opacity: 0.55;
    transition: all 0.5s ease;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 70px;
    width: 70px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-around;

  strong {
    color: #fafdec;
  }

  span {
    color: #FEFEFE;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  button {
    background: none;
    border: none;
  }
`;

export const TaskTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: center;

  h3 {
    background: #FFF;
    color: #000;
    padding: 0 10px;
    position: relative;
    top: 25px;
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 0;
  width: 100%;

  a {
    text-decoration: none;
    color: #000;
  }
`;

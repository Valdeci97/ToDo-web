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

export const ContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 0;
  width: 100%;
`;

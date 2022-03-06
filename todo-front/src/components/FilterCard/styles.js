import styled from "styled-components";

export const Container = styled.div`
  background: ${({ isActive }) => isActive ? '#fafe36' : '#99AAEA'};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: center;
  margin: 4px;
  width: 250px;

  img {
    height: 25px;
    margin-left: 5px;
    width: 20px;
  }

  span {
    align-self: flex-end;
    color: #25040c;
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

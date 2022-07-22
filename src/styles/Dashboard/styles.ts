import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  background-color: ${({ theme }) => theme.backgroundColors.primaryBackground};
`;

export const Main = styled.main`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5%;
`;

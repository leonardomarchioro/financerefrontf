import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  background-color: ${({ theme }) => theme.backgroundColors.primaryBackground};
`;

export const Main = styled.main`
  width: 95%;
  max-width: 1200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10%;

  @media screen and (min-width: 768px) {
    gap: 20%;
    > form {
      width: 50%;
    }
  }
`;

export const Figure = styled.figure`
  width: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

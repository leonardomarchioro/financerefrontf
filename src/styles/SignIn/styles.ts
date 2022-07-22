import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.backgroundColors.primaryBackground};
  overflow-y: auto;

  @media screen and (max-height: 620px) {
    height: 100%;
  }
`;

export const Main = styled.main`
  width: 90%;
  max-width: 1000px;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 5%;

  @media screen and (min-width: 768px) {
    gap: 20%;
    > form {
      width: 50%;
    }
  }
`;

export const Figure = styled.figure`
  width: 60%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

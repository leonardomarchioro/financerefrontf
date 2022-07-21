import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.backgroundColors.primaryBackground};
`;

export const Main = styled.main`
  width: 90%;
  max-width: 1000px;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;

export const ContainerText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > h1 {
    color: ${({ theme }) => theme.textColors.titlePrimary};
    font-weight: 800;
    font-size: 50px;
  }
  > p {
    color: ${({ theme }) => theme.textColors.textColor};
    font-weight: 500;
    font-size: 24px;
  }
`;

export const Figure = styled.figure`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

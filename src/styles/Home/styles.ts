import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  background-color: ${({ theme }) => theme.backgroundColors.primaryBackground};
`;

export const Main = styled.main`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Figure = styled.figure`
  width: 90%;
  max-width: 700px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 500px;
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

  > a {
    color: ${({ theme }) => theme.textColors.titlePrimary};
    font-weight: 800;
    font-size: 24px;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 3px;
      background: ${({ theme }) => theme.textColors.titlePrimary};
      transition: width 0.8s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

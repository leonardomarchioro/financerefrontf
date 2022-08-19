import styled from "styled-components";

export const Container = styled.div<{ showMenu: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  transition: all linear 0.3s;
  background-color: ${({ theme }) =>
    theme.backgroundColors.dashboardBackground};
  ${({ showMenu }) => showMenu && `filter: blur(4px);`}
  @media screen and (max-height: 720px) {
    height: 100%;
  }
`;

export const Main = styled.main`
  width: 90%;
  height: 66%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

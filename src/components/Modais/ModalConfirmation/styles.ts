import styled from "styled-components";

export const ContainerModal = styled.section`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  z-index: 5;
`;

export const Modal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  padding: 20px;
  min-width: 300px;
  width: 200px;
  height: auto;

  border-radius: 20px;
  color: ${({ theme }) => theme.textColors.titleSecondary};
  z-index: 6;

  > h1 {
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  > div {
    width: 100px;
  }

  button {
    color: ${({ theme }) => theme.colors.white};
  }

  .cancel {
    background-color: ${({ theme }) => theme.buttonColor.exitButton};
  }

  .confirm {
    background-color: ${({ theme }) => theme.buttonColor.entranceButton};
  }
`;

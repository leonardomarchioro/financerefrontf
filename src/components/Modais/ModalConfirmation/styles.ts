import styled from "styled-components";
import { Modal } from "react-overlays";

export const ContainerModal = styled.section`
  position: fixed;
  z-index: 1080;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

export const ModalContent = styled(Modal)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1080;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  padding: 20px;
  min-width: 300px;
  width: 200px;
  height: 180px;

  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  border-radius: 20px;
  color: ${({ theme }) => theme.textColors.titleSecondary};

  > h1 {
    font-size: 18px;
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

import styled from "styled-components";
import { Modal } from "react-overlays";

export const ContainerModal = styled.section`
  position: fixed;
  z-index: 1040;
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
  z-index: 1040;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  min-width: 310px;
  width: 50%;
  height: 450px;
  border-radius: 20px;

  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  color: ${({ theme }) => theme.textColors.titleSecondary};
  border-top: 20px solid
    ${({ theme, type }) =>
      type === "entrance"
        ? theme.typesColors.entrancecolor
        : theme.typesColors.exitcolor};
`;

export const Form = styled.form`
  width: 95%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 45%;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  .cancel {
    padding: 10px 0;
    background-color: ${({ theme }) => theme.buttonColor.exitButton};
  }

  .submit {
    padding: 10px 0;
    background-color: ${({ theme }) => theme.buttonColor.entranceButton};
  }
`;

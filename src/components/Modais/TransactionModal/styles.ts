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
  flex-direction: column;
  align-items: center;
  gap: 10px;

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

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TopModalStep1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TopModalStep2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > svg:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

export const TitleDescription = styled.h3`
  color: ${({ theme }) => theme.textColors.titleSecondary};
  width: 100%;
`;

export const ModalDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 5px;
  height: auto;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

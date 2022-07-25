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
  z-index: 2;

  .entrance {
    border-top: 20px solid ${({ theme }) => theme.typesColors.entrancecolor};
  }

  .exit {
    border-top: 20px solid ${({ theme }) => theme.typesColors.exitcolor};
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  padding: 20px;
  min-width: 300px;
  width: 30%;
  height: auto;
  max-height: 500px;
  border-radius: 20px;
  z-index: 3;
  color: ${({ theme }) => theme.textColors.titleSecondary};
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

  height: auto;
  overflow-y: auto;
`;

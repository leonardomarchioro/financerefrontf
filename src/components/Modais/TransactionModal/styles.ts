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
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  padding: 0px;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  z-index: 3;
`;

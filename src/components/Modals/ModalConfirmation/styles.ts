import styled from "styled-components";

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

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
    width: 80%;
  }

  button {
    color: #fff;
    padding: 10px;
  }

  .cancel {
    background-color: ${({ theme }) => theme.buttonColor.exitButton};
  }

  .confirm {
    background-color: ${({ theme }) => theme.buttonColor.entranceButton};
  }
`;

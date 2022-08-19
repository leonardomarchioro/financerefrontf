import styled, { DefaultTheme } from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 20px;

  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  color: ${({ theme }) => theme.textColors.titleSecondary};
  border-top: 20px solid
    ${({ theme, type }: { theme: DefaultTheme; type: string }) =>
      type === "entrance"
        ? theme.typesColors.entrancecolor
        : theme.typesColors.exitcolor};
`;

export const Form = styled.form`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  gap: 50px;
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

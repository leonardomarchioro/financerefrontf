import styled, { DefaultTheme } from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

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

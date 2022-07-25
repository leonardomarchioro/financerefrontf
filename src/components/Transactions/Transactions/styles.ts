import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  gap: 20px;

  &::-webkit-scrollbar {
    display: flex;
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) =>
      theme.backgroundColors.containerTransactions};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scoolBar.color};
    border-radius: 20px;
  }

  .entrance {
    border-right: 20px solid ${({ theme }) => theme.typesColors.entrancecolor};
  }

  .exit {
    border-right: 20px solid ${({ theme }) => theme.typesColors.exitcolor};
  }

  @media screen and (max-width: 768px) {
    .entrance {
      border-right: 10px solid ${({ theme }) => theme.typesColors.entrancecolor};
    }

    .exit {
      border-right: 10px solid ${({ theme }) => theme.typesColors.exitcolor};
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Card = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 99%;
  border-radius: 6px;
  padding: 10px;
  background-color: ${({ theme }) =>
    theme.backgroundColors.transactionsBackground};
  color: ${({ theme }) => theme.textColors.titleSecondary};

  &:hover {
    transform: scale(0.98);
  }

  > h1 {
    font-weight: 600;
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    > h1 {
      font-size: 16px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    > span {
      font-size: 14px;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 5px;
`;

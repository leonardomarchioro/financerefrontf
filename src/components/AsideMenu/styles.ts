import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  width: 300px;
  height: 100%;
  right: 0;
  box-shadow: -12px 0px 4px rgb(0 0 0 / 25%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px;
  z-index: 2;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  > svg {
    color: ${({ theme }) => theme.textColors.titleSecondary};
    border-radius: 50%;
    cursor: pointer;
    padding: 2px;
    &:hover {
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.textColors.titleSecondary};
      color: ${({ theme }) => theme.backgroundColors.secondaryBackground};
    }
  }
`;

export const MiddleMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  gap: 5%;
`;

export const ActionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  color: ${({ theme }) => theme.textColors.titleSecondary};
  cursor: pointer;
  padding: 10px;

  &:hover {
    > svg {
      transform: scale(1.2);
    }

    > span {
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.textColors.titleSecondary};
        transition: width 0.8s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

export const BottonMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  width: 80%;
  color: ${({ theme }) => theme.textColors.titleSecondary};
  padding: 10px;
  cursor: pointer;

  > span::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.textColors.titleSecondary};
    transition: width 0.8s;
  }

  &:hover {
    svg {
      transform: scale(1.2);
    }

    span::after {
      width: 100%;
    }
  }
`;

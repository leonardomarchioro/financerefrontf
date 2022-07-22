import styled from "styled-components";

export const Header = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};

  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > h1 {
    font-size: 30px;
    color: ${({ theme }) => theme.textColors.titleSecondary};
  }

  > h3 {
    font-size: 18px;
    color: ${({ theme }) => theme.textColors.titleSecondary};
  }

  @media screen and (max-width: 768px) {
    > h1 {
      font-size: 20px;
    }
    > h3 {
      font-size: 14px;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  > span {
    font-size: 16px;
    color: ${({ theme }) => theme.textColors.titleSecondary};
  }
  > svg {
    color: ${({ theme }) => theme.textColors.titleSecondary};
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 768px) {
    > svg {
      position: fixed;
      top: 40px;
      right: 25px;
    }
  }
`;

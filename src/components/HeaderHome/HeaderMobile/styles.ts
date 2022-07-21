import styled from "styled-components";

export const HeaderMobileContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeaderNone = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;

  > svg {
    color: ${({ theme }) => theme.buttonColor.backButton};
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  padding: 10px 20px;
  height: 60px;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);

  > a {
    margin-top: 5px;
    color: ${({ theme }) => theme.textColors.titlePrimary};
    font-weight: 700;
    font-size: 20px;
    transition: 0.5s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      filter: brightness(0.8);
    }
  }

  > svg {
    color: ${({ theme }) => theme.buttonColor.backButton};
  }
`;

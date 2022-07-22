import styled from "styled-components";

export const HeaderDeskContainer = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  padding: 10px 20px;

  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
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
`;

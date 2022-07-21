import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.buttonColor.backButton};
    background-color: ${({ theme }) =>
      theme.backgroundColors.primaryBackground};
    border-radius: 50%;
    padding: 4px;
    transition: 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.buttonColor.backButton};
      color: ${({ theme }) => theme.backgroundColors.primaryBackground};
      transform: scale(1.1);
    }
  }
`;

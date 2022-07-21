import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  button {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.buttonColor.entranceButton};
    color: ${({ theme }) => theme.textColors.subTitlePrimary};
  }
`;

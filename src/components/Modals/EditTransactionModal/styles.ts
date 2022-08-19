import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  padding: 0px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  z-index: 3;
`;

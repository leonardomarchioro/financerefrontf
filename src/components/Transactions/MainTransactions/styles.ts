import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.backgroundColors.containerTransactions};
  padding: 30px;
  border-radius: 20px;
`;

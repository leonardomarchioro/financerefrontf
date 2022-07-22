import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  padding: 30px;
  border-radius: 20px;
  margin-top: 20px;
`;

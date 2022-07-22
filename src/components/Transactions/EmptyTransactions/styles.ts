import styled from "styled-components";

export const ContainerEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 40px 0;
  height: auto;
  max-height: 500px;
  > h1 {
    color: ${({ theme }) => theme.textColors.deactivate};
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    > h1 {
      font-size: 14px;
    }
  }
`;

export const Figure = styled.figure`
  width: 40%;
`;

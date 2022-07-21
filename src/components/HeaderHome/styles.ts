import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 50px;

  > section {
    display: none;
  }

  @media screen and (min-width: 768px) {
    > div {
      display: none;
    }
    > section {
      display: flex;
    }
  }
`;

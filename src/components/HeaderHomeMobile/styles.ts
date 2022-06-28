import styled from "styled-components";

export const HeaderMobileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  header {
    width: 100%;
    /* background-color: #1f4037; */
    box-shadow: 0px 3px 1px 0px;
    border-radius: 0 0 7px 7px;
    height: 60px;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-direction: column-reverse;

    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 10px;
      > a {
        /* color: var(--text-color); */
        font-weight: 600;
      }
    }
    > svg {
      /* color: white; */
    }
  }
  > svg {
    margin-right: 20px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

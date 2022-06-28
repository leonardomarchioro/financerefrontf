import styled from "styled-components";

export const HeaderDeskContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 40%;
    header {
      display: flex;
      justify-content: space-around;
      width: 100%;
      align-items: center;
      > a {
        margin-top: 5px;
        /* color: var(--text-color); */
        font-weight: 700;
        font-size: 20px;
        transition: 0.5s;

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
          filter: brightness(0.8);
        }
      }
    }
  }
  @media screen and (min-width: 1440px) {
    header {
      > a {
        margin-top: 10px;
        font-size: 30px;
      }
    }
  }
`;

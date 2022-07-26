import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    width: 100%;
    color: ${({ theme }) => theme.textColors.textColor};
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    margin-bottom: 6px;
  }

  > textarea {
    width: 100%;
    resize: none;
    height: auto;
    font-family: "Roboto", sans-serif;
    border-radius: 4px;
    border: 1px solid;
    border-color: ${({ error }: { error: boolean }) =>
      error ? "#ff0c0c" : ({ theme }) => theme.inputColors.backgroundColor};
    padding: 5px 8px;
    color: ${({ theme }) => theme.textColors.subTitleSecondary};
    background-color: ${({ theme }) => theme.inputColors.backgroundColor};

    &::-webkit-scrollbar {
      display: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.textColors.subTitleSecondary};
    }
  }
  > div {
    height: 10px;

    > span {
      font-size: 12px;
      color: #ff0c0c;
    }
  }
`;

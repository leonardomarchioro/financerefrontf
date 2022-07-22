import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 78px;
  margin-bottom: 5px;
  > label {
    width: 100%;
    color: ${({ theme }) => theme.textColors.textColor};
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    margin-bottom: 6px;
  }

  > input {
    width: 100%;
    height: 40px;
    font-family: "Roboto", sans-serif;
    border-radius: 4px;
    border: 1px solid;
    border-color: ${({ error }: { error: boolean }) =>
      error ? "#ff0c0c" : ({ theme }) => theme.inputColors.backgroundColor};
    padding: 5px 8px;
    background-color: ${({ theme }) => theme.inputColors.backgroundColor};
    color: ${({ theme }) => theme.textColors.subTitleSecondary};
    &::placeholder {
      color: ${({ theme }) => theme.textColors.subTitleSecondary};
    }
  }
  > svg {
    align-self: flex-end;
    margin-right: 8px;
    position: relative;
    top: -23px;
    cursor: pointer;
    color: ${({ theme }) => theme.textColors.subTitleSecondary};
  }

  > div {
    height: 10px;
    position: relative;
    top: -13px;

    > span {
      font-size: 12px;
      color: #ff0c0c;
    }
  }
`;

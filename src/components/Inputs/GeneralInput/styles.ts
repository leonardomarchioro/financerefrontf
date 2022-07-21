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

  > input {
    width: 100%;
    height: 40px;
    font-family: "Roboto", sans-serif;
    border-radius: 4px;
    border: 1px solid;
    border-color: ${({ error }: { error: boolean }) =>
      error ? "#ff0c0c" : "#9e9e9e"};
    padding: 5px 8px;
  }
  > div {
    height: 10px;

    > span {
      font-size: 12px;
      color: #ff0c0c;
    }
  }
`;

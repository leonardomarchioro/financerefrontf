import styled from "styled-components";
import { Input } from "@nextui-org/react";

export const Error = styled.div`
  height: 10px;

  > span {
    font-size: 12px;
    color: #ff0c0c;
  }
`;

export const SInputPassword = styled(Input.Password)<{ error: boolean }>`
  font-family: "Roboto", sans-serif;
  border: 1px solid;
  border-color: ${({ error }) =>
    error ? "#ff0c0c" : ({ theme }) => theme.inputColors.backgroundColor};
  color: ${({ theme }) => theme.textColors.subTitleSecondary};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: ${({ theme }) => theme.textColors.titleSecondary};
    font-weight: 600;
  }
`;

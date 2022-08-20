import { FiEyeOff, FiEye } from "react-icons/fi";

import { useState } from "react";
import { Container, Error, SInputPassword } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: any;
  register: any;
  name: string;
}

const InputPassword: React.FC<IProps> = ({
  label,
  error,
  register,
  name,
  ...rest
}) => {
  return (
    <Container>
      <SInputPassword
        {...register(name)}
        error={!!error}
        labelPlaceholder={label}
        {...rest}
      />

      <Error>{!!error && <span>{error}</span>}</Error>
    </Container>
  );
};

export default InputPassword;

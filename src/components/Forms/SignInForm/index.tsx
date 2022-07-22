import Link from "next/link";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../Buttons/GeneralButton";
import GeneralInput from "../../Inputs/GeneralInput";
import InputPassword from "../../Inputs/InputPassword";
import { Container, FooterForm, InputsContainer, SpanText } from "./styles";
import Router from "next/router";

interface ILogin {
  email?: string;
  password?: string;
}

const FormSignIn: React.FC = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid format email"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: ILogin) => {
    console.log(data);
    Router.push("/dashboard");
  };

  return (
    <Container onSubmit={handleSubmit(handleLogin)}>
      <h1>Login</h1>
      <InputsContainer>
        <GeneralInput
          label="Email"
          register={register}
          name={"email"}
          error={errors.email?.message}
          type="email"
          placeholder="Enter email..."
        />
        <InputPassword
          label="Password"
          register={register}
          name={"password"}
          error={errors.password?.message}
          placeholder="Enter password..."
        />
      </InputsContainer>
      <FooterForm>
        <SpanText>
          Ainda não tem uma conta? <Link href="/signup">Cadastrar-se</Link>
        </SpanText>
        <Button className="button" type="submit">
          Entrar
        </Button>
      </FooterForm>
    </Container>
  );
};

export default FormSignIn;

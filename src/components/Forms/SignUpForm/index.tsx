import Link from "next/link";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../Buttons/GeneralButton";
import GeneralInput from "../../Inputs/GeneralInput";
import InputPassword from "../../Inputs/InputPassword";
import { Container, FooterForm, InputsContainer, SpanText } from "./styles";
import Router from "next/router";
import { singUpSchema } from "../../../validations/user";

interface ILogin {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const FormSignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singUpSchema),
  });

  const handleLogin = (data: ILogin) => {
    console.log(data);
    Router.push("/signin");
  };

  return (
    <Container onSubmit={handleSubmit(handleLogin)}>
      <h1>Cadastro</h1>
      <InputsContainer>
        <GeneralInput
          label="Nome"
          register={register}
          name={"name"}
          error={errors.name?.message}
          placeholder="Seu nome..."
        />
        <GeneralInput
          label="Email"
          register={register}
          name={"email"}
          error={errors.email?.message}
          type="email"
          placeholder="Seu email..."
        />
        <InputPassword
          label="Senha"
          register={register}
          name={"password"}
          error={errors.password?.message}
          placeholder="Sua senha..."
        />
        <InputPassword
          label="Confirmação de senha"
          register={register}
          name={"confirmPassword"}
          error={errors.confirmPassword?.message}
          placeholder="Confirme sua senha..."
        />
      </InputsContainer>
      <FooterForm>
        <SpanText>
          Já possuí uma conta? <Link href="/signin">Login</Link>
        </SpanText>
        <Button className="button" type="submit">
          Entrar
        </Button>
      </FooterForm>
    </Container>
  );
};

export default FormSignUp;

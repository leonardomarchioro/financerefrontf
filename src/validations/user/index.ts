import * as yup from "yup";

export const singUpSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .matches(/^[ a-zA-Z á]*$/, "Deve conter apenas letras"),
  email: yup.string().required("Email é obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Password é obrigatório")
    .matches(/^[0-9a-zA-Z$*&@#]{8,}$/, "Deve conter ao menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirmação obrigatória")
    .oneOf([yup.ref("password"), null], "Senhas diferentes"),
});

export const singInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Formato de email inválido"),
  password: yup.string().required("Senha é obrigatória"),
});

import { Container, LoginContainer, Column, Title, Spacing } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .min(6, "Necessário pelo menos 6 caracteres")
      .required("Senha obrigatória"),
  })
  .required();

const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="E-mail"
            control={control}
            errorMessage={errors.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            placeholder="Senha"
            type="password"
            control={control}
            errorMessage={errors.password?.message}
          />
          <Spacing />
          <Button title="Entrar" disabled={!isValid}></Button>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;

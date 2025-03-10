import React, { useEffect } from "react";
import { Container, ContainerLogin, TextContainer, TextAbout, TextRedirect } from "./styles";
import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";
import Button from "@/components/Button";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/validation";
import { TouchableOpacity } from "react-native";
import FormInput from "@/components/Form";
import { useWatch } from "react-hook-form";

interface LoginFormData {
    email: string;
    password: string;
}

function Login() {
    const { login, checkToken } = useAuth();

    checkToken("/home");

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const emailValue = useWatch({ control, name: "email" });
    const passwordValue = useWatch({ control, name: "password" });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(emailValue);
    const isPasswordValid = passwordValue?.length >= 6;

    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
        try {
            await login(data.email, data.password);
            router.replace("/home");
        } catch (error) {
            alert("Credenciais inválidas ou erro ao tentar fazer login.");
        }
    };

    const handleRedirect = () => {
        router.replace("/signUp");
    };

    return (
        <Container>

            <Title>Entrar</Title>
            <Subtitle>Realize aqui o seu login</Subtitle>

            <ContainerLogin>

                <FormInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    icon="person-outline"
                    errorMessage={errors.email?.message}
                    isValid={isEmailValid}
                    errors={errors}
                />

                <FormInput
                    name="password"
                    control={control}
                    placeholder="Senha"
                    icon="lock-closed-outline"
                    secureTextEntry={true}
                    errorMessage={errors.password?.message}
                    isValid={isPasswordValid}
                    errors={errors}
                />

                <Button onPress={handleSubmit(onSubmit)}>Entrar</Button>

                <TextContainer>

                    <TextAbout>
                        Não tem uma conta?
                    </TextAbout>

                    <TouchableOpacity onPress={handleRedirect}>
                        <TextRedirect>
                            Cadastre-se
                        </TextRedirect>
                    </TouchableOpacity>

                </TextContainer>

            </ContainerLogin>

        </Container>
    );
}

export default Login;

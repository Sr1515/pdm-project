import React from "react";
import { Container, ContainerLogin, TextContainer, Text } from "./styles";
import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";
import Button from "@/components/Button";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/validation";
import { TouchableOpacity } from "react-native";
import FormInput from "@/components/Form";
import { useWatch } from "react-hook-form";

function Login() {
    const { login } = useAuth();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
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

    const onSubmit = async (data: any) => {
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
            <Title>Login</Title>
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

                <Button onPress={handleSubmit(onSubmit)}>Login</Button>

                <TextContainer>
                    <Text style={{ color: "white", fontSize: 16 }}>
                        Não tem uma conta?
                    </Text>
                    <TouchableOpacity onPress={handleRedirect}>
                        <Text style={{ color: "#007bff", fontSize: 16 }}>
                            Cadastre-se
                        </Text>
                    </TouchableOpacity>
                </TextContainer>

            </ContainerLogin>
        </Container>
    );
}

export default Login;

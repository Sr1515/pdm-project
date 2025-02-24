import React from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { ButtonLogin, Container, ContainerLogin, InputContainer, InputLogin, ErrorText } from "./styles";
import { useAuth } from "@/hooks/useAuth";
import Config from "@/components/Config";
import { router } from "expo-router";
import { Text } from "@rneui/base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "@/components/Button";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";

function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const { login } = useAuth();

    const onSubmit = async (data: any) => {
        try {
            await login(data.email, data.password);
            router.replace("/home");
        } catch (error) {
            alert('Credenciais inválidas ou erro ao tentar fazer login.');
        }
    };

    const emailValue = useWatch({ control, name: 'email' });
    const passwordValue = useWatch({ control, name: 'password' });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(emailValue);
    const isPasswordValid = passwordValue?.length >= 4;

    return (
        <Config>
            <Container>
                <Title>Login</Title>
                <Subtitle>Realize aqui o seu login</Subtitle>

                <ContainerLogin>
                    <InputContainer hasError={!!errors.email} isValid={isEmailValid}>
                        <Ionicons name="person-outline" size={25} color={"gray"} />
                        <Controller
                            control={control}
                            name="email"
                            rules={{
                                required: "Email é obrigatório",
                                // pattern: {
                                //     value: emailRegex,
                                //     message: "Formato de email inválido",
                                // },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <InputLogin
                                    placeholder="Email"
                                    placeholderTextColor="gray"
                                    keyboardType="email-address"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                    </InputContainer>

                    <InputContainer hasError={!!errors.password} isValid={isPasswordValid}>
                        <Ionicons name="lock-closed-outline" size={25} color={"gray"} />
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: "Senha é obrigatória",
                                minLength: {
                                    value: 3,
                                    message: "A senha deve ter no mínimo 6 caracteres",
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <InputLogin
                                    placeholder="Senha"
                                    placeholderTextColor="gray"
                                    secureTextEntry={true}
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
                    </InputContainer>

                    <ButtonLogin>
                        <Button onPress={handleSubmit(onSubmit)}>Login</Button>
                    </ButtonLogin>
                </ContainerLogin>
            </Container>
        </Config>
    );
}

export default Login;
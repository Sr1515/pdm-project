import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Ionicons from "@expo/vector-icons/Ionicons";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import { ButtonLogin, Container, ContainerLogin, InputContainer, InputLogin } from "./styles";
import { useAuth } from "@/hooks/useAuth";
import Config from "@/components/Config";
import { router } from "expo-router";
import { Text } from "@rneui/base";

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

    return (
        <Config>

            <Container>
                <Title>Login</Title>
                <Subtitle>Realize aqui o seu login</Subtitle>

                <ContainerLogin>
                    <InputContainer>
                        <Ionicons name="person-outline" size={25} color={"gray"} />
                        <Controller
                            control={control}
                            name="email"
                            rules={{
                                required: "Email é obrigatório",
                                // pattern: {
                                //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                //     message: "Formato de email inválido",
                                // },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <InputLogin
                                    placeholder="Email"
                                    placeholderTextColor="gray"
                                    keyboardType="email-address"
                                    underlineColorAndroid="transparent"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                        {errors.email && <Text style={{ color: 'red', fontSize: 12 }}>{errors.email.message}</Text>}
                    </InputContainer>

                    <InputContainer>
                        <Ionicons name="lock-closed-outline" size={25} color={"gray"} />
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: "Senha é obrigatória",
                                minLength: {
                                    value: 2,
                                    message: "A senha deve ter no mínimo 6 caracteres",
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <InputLogin
                                    placeholder="Senha"
                                    placeholderTextColor="gray"
                                    secureTextEntry={true}
                                    underlineColorAndroid="transparent"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                        {errors.password && <Text style={{ color: 'red', fontSize: 12 }}>{errors.password.message}</Text>}
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

import React, { useEffect } from "react";
import { Container, ContainerLogin } from "./styles";
import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";
import Config from "@/components/Config";
import Button from "@/components/Button";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import { useForm, useWatch } from "react-hook-form";
import FormInput from "@/components/Form";
import axios from "axios";

let login: any;

function Login() {
    login = useAuth().login

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data: any) => {
        try {
            console.log(`AXIOS: ${axios.defaults.headers.common.Authorization}`)
            await login(data.email, data.password);
            router.replace("/home");
        } catch (error) {
            console.log(error)
            // alert('Credenciais inválidas ou erro ao tentar fazer login.');
        }
    };

    const emailValue = useWatch({ control, name: 'email' });
    const passwordValue = useWatch({ control, name: 'password' });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(emailValue);
    const isPasswordValid = passwordValue?.length >= 4;

    return (
        <>
            <Container>

                <Title>Login</Title>
                <Subtitle>Realize aqui o seu login</Subtitle>

                <ContainerLogin>

                    <FormInput
                        name="email"
                        control={control}
                        rules={{
                            required: "Email é obrigatório",
                            // pattern: {
                            //     value: emailRegex,
                            //     message: "Formato de email inválido",
                            // },
                        }}
                        placeholder="Email"
                        icon="person-outline"
                        isValid={isEmailValid}
                        errorMessage={errors.email?.message}
                    />

                    <FormInput
                        name="password"
                        control={control}
                        rules={{
                            required: "Senha é obrigatória",
                            minLength: {
                                value: 4,
                                message: "A senha deve ter no mínimo 4 caracteres",
                            },
                        }}
                        placeholder="Senha"
                        icon="lock-closed-outline"
                        isValid={isPasswordValid}
                        errorMessage={errors.password?.message}
                        secureTextEntry={true}
                    />


                    <Button onPress={handleSubmit(onSubmit)}>Login</Button>


                </ContainerLogin>
            </Container>
        </>
    );
}

export default Login;

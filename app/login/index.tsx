import React, { useState } from "react";
import 'react-native-reanimated';

import Ionicons from "@expo/vector-icons/Ionicons"

import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import { ButtonLogin, Container, ContainerLogin, InputContainer, InputLogin } from "./styles";

import { useAuth } from "@/hooks/useAuth";
import Config from "@/components/Config";

import { router } from "expo-router";

const { login } = useAuth();

function Login() {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function handleLogin() {

        await login(email, password)

        router.replace('/home')

    }

    return (
        <Config>

            <Container>

                <Title>Login</Title>
                <Subtitle>Realize aqui o seu login</Subtitle>

                <ContainerLogin>


                    <InputContainer>
                        <Ionicons name="person-outline" size={25} color={"gray"} />
                        <InputLogin
                            placeholder="Email"
                            placeholderTextColor="gray"
                            keyboardType="email-address"
                            underlineColorAndroid="transparent"
                            scrollEnabled={false}
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                    </InputContainer>

                    <InputContainer>
                        <Ionicons name="lock-closed-outline" size={25} color={"gray"} />
                        <InputLogin
                            placeholder="Senha"
                            placeholderTextColor="gray"
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            scrollEnabled={false}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                    </InputContainer>


                    <ButtonLogin onPress={handleLogin}>
                        <Button>Login</Button>
                    </ButtonLogin>

                </ContainerLogin>

            </Container>

        </Config>
    );
}

export default Login;
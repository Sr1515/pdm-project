import React from "react";
import 'react-native-reanimated';

import Ionicons from "@expo/vector-icons/Ionicons"

import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import { ButtonLogin, Container, ContainerLogin, InputContainer, InputLogin } from "./styles";

import Config from "@/components/Config";

function Login() {

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
                        />
                    </InputContainer>

                    <ButtonLogin>
                        <Button>Login</Button>
                    </ButtonLogin>

                </ContainerLogin>

            </Container>

        </Config>
    );
}

export default Login;
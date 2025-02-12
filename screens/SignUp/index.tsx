
import React from "react";
import 'react-native-reanimated';

import Ionicons from "@expo/vector-icons/Ionicons"

import {
    ButtonSignUp, Container, ContainerSignUp,
    InputContainer, InputSignUp, LoginLink, Text, TextContainer
} from "./style";

import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Button from "@/components/Button";

export default function SignUp() {

    return (
        <>
            <Container>

                <Title>Registre sua conta</Title>
                <Subtitle>Crie aqui sua conta</Subtitle>

                <ContainerSignUp>

                    <InputContainer>
                        <Ionicons name="person-outline" size={25} color={"gray"} />
                        <InputSignUp
                            placeholder="Nome completo"
                            placeholderTextColor="gray"
                            keyboardType="email-address"
                            underlineColorAndroid="transparent"
                        />
                    </InputContainer>

                    <InputContainer>
                        <Ionicons name="person-outline" size={25} color={"gray"} />
                        <InputSignUp
                            placeholder="Email"
                            placeholderTextColor="gray"
                            keyboardType="email-address"
                            underlineColorAndroid="transparent"
                        />
                    </InputContainer>

                    <InputContainer>
                        <Ionicons name="lock-closed-outline" size={25} color={"gray"} />
                        <InputSignUp
                            placeholder="Senha"
                            placeholderTextColor="gray"
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                        />
                    </InputContainer>

                    <InputContainer>
                        <Ionicons name="lock-closed-outline" size={25} color={"gray"} />
                        <InputSignUp
                            placeholder="Confirmar senha"
                            placeholderTextColor="gray"
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                        />
                    </InputContainer>

                    <ButtonSignUp>
                        <Button>Cadastrar</Button>
                    </ButtonSignUp>

                    <TextContainer>
                        <Text>Já possui uma conta?</Text>
                        <LoginLink>Log in</LoginLink>
                    </TextContainer>

                </ContainerSignUp>

            </Container>
        </>
    );
}

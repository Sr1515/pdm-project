import Title from "@/components/Title";
import React from "react";
import 'react-native-reanimated';

import { FooterMenu } from "@/components/FooterMenu";

import Subtitle from "@/components/Subtitle";
import { StatusBar } from "react-native";
import Button from "@/components/Button";
import Ionicons from "@expo/vector-icons/Ionicons"
import { ButtonSignUp, ContainerHeader, ContainerSignUp, InputContainer, InputSignUp, LoginLink, SignUpButtonFooter, Text, TextContainer } from "./style";


export default function SignUp() {

    return (
        <>
            <ContainerHeader>

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
            </ContainerHeader>
        </>
    );
}

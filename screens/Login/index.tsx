import Title from "@/components/Title";
import React from "react";
import 'react-native-reanimated';

import { ButtonLogin, ButtonTextLogin, ContainerHeader, ContainerLogin, InputContainer, InputLogin, TitleLogin } from "./styles";
import { FooterMenu } from "@/components/FooterMenu";

import Subtitle from "@/components/Subtitle";
import { StatusBar } from "react-native";
import Button from "@/components/Button";
import Ionicons from "@expo/vector-icons/Ionicons"


export default function Login() {

    return (
        <>
            <ContainerHeader>

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
                        />
                    </InputContainer>

                    <InputContainer>
                        <Ionicons name="lock-closed-outline" size={25} color={"gray"} />
                        <InputLogin
                            placeholder="Senha"
                            placeholderTextColor="gray"
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                        />
                    </InputContainer>

                    <ButtonLogin>
                        <Button>Login</Button>
                    </ButtonLogin>

                </ContainerLogin>
            </ContainerHeader>

        </>
    );
}

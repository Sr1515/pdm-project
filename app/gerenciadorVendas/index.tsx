import React from "react";
import 'react-native-reanimated';
import { View, ScrollView } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
    ButtonAddFooter,
    ButtonInput,
    Container, Form, Input,
    InputAddProduct, InputContainer, InputLabel
} from "./styles";

import FooterMenu from "@/components/FooterMenu";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Button from "@/components/Button";
import Config from "@/components/Config";
import { ButtonSearch } from "../cliente/style";


function GerenciadorVendas() {


    return (
        <Config>

            <ScrollView>

                <Container>

                    <Title>Gerenciador de Vendas</Title>
                    <Subtitle>Adicionar nova venda</Subtitle>

                    <View>

                        <InputContainer>
                            <InputLabel>Nome do produto</InputLabel>
                            <InputAddProduct
                                placeholder="Digite o nome do produto"
                                placeholderTextColor="gray"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

                        <Form>

                            <Input
                                placeholder="1"
                                placeholderTextColor="#6B6B6B"
                                keyboardType="numeric"
                            />

                            <ButtonInput>
                                <Ionicons name="add-outline" size={32} color={"black"} />
                            </ButtonInput>

                            <ButtonInput>
                                <Ionicons name="remove-outline" size={32} color={"black"} />
                            </ButtonInput>


                        </Form>

                    </View>

                    {/* <ButtonAddFooter>
                        <Button>Adicionar Produto</Button>
                    </ButtonAddFooter>

                    <Container>
                        <Button>Realizar Venda</Button>
                        <Button>Histórico de Vendas</Button>
                    </Container> */}

                </Container>
            </ScrollView >

            <FooterMenu />
        </Config>
    );
}

export default GerenciadorVendas;
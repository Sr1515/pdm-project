import React from "react";
import 'react-native-reanimated';
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";

import Title from "@/components/Title";
import { FooterMenu } from "@/components/FooterMenu";
import Subtitle from "@/components/Subtitle";
import { Button, ButtonFooter, ButtonOptions, ButtonText, Container, ContainerHeader, Form, Input, InputAddProduct, InputContainer, InputLabel } from "./styles";

export default function GerenciadorVendas() {
    return (
        <>

            <ScrollView>
                <ContainerHeader>
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
                            <Button>
                                <Ionicons name="add-outline" size={32} color={"black"} />
                            </Button>
                            <Button>
                                <Ionicons name="remove-outline" size={32} color={"black"} />
                            </Button>


                        </Form>

                    </View>

                    <Container>

                        <ButtonFooter>
                            <ButtonText>Adicionar Produto</ButtonText>
                        </ButtonFooter>

                        <ButtonOptions>
                            <ButtonText>Realizar Venda</ButtonText>
                        </ButtonOptions>

                        <ButtonOptions>
                            <ButtonText>Histórico de Vendas</ButtonText>
                        </ButtonOptions>
                    </Container>

                </ContainerHeader>
            </ScrollView >

            <FooterMenu />
        </>
    );
}
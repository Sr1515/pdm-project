import React from "react";
import 'react-native-reanimated';
import { FlatList } from "react-native"

import Ionicons from "@expo/vector-icons/Ionicons"

import {
    ActionsContainer, ButtonSearch,
    Container, EmptyText, Form, HeaderText, Input, RemoveButton,
    RowText, TableContainer, TableHeader, TableRow
} from "./style";

import Title from "@/components/Title";
import FooterMenu from "@/components/FooterMenu";
import Button from "@/components/Button";
import Config from "@/components/Config";

const mockProductsSell = [
    { id: 1, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 2, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 3, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 4, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 5, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 6, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 7, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 8, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 9, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 10, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 11, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 12, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 13, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 14, email: 'cafe@gmail.com', client: 'Samuel' },
    { id: 15, email: 'cafe@gmail.com', client: 'Samuel' },
];

function Cliente() {

    return (
        <Config>
            <Container>

                <Title>Gerenciamento de Clientes</Title>

                <Form>

                    <Input
                        placeholder="Pesquise seus clientes"
                        placeholderTextColor="#6B6B6B"
                    />

                    <ButtonSearch>
                        <Ionicons name="search-outline" size={32} color={"black"} />
                    </ButtonSearch>

                </Form>

                <Button>Adicionar Cliente</Button>

                <TableContainer>

                    <TableHeader>
                        <HeaderText>Nome</HeaderText>
                        <HeaderText>Email</HeaderText>
                        <HeaderText>Opções</HeaderText>
                    </TableHeader>

                    <FlatList

                        data={mockProductsSell}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <EmptyText>
                                Não há clientes cadastrados ainda!
                            </EmptyText>
                        )}

                        renderItem={({ item }) => (

                            <TableRow>

                                <RowText>{item.client}</RowText>
                                <RowText>{item.email}</RowText>

                                <ActionsContainer>

                                    <RemoveButton>
                                        <Ionicons name="trash-bin-outline" size={15} color={"white"} />
                                    </RemoveButton>

                                </ActionsContainer>

                            </TableRow>

                        )}
                    />

                </TableContainer>

            </Container>

            <FooterMenu />
        </Config>
    );
}

export default Cliente;

import React from "react";
import 'react-native-reanimated';
import { FlatList } from "react-native"

import Ionicons from "@expo/vector-icons/Ionicons"

import {
    ActionsContainer, Container, EmptyText,
    HeaderText, RemoveButton, RowText,
    TableContainer, TableHeader, TableRow
} from "./style";

import FooterMenu from "@/components/FooterMenu";
import Title from "@/components/Title";

const mockProductsSell = [
    { id: 1, name: 'cafe', client: 'Samuel' },
    { id: 2, name: 'arroz', client: 'Samuel' },
    { id: 3, name: 'cusuz', client: 'Joao' },
    { id: 4, name: 'cafe', client: 'Joao' },
    { id: 5, name: 'cafe', client: 'Jose' },
    { id: 6, name: 'cafe', client: 'Samuel' },
    { id: 7, name: 'cafe', client: 'Samuel' },
    { id: 8, name: 'cafe', client: 'Joao' },
    { id: 9, name: 'cafe', client: 'Joao' },
    { id: 10, name: 'cafe', client: 'Jose' },
    { id: 11, name: 'cafe', client: 'Samuel' },
    { id: 12, name: 'cafe', client: 'Samuel' },
    { id: 13, name: 'cafe', client: 'Joao' },
    { id: 14, name: 'cafe', client: 'Joao' },
    { id: 15, name: 'cafe', client: 'Jose' },
];

export default function Venda() {

    return (
        <>
            <Container>

                <Title>Histórico de Vendas</Title>

                <TableContainer>

                    <TableHeader>
                        <HeaderText>Cliente</HeaderText>
                        <HeaderText>Produtos Vendidos</HeaderText>
                        <HeaderText>Ações</HeaderText>
                    </TableHeader>

                    <FlatList

                        data={mockProductsSell}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <EmptyText>
                                Não há histórico de vendas ainda!
                            </EmptyText>
                        )}

                        renderItem={({ item }) => (

                            <TableRow>

                                <RowText>{item.client}</RowText>
                                <RowText>{item.name}</RowText>

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
        </>
    );
}

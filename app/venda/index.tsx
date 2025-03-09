import React, { useContext, useEffect, useState } from "react";
import 'react-native-reanimated';
import { FlatList, Alert } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
    ActionsContainer, Container,
    HeaderText, RemoveButton, RowText,
    TableContainer, TableHeader, TableRow
} from "./style";

import FooterMenu from "@/components/FooterMenu";
import Title from "@/components/Title";
import Config from "@/components/Config";
import { AuthContext } from "@/context/AuthProvider";
import { api } from "@/api/axios";
import { ListEmptyText } from "../home/styles";

interface Product {
    product: {
        name: string;
    };
}
interface Venda {
    _id: string;
    person: {
        name: string;
    };
    products: Product[];
}

function Venda() {
    const { tokenState } = useContext(AuthContext);

    const [vendas, setVendas] = useState<Venda[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchVendas = async (): Promise<void> => {
        if (!tokenState) {
            return;
        }

        try {
            const response = await api.get("/supply", {
                headers: {
                    Authorization: `Bearer ${tokenState}`,
                },
            });

            setVendas(response.data);

        } catch (error) {
            console.error("Erro ao buscar as vendas:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveVenda = (vendaId: string): void => {
        Alert.alert(
            "Confirmar Exclusão",
            "Tem certeza de que deseja excluir esta venda?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Excluir",
                    onPress: async () => {
                        if (!tokenState) {
                            return;
                        }

                        try {
                            const response = await api.delete(`/supply/${vendaId}`, {
                                headers: {
                                    Authorization: `Bearer ${tokenState}`,
                                },
                            });

                            setVendas((prevVendas) => prevVendas.filter((venda) => venda._id !== vendaId));

                        } catch (error) {
                            console.error("Erro ao remover a venda:", error);
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    useEffect(() => {
        if (tokenState) {
            fetchVendas();
        }
    }, [tokenState]);

    return (
        <Config>

            <Container>

                <Title>Histórico de Vendas</Title>

                <TableContainer>

                    <TableHeader>

                        <HeaderText>Cliente</HeaderText>
                        <HeaderText>Produtos Vendidos</HeaderText>
                        <HeaderText>Ações</HeaderText>

                    </TableHeader>

                    {loading ? (
                        <ListEmptyText>Carregando...</ListEmptyText>
                    ) : (
                        <FlatList
                            data={vendas}
                            keyExtractor={(item) => item._id}
                            showsVerticalScrollIndicator={false}

                            ListEmptyComponent={() => (
                                <ListEmptyText>
                                    Nenhum produto foi adicionado ainda. Adicione um!
                                </ListEmptyText>
                            )}

                            renderItem={({ item }: { item: Venda }) => (
                                <TableRow>

                                    <RowText>{item.person.name}</RowText>
                                    <RowText>
                                        {item.products.length > 0
                                            ? `${[item.products[0].product.name + " " + '...']}${item.products.length > 1 ? '...' : ''}`
                                            : "Sem produtos"}
                                    </RowText>

                                    <ActionsContainer>

                                        <RemoveButton onPress={() => handleRemoveVenda(item._id)}>
                                            <Ionicons name="trash-bin-outline" size={15} color={"white"} />
                                        </RemoveButton>

                                    </ActionsContainer>

                                </TableRow>
                            )}
                        />
                    )}
                </TableContainer>

            </Container>

            <FooterMenu />

        </Config>
    );
}

export default Venda;

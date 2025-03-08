import React, { useContext, useEffect, useState } from "react";
import 'react-native-reanimated';
import { Alert, FlatList } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import {
    ActionsContainer, ButtonSearch,
    BuyButton,
    Container, EmptyText, Form, HeaderText, Input, RemoveButton,
    RowText, TableContainer, TableHeader, TableRow
} from "./style";

import Title from "@/components/Title";
import FooterMenu from "@/components/FooterMenu";
import Button from "@/components/Button";
import Config from "@/components/Config";
import { AuthContext } from "@/context/AuthProvider";
import { Controller, useForm } from "react-hook-form";
import { api } from "@/api/axios";
import { router } from "expo-router";
import { ListEmptyText } from "../home/styles";

function Cliente() {
    const { tokenState } = useContext(AuthContext);
    const { control, handleSubmit, setValue, getValues } = useForm();

    const [clientes, setClientes] = useState<any[]>([]);
    const [filteredClientes, setFilteredClientes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchClientes = async () => {

        if (!tokenState) {
            return;
        }

        try {
            const response = await api.get("/person", {
                headers: {
                    Authorization: `Bearer ${tokenState}`,
                },
            });

            setClientes(response.data);
            setFilteredClientes(response.data);

        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (tokenState) {
            fetchClientes();
        }
    }, [tokenState]);

    const handleSearch = () => {
        const searchTerm = getValues("searchTerm");

        if (searchTerm === "") {
            setFilteredClientes(clientes);

        } else {

            const filtered = clientes.filter((cliente) =>
                cliente.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            );

            setFilteredClientes(filtered);
        }
    };

    const deleteVendasByCliente = async (clienteId: string) => {

        try {

            const vendasResponse = await api.get(`/supply?clienteId=${clienteId}`, {
                headers: {
                    Authorization: `Bearer ${tokenState}`,
                },
            });

            for (let venda of vendasResponse.data) {

                await api.delete(`/supply/${venda._id}`, {
                    headers: {
                        Authorization: `Bearer ${tokenState}`,
                    },
                });
            }

        } catch (error) {
            console.error("Erro ao excluir vendas relacionadas ao cliente:", error);
        }
    };

    const handleDeleteCliente = async (clienteId: string) => {

        Alert.alert(
            "Excluir cliente",
            "Tem certeza que deseja excluir este cliente e todas as vendas associadas?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Excluir",
                    style: "destructive",

                    onPress: async () => {
                        try {
                            await deleteVendasByCliente(clienteId);

                            await api.delete(`/person/${clienteId}`, {
                                headers: {
                                    Authorization: `Bearer ${tokenState}`,
                                },
                            });

                            setClientes((prevClientes) =>
                                prevClientes.filter((cliente) => cliente._id !== clienteId)
                            );
                            setFilteredClientes((prevFilteredClientes) =>
                                prevFilteredClientes.filter((cliente) => cliente._id !== clienteId)
                            );
                        } catch (error) {
                            console.error("Erro ao excluir cliente:", error);
                        }
                    },
                },
            ]
        );
    };

    const handleNewCliente = () => {
        router.replace("/addCliente");
    };

    return (
        <Config>

            <Container>

                <Title>Gerenciamento de Clientes</Title>

                <Form>

                    <Controller
                        name="searchTerm"
                        control={control}
                        defaultValue=""

                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Pesquise o nome de clientes"
                                placeholderTextColor="#6B6B6B"
                                value={value}
                                onChangeText={onChange}
                            />
                        )}

                    />

                    <ButtonSearch onPress={handleSearch}>
                        <Ionicons name="search-outline" size={32} color={"black"} />
                    </ButtonSearch>

                </Form>

                <Button onPress={handleNewCliente}>Adicionar Cliente</Button>

                <TableContainer>

                    <TableHeader>

                        <HeaderText>Nome</HeaderText>
                        <HeaderText>Email</HeaderText>
                        <HeaderText>Opções</HeaderText>

                    </TableHeader>

                    {loading ? (
                        <ListEmptyText>Carregando...</ListEmptyText>
                    ) : (

                        <FlatList
                            data={filteredClientes}
                            keyExtractor={(item) => item._id}
                            showsVerticalScrollIndicator={false}

                            ListEmptyComponent={() => (
                                <ListEmptyText>
                                    Nenhum cliente foi encontrado. Tente outra pesquisa.
                                </ListEmptyText>
                            )}

                            renderItem={({ item }) => (

                                <TableRow>

                                    <RowText>{item.name}</RowText>
                                    <RowText>{item.email}</RowText>

                                    <ActionsContainer>

                                        <RemoveButton onPress={() => handleDeleteCliente(item._id)}>
                                            <Ionicons name="trash-bin-outline" size={15} color={"white"} />
                                        </RemoveButton>


                                        <BuyButton onPress={() => router.push({
                                            pathname: "/gerenciadorVendas",
                                            params: { id: item._id }
                                        })}>
                                            <Ionicons name="cart-outline" size={15} color={"white"} />
                                        </BuyButton>

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

export default Cliente;

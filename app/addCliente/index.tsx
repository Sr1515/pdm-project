import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";

import {
    ButtonAddContainer, Container, ContainerAddClient, ContainerInput,
    InputLabel, MapContainer
} from "./styles";


import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";

import { addClientSchema } from "@/schemas/validation";
import { AuthContext } from "@/context/AuthProvider";
import { api } from "@/api/axios";

import Title from "@/components/Title";
import FooterMenu from "@/components/FooterMenu";
import Config from "@/components/Config";
import FormInput from "@/components/Form";
import MapComponent from "@/components/Map";
import Button from "@/components/Button";


interface LocationType {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

function AddClient() {
    const [loading, setLoading] = useState(false);
    const { tokenState } = useContext(AuthContext);
    const [geolocation, setGeolocation] = useState<LocationType | null>(null);

    const { control, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: zodResolver(addClientSchema),
        defaultValues: {
            name: "",
            email: "",
            contato: "",
            tipoIdentificador: "",
            identificador: "",
        }
    });

    const name = useWatch({ control, name: "name" });
    const email = useWatch({ control, name: "email" });
    const contato = useWatch({ control, name: "contato" });
    const tipoIdentificador = useWatch({ control, name: "tipoIdentificador" });
    const identificador = useWatch({ control, name: "identificador" });

    const isNameValid = name?.length >= 3;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isContatoValid = /^\+?[1-9]\d{1,14}$/.test(contato);
    const isTipoIdentificadorValid = tipoIdentificador?.length > 0;
    const isIdentificadorValid = identificador?.length > 0;

    const onSubmit = async (data: any) => {
        setLoading(true);

        try {

            const client = {
                "name": data.name,
                "email": data.email,
                "contact": data.contato,
                "register": {
                    "type": data.tipoIdentificador,
                    "value": data.identificador
                },
                "address": {
                    "type": "Point",
                    "coordinates": geolocation ? [geolocation.latitude, geolocation.longitude] : [],
                },
            };

            const clientResponse = await api.post("/person", client, {
                headers: {
                    Authorization: `Bearer ${tokenState}`,
                },
            });

            if (clientResponse.status === 201) {

                alert("Cadastro bem-sucedido!");
                router.replace("/cliente");

            } else {
                alert("Erro ao cadastrar, tente novamente.");
            }

        } catch (error) {
            alert("Erro ao tentar cadastrar. Verifique seus dados e tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Config>

            <Container>

                <Title>Registrar Cliente</Title>

                <ScrollView>

                    <ContainerAddClient>

                        <ContainerInput>

                            <InputLabel>Nome do cliente</InputLabel>

                            <FormInput
                                name="name"
                                control={control}
                                placeholder="Digite o nome do cliente"
                                errorMessage={errors.name?.message}
                                errors={errors}
                                isValid={isNameValid && !errors.name ? true : false}
                            />

                        </ContainerInput>

                        <ContainerInput>

                            <InputLabel>Email</InputLabel>

                            <FormInput
                                name="email"
                                control={control}
                                placeholder="Digite o email do cliente"
                                errorMessage={errors.email?.message}
                                errors={errors}
                                isValid={isEmailValid && !errors.email ? true : false}
                            />

                        </ContainerInput>

                        <ContainerInput>

                            <InputLabel>Contato</InputLabel>

                            <FormInput
                                name="contato"
                                control={control}
                                placeholder="Digite o contato do cliente"
                                errorMessage={errors.contato?.message}
                                errors={errors}
                                isValid={isContatoValid && !errors.contato ? true : false}
                            />

                        </ContainerInput>

                        <ContainerInput>

                            <InputLabel>Tipo de identificador</InputLabel>

                            <FormInput
                                name="tipoIdentificador"
                                control={control}
                                placeholder="Digite o tipo de identificador"
                                errorMessage={errors.tipoIdentificador?.message}
                                errors={errors}
                                isValid={isTipoIdentificadorValid && !errors.tipoIdentificador ? true : false}
                            />

                        </ContainerInput>

                        <ContainerInput>

                            <InputLabel>Identificador</InputLabel>

                            <FormInput
                                name="identificador"
                                control={control}
                                placeholder="Digite o identificador"
                                errorMessage={errors.identificador?.message}
                                errors={errors}
                                isValid={isIdentificadorValid && !errors.identificador ? true : false}
                            />

                        </ContainerInput>

                        <InputLabel>Localização</InputLabel>

                        <MapContainer>

                            <MapComponent
                                onGeolocationChange={(newGeolocation) => {
                                    setGeolocation(newGeolocation);
                                }}
                            />

                        </MapContainer>

                        <ButtonAddContainer>
                            <Button onPress={handleSubmit(onSubmit)}>{loading ? "Cadastrando..." : "Cadastrar"}</Button>
                        </ButtonAddContainer>

                    </ContainerAddClient>

                </ScrollView>

            </Container>

            <FooterMenu />

        </Config>
    );
}

export default AddClient;

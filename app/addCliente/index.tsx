import React, { useState } from "react";
import { ScrollView } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import {
    ButtonAddContainer, Container, ContainerAddClient, ContainerInput,
    InputLabel, MapContainer
} from "./styles";

import Title from "@/components/Title";
import FooterMenu from "@/components/FooterMenu";
import Config from "@/components/Config";
import FormInput from "@/components/Form";
import { useForm, useWatch } from "react-hook-form";
import { addClientSchema } from "@/schemas/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import MapComponent from "@/components/Map";
import Button from "@/components/Button";


function AddClient() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(addClientSchema),
        defaultValues: {
            name: "",
            email: "",
            contato: "",
            tipoIdentificador: "",
            identificador: "",
            geolocation: ""
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
                                placeholder="Digite o email do cliente"
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
                                placeholder="Digite o email do cliente"
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
                                placeholder="Digite o email do cliente"
                                errorMessage={errors.identificador?.message}
                                errors={errors}
                                isValid={isIdentificadorValid && !errors.identificador ? true : false}
                            />
                        </ContainerInput>

                        <InputLabel>Localização</InputLabel>

                        <MapContainer>
                            <MapComponent />
                        </MapContainer>

                        <ButtonAddContainer>
                            <Button onPress={handleSubmit}>Criar</Button>
                        </ButtonAddContainer>
                    </ContainerAddClient>
                </ScrollView>
            </Container>
            <FooterMenu />
        </Config>
    );
}

export default AddClient;

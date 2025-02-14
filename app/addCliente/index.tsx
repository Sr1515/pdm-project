import React, { useState } from "react";

import { ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";

import {
    ButtonAddContainer, Container, ContainerAddClient, ContainerInput,
    InputAddClient, InputLabel, MapContainer
} from "./styles";


import Title from "@/components/Title";
import Button from "@/components/Button";
import FooterMenu from "@/components/FooterMenu";
import Config from "@/components/Config";

function AddClient() {

    const [region, setRegion] = useState({
        latitude: -23.5505,
        longitude: -46.6333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    return (
        <Config>
            <Container>

                <Title>Registrar Cliente</Title>

                <ScrollView>

                    <ContainerAddClient>

                        <ContainerInput>
                            <InputLabel>Nome do cliente</InputLabel>
                            <InputAddClient
                                placeholder="Digite o nome do cliente"
                                placeholderTextColor="gray"
                                underlineColorAndroid="transparent"
                            />
                        </ContainerInput>

                        <ContainerInput>
                            <InputLabel>Email</InputLabel>
                            <InputAddClient
                                placeholder="Digite o email"
                                placeholderTextColor="gray"
                                keyboardType="email-address"
                                underlineColorAndroid="transparent"
                            />
                        </ContainerInput>

                        <ContainerInput>
                            <InputLabel>Contato</InputLabel>
                            <InputAddClient
                                placeholder="Digite o número de contato"
                                placeholderTextColor="gray"
                                keyboardType="phone-pad"
                                underlineColorAndroid="transparent"
                            />
                        </ContainerInput>

                        <ContainerInput>
                            <InputLabel>Tipo de identificador</InputLabel>
                            <InputAddClient
                                placeholder="Digite o tipo do identificador"
                                placeholderTextColor="gray"
                                underlineColorAndroid="transparent"
                            />
                        </ContainerInput>


                        <ContainerInput>
                            <InputLabel>Identificador</InputLabel>
                            <InputAddClient
                                placeholder="Digite o identificador"
                                placeholderTextColor="gray"
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                            />
                        </ContainerInput>

                        <InputLabel>Localização</InputLabel>

                        <MapContainer>

                            <MapView
                                style={{ flex: 1 }}
                                region={region}
                                onRegionChangeComplete={setRegion}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: region.latitude,
                                        longitude: region.longitude,
                                    }}
                                />
                            </MapView>

                        </MapContainer>

                        <ButtonAddContainer>
                            <Button>Adicionar Cliente</Button>
                        </ButtonAddContainer>

                    </ContainerAddClient>

                </ScrollView>

            </Container>

            <FooterMenu />
        </Config>
    );
}

export default AddClient;
import React from "react";
import { Marker } from "react-native-maps";

import { ButtonClientes, Container, StyledMapView } from "./styles";

import Button from "@/components/Button";
import Title from "@/components/Title";
import FooterMenu from "@/components/FooterMenu";
import Config from "@/components/Config";

const clients = [
    { id: 225, name: 'Itapioca', latitude: -3.7327, longitude: -38.5267 },
    { id: 226, name: 'Caucaia', latitude: -3.7327, longitude: -38.6567 },
    { id: 122, name: 'Fortaleza', latitude: -3.7187, longitude: -38.5197 },
    { id: 494, name: 'Maracanaú', latitude: -3.8767, longitude: -38.6257 },
    { id: 465, name: 'Canindé', latitude: -4.3587, longitude: -39.3117 },
    { id: 112, name: 'Aracati', latitude: -4.5617, longitude: -37.7697 },
    { id: 116, name: 'Quixadá', latitude: -4.9687, longitude: -39.0157 },
    { id: 19, name: 'Limoeiro do Norte', latitude: -5.1457, longitude: -38.0987 },
    { id: 361, name: 'Juazeiro do Norte', latitude: -7.2137, longitude: -39.3157 },
    { id: 426, name: 'Salgueiro', latitude: -8.0737, longitude: -39.1237 },
    { id: 316, name: 'Serra Talhada', latitude: -7.9917, longitude: -38.2987 },
];

function MapCliente() {

    const initialRegion = {
        latitude: -5.1457,
        longitude: -38.0987,
        latitudeDelta: 5,
        longitudeDelta: 5,
    };

    return (
        <Config>
            <Container>

                <Title>Encontre seus clientes</Title>

                <StyledMapView initialRegion={initialRegion}>
                    {clients.map((client) => (
                        <Marker
                            key={client.id}
                            coordinate={{ latitude: client.latitude, longitude: client.longitude }}
                            title={client.name}
                            description={`ID: ${client.id}`}
                        />
                    ))}
                </StyledMapView>

                <ButtonClientes>
                    <Button>Adicionar Cliente</Button>
                </ButtonClientes>

            </Container>

            <FooterMenu />
        </Config>
    );
};

export default MapCliente;
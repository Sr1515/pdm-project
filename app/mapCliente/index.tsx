import React, { useContext, useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { ButtonClientes, Container, StyledMapView } from "./styles";
import Button from "@/components/Button";
import Title from "@/components/Title";
import FooterMenu from "@/components/FooterMenu";
import Config from "@/components/Config";
import * as Location from "expo-location";
import { api } from "@/api/axios";
import { AuthContext } from "@/context/AuthProvider";
import { router } from "expo-router";

interface LocationType {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

function MapCliente() {
    const { tokenState } = useContext(AuthContext);
    const [clientes, setClientes] = useState<any[]>([]);
    const [userLocation, setUserLocation] = useState<LocationType | null>(null);
    const [loading, setLoading] = useState(true);

    const getUserLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status === "granted") {
            const location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;

            setUserLocation({
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });

        } else {
            console.log("Permissão de localização negada");
        }
    };

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

        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (tokenState) {
            getUserLocation();
            fetchClientes();
        }
    }, [tokenState]);

    const handleAddCliente = () => {
        router.replace("/addCliente")
    };

    if (loading || !userLocation) {
        return <Title>Carregando Mapa...</Title>;
    }

    return (
        <Config>

            <Container>

                <Title>Encontre seus clientes</Title>

                <StyledMapView initialRegion={userLocation}>

                    {clientes.map((client) => {

                        const latitude = client.address.coordinates[1];
                        const longitude = client.address.coordinates[0];

                        return (
                            <Marker
                                key={client._id}
                                coordinate={{
                                    latitude,
                                    longitude,
                                }}
                                title={client.name}
                                description={`ID: ${client._id}`}
                            />
                        );
                    })}

                </StyledMapView>

                <ButtonClientes>
                    <Button onPress={handleAddCliente}>Adicionar Cliente</Button>
                </ButtonClientes>

            </Container>

            <FooterMenu />

        </Config>
    );
};

export default MapCliente;

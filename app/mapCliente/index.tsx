import React, { useContext, useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { Container, StyledMapView } from "./styles";
import Title from "@/components/Title";
import FooterMenu from "@/components/FooterMenu";
import Config from "@/components/Config";
import * as Location from "expo-location";
import { api } from "@/api/axios";
import { AuthContext } from "@/context/AuthProvider";
import { Text } from "react-native";
import { useAuth } from "@/hooks/useAuth";

interface LocationType {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}
interface Client {
    _id: string;
    name: string;
    address: {
        coordinates: [number, number];
    };
}

function MapCliente() {
    const { checkToken } = useAuth();
    checkToken();

    const { tokenState } = useContext(AuthContext);
    const [clientes, setClientes] = useState<Client[]>([]);
    const [userLocation, setUserLocation] = useState<LocationType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

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
        if (!tokenState) return;

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
        const fetchData = async () => {
            await fetchClientes();
            await getUserLocation();
            console.log(JSON.stringify(clientes));
        };

        fetchData();
    }, [tokenState]);

    return (
        <Config>
            <Container>

                <Title>Encontre seus clientes</Title>

                {userLocation ? (
                    <StyledMapView region={userLocation}>
                        {clientes.length > 0 ? (
                            clientes.map((client) => (
                                <Marker
                                    key={client._id}
                                    coordinate={{
                                        latitude: client.address.coordinates[0],
                                        longitude: client.address.coordinates[1],
                                    }}
                                    title={client.name}
                                    description={`ID: ${client._id}`}
                                />
                            ))
                        ) : loading ? (
                            <Text>Carregando clientes...</Text>
                        ) : (
                            <Text>Nenhum cliente encontrado</Text>
                        )}
                    </StyledMapView>

                ) : (
                    <Text>Carregando mapa...</Text>
                )}

            </Container>

            <FooterMenu />
        </Config>
    );
}

export default MapCliente;

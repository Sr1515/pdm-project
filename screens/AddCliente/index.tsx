import React, { useState } from "react";
import { StatusBar, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ButtonAdd, ContainerAddProduct, ContainerHeader, InputAddProduct, InputContainer, InputLabel, MapContainer } from "./styles";
import Title from "@/components/Title";
import { FooterMenu } from "@/components/FooterMenu";
import Button from "@/components/Button";


export default function AddCliente() {
    const [region, setRegion] = useState({
        latitude: -23.5505,
        longitude: -46.6333,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ContainerHeader>
                <Title>Registrar Cliente</Title>
                <ScrollView>
                    <ContainerAddProduct>

                        <InputContainer>
                            <InputLabel>Nome do cliente</InputLabel>
                            <InputAddProduct
                                placeholder="Digite o nome do cliente"
                                placeholderTextColor="gray"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Email</InputLabel>
                            <InputAddProduct
                                placeholder="Digite o email"
                                placeholderTextColor="gray"
                                keyboardType="email-address"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Contato</InputLabel>
                            <InputAddProduct
                                placeholder="Digite o número de contato"
                                placeholderTextColor="gray"
                                keyboardType="phone-pad"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Tipo de identificador</InputLabel>
                            <InputAddProduct
                                placeholder="Digite o tipo do identificador"
                                placeholderTextColor="gray"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>


                        <InputContainer>
                            <InputLabel>Identificador</InputLabel>
                            <InputAddProduct
                                placeholder="Digite o identificador"
                                placeholderTextColor="gray"
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

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

                        <ButtonAdd>
                            <Button>Adicionar Cliente</Button>
                        </ButtonAdd>

                    </ContainerAddProduct>
                </ScrollView>
            </ContainerHeader>
            <FooterMenu />
        </>
    );
}
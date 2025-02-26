import React from "react";
import { Container, MenuItem, MenuText } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "@/hooks/useAuth";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function FooterMenu() {
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#121212"
                translucent={false}
            />

            <Container>
                <MenuItem>
                    <Link href="/home">
                        <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Ionicons name="home" size={32} color={"white"} />
                            <MenuText>Home</MenuText>
                        </View>
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href="/venda">
                        <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Ionicons name="cube-outline" size={32} color={"white"} />
                            <MenuText>Vendas</MenuText>
                        </View>
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href="/mapCliente">
                        <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Ionicons name="map-outline" size={32} color={"white"} />
                            <MenuText>Mapa</MenuText>
                        </View>
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href="/cliente">
                        <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Ionicons name="cart-outline" size={32} color={"white"} />
                            <MenuText>Clientes</MenuText>
                        </View>
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Ionicons name="exit-outline" size={32} color={"white"} />
                    <TouchableOpacity onPress={handleLogout}>
                        <MenuText>Sair</MenuText>
                    </TouchableOpacity>
                </MenuItem>
            </Container>
        </>
    );
}

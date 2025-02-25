import React from "react";
import { Container, MenuItem, MenuText } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "@/hooks/useAuth";
import { StatusBar, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Config from "../Config";

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
                    <Ionicons name="home" size={32} color={"white"} />
                    <MenuText>
                        <Link href="/home">Home</Link>
                    </MenuText>
                </MenuItem>

                <MenuItem>
                    <Ionicons name="cube-outline" size={32} color={"white"} />
                    <MenuText>
                        <Link href="/venda">Vendas</Link>
                    </MenuText>
                </MenuItem>

                <MenuItem>
                    <Ionicons name="cart-outline" size={32} color={"white"} />
                    <MenuText>
                        <Link href="/cliente">Clientes</Link>
                    </MenuText>
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

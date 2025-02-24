import React from "react";
import { Container, MenuItem, MenuText } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "@/hooks/useAuth"; // Importa o hook para acessar o contexto
import { Link, router } from "expo-router"; // Importa o router para navegar
import { StatusBar } from "react-native";

export default function FooterMenu() {
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
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
                    <MenuText onPress={handleLogout}>Sair</MenuText>
                </MenuItem>
            </Container>
        </>
    );
}

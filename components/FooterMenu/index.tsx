import React from "react";
import { Container, MenuItem, MenuText } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons"

export default function FooterMenu() {
    return (

        <Container>

            <MenuItem>
                <Ionicons name="home" size={32} color={"white"} />
                <MenuText>Home</MenuText>
            </MenuItem>

            <MenuItem>
                <Ionicons name="cube-outline" size={32} color={"white"} />
                <MenuText>Vendas</MenuText>
            </MenuItem>

            <MenuItem>
                <Ionicons name="cart-outline" size={32} color={"white"} />
                <MenuText>Clientes</MenuText>
            </MenuItem>

            <MenuItem>
                <Ionicons name="exit-outline" size={32} color={"white"} />
                <MenuText>Sair</MenuText>
            </MenuItem>

        </Container>
    );
};

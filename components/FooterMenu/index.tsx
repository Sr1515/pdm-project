import React from "react";
import { Container, MenuItem, MenuText } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons"

import { Link } from "expo-router";

import { theme } from "@/theme";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native"

export default function FooterMenu() {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#121212"
                translucent={false}
            />

            <ThemeProvider theme={theme}>
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
                        <MenuText>
                            <Link href="/login">Sair</Link>
                        </MenuText>
                    </MenuItem>
                </Container>
            </ThemeProvider>

        </>
    );
};

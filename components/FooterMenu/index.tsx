import React from "react";
import { Footer, MenuItem, MenuText } from "./style";
import { SvgUri } from 'react-native-svg';
import Ionicons from "@expo/vector-icons/Ionicons"

export const FooterMenu = () => {
    return (
        <Footer>
            <MenuItem>
                <Ionicons name="home" size={32} color={"white"}/>
                <MenuText>Home</MenuText>
            </MenuItem>
            <MenuItem>
                <SvgUri
                    width="24"
                    height="24"
                    uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
                />
                <MenuText>Vendas</MenuText>
            </MenuItem>
            <MenuItem>
                <SvgUri
                    width="24"
                    height="24"
                    uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
                />
                <MenuText>Clientes</MenuText>
            </MenuItem>
            <MenuItem>
                <SvgUri
                    width="24"
                    height="24"
                    uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
                />
                <MenuText>Sair</MenuText>
            </MenuItem>
        </Footer>
    );
};

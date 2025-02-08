import React from "react";
import { Footer, MenuItem, MenuText } from "./style";
import { SvgUri } from 'react-native-svg';

export const FooterMenu = () => {
    return (
        <Footer>
            <MenuItem>
                <SvgUri
                    width="24"
                    height="24"
                    uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
                />
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

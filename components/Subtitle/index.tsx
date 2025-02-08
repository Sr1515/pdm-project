import React from "react";
import { Text } from "react-native";
import { SubTitleContainer } from "./styles";


type ISubtitle = {
    children: any
}

export default function Subtitle({ children }: ISubtitle) {
    return <SubTitleContainer><Text>{children}</Text></SubTitleContainer>
}
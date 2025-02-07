import React from "react";
import { Text } from "react-native";
import { TitleContainer } from "./styled"

type ITitle = {
    children: any
}

export default function Title({children}: ITitle){
    return <TitleContainer><Text>{children}</Text></TitleContainer>
}
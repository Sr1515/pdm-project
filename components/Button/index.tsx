import React from "react";
import { Text } from "react-native";
import { ButtonDefault } from "./styles";

type IButton = {
    children: React.ReactNode;
};

export default function Button({ children }: IButton) {
    return (
        <ButtonDefault>
            <Text>{children}</Text>
        </ButtonDefault>
    );
}

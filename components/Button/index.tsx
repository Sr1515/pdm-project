import React from "react";
import { Text } from "react-native";
import { ButtonDefault, TextButton } from "./styles";
import { color } from "@rneui/base";

type IButton = {
    children: React.ReactNode;
};

export default function Button({ children }: IButton) {
    return (
        <ButtonDefault>
            <TextButton>{children}</TextButton>
        </ButtonDefault >
    );
}

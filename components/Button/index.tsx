import React from "react";
import { DefaultButton, TextButton } from "./styles";

type IButton = {
    children: React.ReactNode;
    onPress: () => void;
};

export default function Button({ children, onPress }: IButton) {
    return (
        <DefaultButton onPress={onPress}>
            <TextButton>{children}</TextButton>
        </DefaultButton>
    );
}

import React from "react";
import { DefaultButton, TextButton } from "./styles";

type IButton = {
    children: React.ReactNode;
};

export default function Button({ children }: IButton) {
    return (
        <DefaultButton>
            <TextButton>{children}</TextButton>
        </DefaultButton >
    );
}

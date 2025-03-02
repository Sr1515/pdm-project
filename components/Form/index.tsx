import React, { useState } from "react";
import { Controller } from "react-hook-form";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InputContainer, InputLogin, ErrorText } from "./styles";
import { z } from "zod";

type IconName = keyof typeof Ionicons.glyphMap;

type FormInputProps = {
    name: string;
    control: any;
    placeholder: string;
    icon: IconName;
    errorMessage?: string;
    secureTextEntry?: boolean;
    isValid?: boolean;
    errors: any;
};

const FormInput: React.FC<FormInputProps> = ({
    name,
    control,
    placeholder,
    icon,
    errorMessage,
    secureTextEntry = false,
    isValid,
    errors,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <InputContainer
            hasError={!!errorMessage}
            isFocused={isFocused}
            isValid={isValid && !errorMessage}
        >
            <Ionicons
                name={icon}
                size={24}
                color={
                    errorMessage
                        ? "red"
                        : isValid && !errorMessage
                            ? "green"
                            : isFocused
                                ? "white"
                                : "gray"
                }

            />

            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value, onBlur } }) => (
                    <InputLogin
                        placeholder={placeholder}
                        placeholderTextColor={isFocused ? "white" : "gray"}
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry={secureTextEntry}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => {
                            setIsFocused(false);
                            onBlur();
                        }}
                        isFocused={isFocused}
                    />
                )}
            />

            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        </InputContainer>
    );
};

export default FormInput;

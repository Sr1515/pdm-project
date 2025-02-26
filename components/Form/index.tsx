import React from "react";
import { Controller } from "react-hook-form";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ErrorText, InputContainer, InputLogin } from "./styles";


type IconName = keyof typeof Ionicons.glyphMap;

type FormInputProps = {
    name: string;
    control: any;
    rules: any;
    placeholder: string;
    icon: IconName;
    isValid?: boolean;
    errorMessage?: string;
    secureTextEntry?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
    name,
    control,
    rules,
    placeholder,
    icon,
    isValid,
    errorMessage,
    secureTextEntry = false,
}) => {
    return (
        <InputContainer hasError={!!errorMessage} isValid={isValid}>

            <Ionicons
                name={icon}
                size={24}
                color="gray"
                style={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: [{ translateY: -12 }],
                }}
            />

            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, value } }) => (
                    <InputLogin
                        placeholder={placeholder}
                        placeholderTextColor="gray"
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry={secureTextEntry}
                        style={{
                            paddingLeft: 40,
                        }}
                    />
                )}
            />
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        </InputContainer>
    );
};

export default FormInput;

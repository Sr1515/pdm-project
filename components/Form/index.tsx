import React from "react";
import { Controller } from "react-hook-form";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ErrorText, InputContainer, InputLogin } from "./styles";

type FormInputProps = {
    name: string;
    control: any;
    rules: any;
    placeholder: string;
    icon: string;
    isValid: boolean;
    errorMessage?: string;
    secureTextEntry?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
    name,
    control,
    rules,
    placeholder,
    isValid,
    errorMessage,
    secureTextEntry = false,
}) => {
    return (
        <InputContainer hasError={!!errorMessage} isValid={isValid}>
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
                    />
                )}
            />
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        </InputContainer>
    );
};

export default FormInput;

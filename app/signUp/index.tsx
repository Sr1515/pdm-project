import React, { useState } from "react";
import 'react-native-reanimated';

import Ionicons from "@expo/vector-icons/Ionicons";
import { api } from "@/api/axios"; // Certifique-se de importar o axios

import {
    ButtonSignUp, Container, ContainerSignUp, LoginLink, Text, TextContainer,
} from "./style";

import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Config from "@/components/Config";
import FormInput from "@/components/Form";
import { useForm, useWatch } from "react-hook-form";
import { router } from "expo-router";
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import { AddImageButton, AddImageButtonText, ProductImage, ProductImageContainer } from "../addProduct/styles";
import { TouchableOpacity } from "react-native";

// Defina a tipagem correta para a localização
type LocationData = Location.LocationObject | null;

function SignUp() {
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState<LocationData>(null);
    const [image, setImage] = useState<string | null>(null);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password1: "",
            password2: "",
            image: "",
        }
    });

    const onSubmit = async (data: any) => {
        setLoading(true);

        try {
            const response = await api.post("/supplier",
                {
                    name: data.name,
                    email: data.email,
                    password: data.password1,
                    geolocalization: {
                        type: "Point",
                        coordinates: location ? [location.coords.latitude, location.coords.longitude] : [],
                    },
                },
            );

            if (response.status === 201) {
                alert("Cadastro bem-sucedido!");
                router.replace("/login");
            } else {
                alert("Erro ao cadastrar, tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao tentar registrar:", error);
            alert("Erro ao tentar cadastrar. Verifique seus dados e tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
            const loc = await Location.getCurrentPositionAsync({});
            console.log(`LOCALIZAÇÃO: ${loc}`)
            setLocation(loc);
        } else {
            alert("Permissão de localização negada");
        }
    };

    const handleRedirect = () => {
        router.replace('/login');
    };

    return (
        <Config>
            <Container>
                <Title>Registre sua conta</Title>
                <Subtitle>Crie aqui sua conta</Subtitle>

                <ContainerSignUp>
                    <FormInput
                        name="name"
                        control={control}
                        rules={{
                            required: "Nome completo é obrigatório",
                        }}
                        placeholder="Nome completo"
                        icon="person-outline"
                        errorMessage={errors.name?.message}
                    />

                    <FormInput
                        name="email"
                        control={control}
                        rules={{
                            required: "Email é obrigatório",
                        }}
                        placeholder="Email"
                        icon="person-outline"
                        errorMessage={errors.email?.message}
                    />

                    <FormInput
                        name="password1"
                        control={control}
                        rules={{
                            required: "Senha é obrigatória",
                            minLength: {
                                value: 4,
                                message: "A senha deve ter no mínimo 4 caracteres",
                            },
                        }}
                        placeholder="Senha"
                        icon="lock-closed-outline"
                        errorMessage={errors.password1?.message}
                        secureTextEntry
                    />

                    <FormInput
                        name="password2"
                        control={control}
                        rules={{
                            required: "Confirmar senha é obrigatória",
                            minLength: {
                                value: 4,
                                message: "A senha deve ter no mínimo 4 caracteres",
                            },
                        }}
                        placeholder="Confirmar senha"
                        icon="lock-closed-outline"
                        errorMessage={errors.password2?.message}
                        secureTextEntry
                    />

                    <TouchableOpacity onPress={getLocation} style={{ marginTop: 20 }}>
                        <Text style={{ color: '#007bff', fontSize: 16 }}>Obter localização</Text>
                    </TouchableOpacity>


                    <ButtonSignUp>
                        <Button onPress={handleSubmit(onSubmit)}>{loading ? "Cadastrando..." : "Cadastrar"}</Button>
                    </ButtonSignUp>

                    <TextContainer>
                        <Text style={{ color: 'white', fontSize: 16 }}>Já possui uma conta?</Text>
                        <TouchableOpacity onPress={handleRedirect}>
                            <Text style={{ color: '#007bff', fontSize: 16 }}>
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    </TextContainer>

                </ContainerSignUp>
            </Container>
        </Config >
    );
}

export default SignUp;

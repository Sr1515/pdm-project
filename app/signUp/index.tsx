import React, { useState, useEffect } from "react";
import 'react-native-reanimated';
import { api } from "@/api/axios";
import { ButtonSignUp, Container, ContainerSignUp, Text, TextAbout, TextContainer, TextRedirect } from "./style";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Config from "@/components/Config";
import FormInput from "@/components/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from "expo-router";
import * as Location from 'expo-location';
import { useWatch } from "react-hook-form";
import { signUpSchema } from "@/schemas/validation";
import { TouchableOpacity } from "react-native";
import { useAuth } from "@/hooks/useAuth";
interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

type LocationData = Location.LocationObject | null;

function SignUp() {
    const { checkToken } = useAuth();
    checkToken("/home");

    const [loading, setLoading] = useState<boolean>(false);
    const [location, setLocation] = useState<LocationData>(null);

    const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });

    const nameValue = useWatch({ control, name: "name" });
    const emailValue = useWatch({ control, name: "email" });
    const passwordValue = useWatch({ control, name: "password" });

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    const isPasswordValid = passwordValue.length >= 6;

    const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
        setLoading(true);

        try {
            const response = await api.post("/supplier", {
                name: data.name,
                email: data.email,
                password: data.password,
                geolocalization: {
                    type: "Point",
                    coordinates: location ? [location.coords.latitude, location.coords.longitude] : [],
                },
            });

            if (response.status === 201) {
                alert("Cadastro bem-sucedido!");
                router.replace("/login");
            } else {
                alert("Erro ao cadastrar, tente novamente.");
            }

        } catch (error) {
            alert("Erro ao tentar cadastrar. Verifique seus dados e tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const getLocation = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status === 'granted') {
                const loc = await Location.getCurrentPositionAsync({});
                setLocation(loc);
            } else {
                alert("Permissão de localização negada");
            }
        };

        getLocation();
    }, []);

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
                        placeholder="Nome completo"
                        icon="person-outline"
                        errorMessage={errors.name?.message}
                        isValid={nameValue.length > 0}
                        errors={errors}
                    />

                    <FormInput
                        name="email"
                        control={control}
                        placeholder="Email"
                        icon="mail-outline"
                        errorMessage={errors.email?.message}
                        isValid={isEmailValid}
                        errors={errors}
                    />

                    <FormInput
                        name="password"
                        control={control}
                        placeholder="Senha"
                        icon="lock-closed-outline"
                        secureTextEntry
                        errorMessage={errors.password?.message}
                        isValid={isPasswordValid}
                        errors={errors}
                    />

                    <ButtonSignUp>
                        <Button onPress={handleSubmit(onSubmit)}>{loading ? "Cadastrando..." : "Cadastrar"}</Button>
                    </ButtonSignUp>

                    <TextContainer>

                        <TextAbout>
                            Já possui uma conta?
                        </TextAbout>

                        <TouchableOpacity onPress={handleRedirect}>

                            <TextRedirect>
                                Entrar
                            </TextRedirect>

                        </TouchableOpacity>

                    </TextContainer>

                </ContainerSignUp>

            </Container>

        </Config>
    );
}

export default SignUp;

import React, { useState } from "react";
import { StatusBar, Alert, ScrollView, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import Title from "@/components/Title";
import Button from "@/components/Button";
import { FooterMenu } from "@/components/FooterMenu";
import {
    AddImageButton,
    AddImageButtonText,
    ButtonAdd,
    ContainerAddProduct,
    ContainerHeader,
    InputAddProduct,
    InputContainer,
    InputLabel,
    ProductImage,
    ProductImageContainer,
} from "./styles";

export default function AddProduct() {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Permissão necessária", "Precisamos de acesso à sua galeria para selecionar uma imagem.");
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ContainerHeader>
                <Title>Adicionar produto</Title>
                <ScrollView>
                    <ContainerAddProduct>
                        <InputContainer>
                            <InputLabel>Nome do produto</InputLabel>
                            <InputAddProduct
                                placeholder="Digite o nome do produto"
                                placeholderTextColor="gray"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Data de fabricação</InputLabel>
                            <InputAddProduct
                                placeholder="dd/mm/aaaa"
                                placeholderTextColor="gray"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Data de validade</InputLabel>
                            <InputAddProduct
                                placeholder="dd/mm/aaaa"
                                placeholderTextColor="gray"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Tipo do produto</InputLabel>
                            <InputAddProduct
                                placeholder="Digite o tipo do produto"
                                placeholderTextColor="gray"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Quantidade</InputLabel>
                            <InputAddProduct
                                placeholder="Digite a quantidade"
                                placeholderTextColor="gray"
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Valor</InputLabel>
                            <InputAddProduct
                                placeholder="R$ 0,00"
                                placeholderTextColor="gray"
                                keyboardType="numeric"
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Descrição</InputLabel>
                            <InputAddProduct
                                placeholder="Digite a descrição do produto"
                                placeholderTextColor="gray"
                                multiline={true}
                                underlineColorAndroid="transparent"
                            />
                        </InputContainer>

                        <InputLabel>Imagem do produto</InputLabel>
                        <ProductImageContainer>
                            {image && <ProductImage source={{ uri: image }} />}
                            <AddImageButton onPress={pickImage}>
                                <Ionicons name="camera" size={20} color="white" />
                                <AddImageButtonText>Adicionar Imagem</AddImageButtonText>
                            </AddImageButton>

                            <Button>Adicionar produto</Button>
                        </ProductImageContainer>
                    </ContainerAddProduct>
                </ScrollView>
            </ContainerHeader>
            <FooterMenu />
        </>
    );
}
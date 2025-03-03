// ImagePickerComponent.tsx
import React, { useState } from "react";
import { Alert, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { AddImageButton, AddImageButtonText, ProductImage, ProductImageContainer } from "./styles"; // Ajuste de acordo com seus estilos

type ImagePickerComponentProps = {
    onImagePicked: (uri: string) => void;
    errorMessage?: string;
};

const ImagePickerComponent: React.FC<ImagePickerComponentProps> = ({ onImagePicked, errorMessage }) => {
    const [image, setImage] = useState<string | null>(null);
    const [imageError, setImageError] = useState<string | null>(null);

    const isValidImage = (uri: string) => {
        const validFormats = ['image/png', 'image/jpeg'];
        const fileExtension = uri.split('.').pop()?.toLowerCase();
        return validFormats.includes(`image/${fileExtension}`);
    };

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
            const uri = result.assets[0].uri;
            if (isValidImage(uri)) {
                setImage(uri);
                setImageError(null);
                onImagePicked(uri);
            } else {
                setImageError("Formato de imagem inválido. Apenas .png ou .jpeg são permitidos.");
                Alert.alert("Erro", "Formato de imagem inválido. Apenas .png ou .jpeg são permitidos.");
            }
        }
    };

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Permissão necessária", "Precisamos de acesso à sua câmera para tirar uma foto.");
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            if (isValidImage(uri)) {
                setImage(uri);
                setImageError(null);
                onImagePicked(uri);
            } else {
                setImageError("Formato de imagem inválido. Apenas .png ou .jpeg são permitidos.");
                Alert.alert("Erro", "Formato de imagem inválido. Apenas .png ou .jpeg são permitidos.");
            }
        }
    };

    const chooseImageSource = () => {
        Alert.alert(
            "Escolher Imagem",
            "Deseja escolher uma imagem da galeria ou tirar uma foto?",
            [
                {
                    text: "Galeria",
                    onPress: pickImage,
                },
                {
                    text: "Câmera",
                    onPress: takePhoto,
                },
                {
                    text: "Cancelar",
                    style: "cancel",
                },
            ]
        );
    };

    return (
        <View>
            <Text>{imageError || ""}</Text>
            <ProductImageContainer>
                {image && <ProductImage source={{ uri: image }} />}
                <AddImageButton onPress={chooseImageSource}>
                    <Ionicons name="camera" size={20} color="white" />
                    <AddImageButtonText>Escolher Imagem</AddImageButtonText>
                </AddImageButton>
            </ProductImageContainer>
        </View>
    );
};

export default ImagePickerComponent;

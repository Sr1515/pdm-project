import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Alert } from "react-native";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProductSchema } from "@/schemas/validation";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { Container, ContainerAddProduct, InputContainer, InputLabel } from "./styles";
import ImagePickerComponent from "@/components/ImagePickerComponent";
import FormInput from "@/components/Form";
import FooterMenu from "@/components/FooterMenu";
import Config from "@/components/Config";
import { AuthContext } from "@/context/AuthProvider";
import { api } from "@/api/axios";
import { router, useLocalSearchParams } from "expo-router";
import axios from "axios";
import * as FileSystem from 'expo-file-system';

interface ProductData {
    productName: string;
    manufactureDate: string;
    expiryDate: string;
    productType: string;
    quantity: string;
    value: string;
    description: string;
}

const UpdateProduct = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [productPlaceholder, setProductPlaceholder] = useState<any>({});
    const [loading, setLoading] = useState(false);
    const { tokenState } = useContext(AuthContext);
    const [image, setImage] = useState<string | null>(null);

    const { control, handleSubmit, formState: { errors } } = useForm<ProductData>({
        resolver: zodResolver(addProductSchema),
        defaultValues: {
            productName: "",
            manufactureDate: "",
            expiryDate: "",
            productType: "",
            quantity: "",
            value: "",
            description: "",
        }
    });

    console.log(id)

    const productName = useWatch({ control, name: "productName" });
    const manufactureDate = useWatch({ control, name: "manufactureDate" });
    const expiryDate = useWatch({ control, name: "expiryDate" });
    const productType = useWatch({ control, name: "productType" });
    const quantity = useWatch({ control, name: "quantity" });
    const value = useWatch({ control, name: "value" });
    const description = useWatch({ control, name: "description" });

    const isProductNameValid = productName?.length >= 3;
    const isManufactureDateValid = /^(\d{2})\/(\d{2})\/(\d{4})$/.test(manufactureDate || "");
    const isExpiryDateValid = /^(\d{2})\/(\d{2})\/(\d{4})$/.test(expiryDate || "");
    const isProductTypeValid = productType?.length > 0;
    const isDescriptionValid = description?.length > 0;
    const isQuantityValid = quantity && Number(quantity) > 0;
    const isValueValid = value && parseFloat(value) > 0;

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await api.get(`/product/${id}`, {
                    headers: {
                        Authorization: `Bearer ${tokenState}`,
                    },
                });

                // setProductPlaceholder(response.data)
                console.log(response)

            } catch (error) {
                Alert.alert("Erro ao solicitar os dados");
            }
        };
        getProduct();

    }, [tokenState]);


    const onSubmit = async (data: ProductData) => {
        setLoading(true);

        const formattedManufacturingDate = isValidDate(data.manufactureDate);
        const formattedExpiryDate = data.expiryDate ? isValidDate(data.expiryDate) : null;

        if (!formattedManufacturingDate) {
            Alert.alert("Erro", "Data de fabricação inválida.");
            setLoading(false);
            return;
        }

        if (data.expiryDate && !formattedExpiryDate) {
            Alert.alert("Erro", "Data de validade inválida.");
            setLoading(false);
            return;
        }

        const price = parseFloat(data.value);
        const ammount = parseInt(data.quantity, 10);

        if (isNaN(price) || isNaN(ammount)) {
            Alert.alert("Erro", "Por favor, insira valores válidos para preço e quantidade.");
            setLoading(false);
            return;
        }

        try {
            const productData = {
                "name": data.productName,
                "description": data.description,
                "ammount": ammount,
                "type": data.productType,
                "price": price,
                "manufacturing_date": formattedManufacturingDate,
                "expiration_date": formattedExpiryDate,
                "image": ""
            }

            const productResponse = await api.post("/product", productData, {
                headers: {
                    Authorization: `Bearer ${tokenState}`,
                },
            });

            if (productResponse.status === 201) {

                if (image) {
                    const data = new FormData();

                    data.append('file', {
                        "name": "imagem.jpeg",
                        "type": "image/jpeg",
                        "uri": image
                    } as any)


                    const imageResponse = await api.put(`/product/${productResponse.data.id}`, data, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${tokenState}`,
                        },
                    });

                    if (imageResponse.status === 200) {
                        Alert.alert("Sucesso", "Imagem do produto atualizada com sucesso!");
                        router.replace("/home");
                    }
                }
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    Alert.alert("Erro", error.response?.data?.message || "Erro desconhecido ao tentar cadastrar.");
                } else {
                    Alert.alert("Erro", "Erro de rede ou servidor. Tente novamente.");
                }
            } else {
                Alert.alert("Erro", "Erro inesperado ao tentar cadastrar.");
            }
        } finally {
            setLoading(false);
        }
    };

    const isValidDate = (dateStr: string): Date | null => {
        const parts = dateStr.split('/');
        if (parts.length !== 3) return null;

        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);

        const date = new Date(year, month, day);

        if (date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) {
            return date;
        }

        return null;
    };

    const handleImagePicked = (uri: string) => {
        setImage(uri);
    };

    return (
        <Config>
            <Container>

                <Title>Adicionar Produto</Title>

                <ScrollView>
                    <ContainerAddProduct>

                        <InputContainer>
                            <InputLabel>Nome do produto</InputLabel>
                            <FormInput
                                name="productName"
                                control={control}
                                placeholder={productPlaceholder?.name || "Nome do produto"}
                                errorMessage={errors.productName?.message}
                                errors={errors}
                                isValid={isProductNameValid && !errors.productName ? true : false}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Data de fabricação</InputLabel>
                            <FormInput
                                name="manufactureDate"
                                control={control}
                                placeholder={productPlaceholder?.manufactureDate || "dd/mm/aaaa"}
                                errorMessage={errors.manufactureDate?.message}
                                errors={errors}
                                isValid={isManufactureDateValid && !errors.manufactureDate ? true : false}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Data de validade</InputLabel>
                            <FormInput
                                name="expiryDate"
                                control={control}
                                placeholder={productPlaceholder?.expiryDate || "dd/mm/aaaa"}
                                errorMessage={errors.expiryDate?.message}
                                errors={errors}
                                isValid={isExpiryDateValid && !errors.expiryDate ? true : false}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Tipo do produto</InputLabel>
                            <FormInput
                                name="productType"
                                control={control}
                                placeholder={productPlaceholder?.productType || "Digite o tipo do produto"}
                                errorMessage={errors.productType?.message}
                                errors={errors}
                                isValid={isProductTypeValid && !errors.productType ? true : false}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Quantidade</InputLabel>
                            <FormInput
                                name="quantity"
                                control={control}
                                placeholder={productPlaceholder?.ammount || "Digite a quantidade"}
                                errorMessage={errors.quantity?.message}
                                errors={errors}
                                isValid={isQuantityValid && !errors.quantity ? true : false}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Valor</InputLabel>
                            <FormInput
                                name="value"
                                control={control}
                                placeholder={productPlaceholder?.value || "0.00"}
                                errorMessage={errors.value?.message}
                                errors={errors}
                                isValid={isValueValid && !errors.value ? true : false}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Descrição</InputLabel>
                            <FormInput
                                name="description"
                                control={control}
                                placeholder={productPlaceholder?.description || "Digite a descrição do produto"}
                                errorMessage={errors.description?.message}
                                errors={errors}
                                isValid={isDescriptionValid && !errors.description ? true : false}
                            />
                        </InputContainer>

                        <InputLabel>Imagem do produto</InputLabel>
                        <ImagePickerComponent onImagePicked={handleImagePicked} />

                        <Button onPress={handleSubmit(onSubmit)}>
                            {loading ? "Cadastrando..." : "Adicionar Produto"}
                        </Button>

                    </ContainerAddProduct>
                </ScrollView>
            </Container>
            <FooterMenu />
        </Config>
    );
};

export default UpdateProduct;

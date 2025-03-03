import React from "react";
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

const AddProduct = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(addProductSchema),
    });

    const productName = useWatch({ control, name: "productName" });
    const manufactureDate = useWatch({ control, name: "manufactureDate" });
    const expiryDate = useWatch({ control, name: "expiryDate" });
    const productType = useWatch({ control, name: "productType" });
    const quantity = useWatch({ control, name: "quantity" });
    const value = useWatch({ control, name: "value" });
    const description = useWatch({ control, name: "description" });

    const [image, setImage] = React.useState<string | null>(null);

    const isProductNameValid = productName?.length >= 3;
    const isManufactureDateValid = /^(\d{2})\/(\d{2})\/(\d{4})$/.test(manufactureDate || "");
    const isExpiryDateValid = /^(\d{2})\/(\d{2})\/(\d{4})$/.test(expiryDate || "");
    const isProductTypeValid = productType?.length > 0;
    const isDescriptionValid = description?.length > 0;
    const isQuantityValid = quantity && Number(quantity) > 0;
    const isValueValid = value && parseFloat(value) > 0;

    const onSubmit = (data: any) => {
        if (!image) {
            Alert.alert("Erro", "Você precisa adicionar uma imagem do produto.");
            return;
        }

        console.log("Produto Adicionado:", data);
        Alert.alert("Sucesso", "Produto adicionado com sucesso!");
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
                                placeholder="Digite o nome do produto"
                                errorMessage={errors.productName?.message}
                                errors={errors}
                                isValid={isProductNameValid && !errors.productName}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Data de fabricação</InputLabel>
                            <FormInput
                                name="manufactureDate"
                                control={control}
                                placeholder="dd/mm/aaaa"
                                errorMessage={errors.manufactureDate?.message}
                                errors={errors}
                                isValid={isManufactureDateValid && !errors.manufactureDate}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Data de validade</InputLabel>
                            <FormInput
                                name="expiryDate"
                                control={control}
                                placeholder="dd/mm/aaaa"
                                errorMessage={errors.expiryDate?.message}
                                errors={errors}
                                isValid={isExpiryDateValid && !errors.expiryDate}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Tipo do produto</InputLabel>
                            <FormInput
                                name="productType"
                                control={control}
                                placeholder="Digite o tipo do produto"
                                errorMessage={errors.productType?.message}
                                errors={errors}
                                isValid={isProductTypeValid && !errors.productType}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Quantidade</InputLabel>
                            <FormInput
                                name="quantity"
                                control={control}
                                placeholder="Digite a quantidade"
                                errorMessage={errors.quantity?.message}
                                errors={errors}
                                isValid={!!(isQuantityValid && !errors.quantity)}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Valor</InputLabel>
                            <FormInput
                                name="value"
                                control={control}
                                placeholder="0.00"
                                errorMessage={errors.value?.message}
                                errors={errors}
                                isValid={!!(isValueValid && !errors.value)}
                            />
                        </InputContainer>

                        <InputContainer>
                            <InputLabel>Descrição</InputLabel>
                            <FormInput
                                name="description"
                                control={control}
                                placeholder="Digite a descrição do produto"
                                errorMessage={errors.description?.message}
                                errors={errors}
                                isValid={isDescriptionValid && !errors.description}
                            />
                        </InputContainer>

                        <InputLabel>Imagem do produto</InputLabel>
                        <ImagePickerComponent onImagePicked={handleImagePicked} />

                        <Button onPress={handleSubmit(onSubmit)}>Adicionar Produto</Button>
                    </ContainerAddProduct>
                </ScrollView>
            </Container>
            <FooterMenu />
        </Config>
    );
};

export default AddProduct;
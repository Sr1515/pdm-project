import { api } from "@/api/axios";
import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-native";
import { Container } from "./styles";
import { AuthContext } from "@/context/AuthProvider";
import axios from "axios";

interface IImage {
    id: string
}

export const ProductImageShow = ({ id }: IImage) => {
    const { tokenState } = useContext(AuthContext);

    return (
        <Container>
            <Image source={{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreshorganicos.com.br%2Fp%2Fbatata-doce-organica-700g%2F&psig=AOvVaw2DKRkoxTnXQ_4qTi0hAy2y&ust=1741268812878000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNDBxoWK84sDFQAAAAAdAAAAABAE" }} >
            </Image>
        </Container >
    )
}
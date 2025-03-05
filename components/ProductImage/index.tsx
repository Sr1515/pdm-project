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
    const [image, setImage] = useState("");

    useEffect(() => {

        (async () => {

            api.get("/product-image/" + id, { headers: { Authorization: `Bearer ${tokenState}` }, responseType: 'arraybuffer' }).then(res => {
                ; setImage(`data:${res.headers['content-type']};base64,${Buffer.from(String.fromCharCode(...new Uint8Array(res.data)), 'binary')
                    .toString('base64')}`)
            })

        })()

    }, [])


    return (
        <Container>
            <Image source={{ uri: image }}>
            </Image>
        </Container >
    )
}
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '@/context/AuthProvider';
import { api } from '@/api/axios';
import { Container } from './styles';
import { Image, Text } from 'react-native';

interface IImage {
    id: string;
}

export const ProductImageShow = ({ id }: IImage) => {
    const { tokenState } = useContext(AuthContext);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchImage = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/product-image/${id}`, {
                    headers: {
                        Authorization: `Bearer ${tokenState}`,
                    },
                    responseType: 'blob',
                });

                const blob = response.data;
                const reader = new FileReader();

                reader.onloadend = () => {
                    const base64data = reader.result as string;
                    setImageUrl(base64data);
                };
                reader.readAsDataURL(blob);

            } catch (error) {
                console.error('Erro ao buscar imagem', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImage();
    }, [id, tokenState]);

    return (
        <Container>
            {loading ? (
                <Text>Carregando imagem...</Text>
            ) : (
                <Image
                    source={{ uri: imageUrl || 'https://via.placeholder.com/150' }}
                    style={{ width: 80, height: 80 }}
                />
            )}
        </Container>
    );
};

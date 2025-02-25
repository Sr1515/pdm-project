import React, { useEffect, useState, useContext } from 'react';
import { FlatList } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  Container, Form, Input,
  ButtonSearch, ButtonContainer,
  ButtonItemActionEdit, ButtonItemActionRemove
} from "./styles";

import {
  ProductItem, ProductImage, ProductText,
  ListEmptyText, ProductDescription,
  ProductPrice, ProductInfo
} from "./styles";

import Title from "@/components/Title";
import FooterMenu from "@/components/FooterMenu";
import Button from "@/components/Button";

import Config from "@/components/Config";
import { AuthContext } from "@/context/AuthProvider";
import { router } from "expo-router";

import { api } from '@/api/axios';

function Home() {
  const { tokenState } = useContext(AuthContext);

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    if (!tokenState) {
      return;
    }

    try {
      const response = await api.get("/product", {
        headers: {
          Authorization: `Bearer ${tokenState}`
        }
      });
      setProducts(response.data);

    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tokenState) {
      fetchProducts();
    }
  }, [tokenState]);

  const handleNewProduct = () => {
    router.replace('/addProduct');
  };

  return (

    <Config>

      <Container>
        <Title>Storage.io</Title>

        <Form>
          <Input
            placeholder="Pesquise produtos por nome ou categoria"
            placeholderTextColor="#6B6B6B"
          />
          <ButtonSearch>
            <Ionicons name="search-outline" size={32} color={"black"} />
          </ButtonSearch>
        </Form>

        <Button onPress={handleNewProduct}>Novo item</Button>

        {loading ? (
          <ListEmptyText>Carregando...</ListEmptyText>
        ) : (
          <FlatList

            data={products}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <ListEmptyText>
                Nenhum produto foi adicionado ainda. Adicione um!
              </ListEmptyText>
            )}

            renderItem={({ item }) => (

              <ProductItem>

                <ProductImage source={{ uri: item.image }} />

                <ProductInfo>
                  <ProductText>{item.name}</ProductText>
                  <ProductDescription>{item.description}</ProductDescription>
                  <ProductPrice>{item.price}</ProductPrice>
                </ProductInfo>

                <ButtonContainer>

                  <ButtonItemActionEdit>
                    <Ionicons name="pencil-outline" size={25} color={"white"} />
                  </ButtonItemActionEdit>

                  <ButtonItemActionRemove>
                    <Ionicons name="trash-bin-outline" size={25} color={"white"} />
                  </ButtonItemActionRemove>

                </ButtonContainer>

              </ProductItem>
            )}
          />
        )}
      </Container>

      <FooterMenu />
    </Config>
  );
}

export default Home;

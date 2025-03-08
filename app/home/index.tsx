import React, { useEffect, useState, useContext } from 'react';
import { FlatList, Alert } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useForm, Controller } from 'react-hook-form';

import {
  Container, Form, Input,
  ButtonSearch, ButtonContainer,
  ButtonItemActionEdit, ButtonItemActionRemove,
} from "./styles";

import {
  ProductItem, ProductText,
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
import { ProductImageShow } from '@/components/ProductImage';


function Home() {
  const { tokenState } = useContext(AuthContext);
  const { control, handleSubmit, setValue, getValues } = useForm();

  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    if (!tokenState) {
      return;
    }

    try {

      const response = await api.get("/own-products", {
        headers: {
          Authorization: `Bearer ${tokenState}`
        }
      });

      setProducts(response.data);
      setFilteredProducts(response.data);

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

  const handleSearch = () => {
    const searchTerm = getValues("searchTerm");

    if (searchTerm === "") {

      setFilteredProducts(products);
    }
    else {

      const filtered = products.filter((product) =>
        product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

      setFilteredProducts(filtered);
    }
  };


  const handleDeleteProduct = async (productId: string) => {

    Alert.alert(
      "Excluir produto",
      "Tem certeza que deseja excluir este produto?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Excluir",
          style: "destructive",

          onPress: async () => {

            try {

              await api.delete(`/product/${productId}`, {
                headers: {
                  Authorization: `Bearer ${tokenState}`

                }
              });

              setProducts((prevProducts) =>
                prevProducts.filter((product) => product._id !== productId)

              );
              setFilteredProducts((prevFilteredProducts) =>
                prevFilteredProducts.filter((product) => product._id !== productId)

              );

            } catch (error) {
              console.error("Erro ao excluir produto:", error);
            }
          }
        }
      ]
    );
  };

  const handleNewProduct = () => {
    router.replace('/addProduct');
  };

  return (
    <Config>

      <Container>

        <Title>Storage.io</Title>

        <Form>

          <Controller
            name="searchTerm"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Pesquise o nome dos produtos"
                placeholderTextColor="#6B6B6B"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <ButtonSearch onPress={handleSearch}>
            <Ionicons name="search-outline" size={32} color={"black"} />
          </ButtonSearch>

        </Form>


        <Button onPress={handleNewProduct}>Novo item</Button>


        {loading ? (
          <ListEmptyText>Carregando...</ListEmptyText>
        ) : (
          <FlatList

            data={filteredProducts}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <ListEmptyText>
                Nenhum produto foi encontrado. Tente outra pesquisa.
              </ListEmptyText>
            )}

            renderItem={({ item }) => (
              <ProductItem>

                <ProductImageShow id={item._id} />

                <ProductInfo>
                  <ProductText>{item.name}</ProductText>
                  <ProductDescription>{item.description}</ProductDescription>
                  <ProductPrice>{`R$: ${item.price} reais`}</ProductPrice>
                </ProductInfo>

                <ButtonContainer>
                  <ButtonItemActionEdit onPress={() => router.push({
                    pathname: "/updateProduct",
                    params: { id: item._id }
                  })}>
                    <Ionicons name="pencil-outline" size={25} color={"white"} />
                  </ButtonItemActionEdit>

                  <ButtonItemActionRemove onPress={() => handleDeleteProduct(item._id)}>
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



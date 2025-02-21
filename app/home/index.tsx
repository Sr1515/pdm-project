import React from "react";
import 'react-native-reanimated';
import { FlatList } from "react-native"

import Ionicons from "@expo/vector-icons/Ionicons"

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

import { useState, useEffect } from "react";
import { AuthSupplier } from "@/context/AuthProvider";


function Home() {

  const [products, setProducts] = useState()

  // const handleDeleteProduct = (id: any) => {
  //   setProducts((prevProducts) => prevProducts.filter(product => product.id != id))
  // }

  return (
    <Config>
      <AuthSupplier>

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

          <Button>Novo item</Button>

          <FlatList

            data={products}
            keyExtractor={item => item.id.toString()}
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

        </Container>
        <FooterMenu />
      </AuthSupplier>

    </Config>
  );
}

export default Home;
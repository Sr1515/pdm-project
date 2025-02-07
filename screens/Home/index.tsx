import Title from "@/components/Title";
import React from "react";
import 'react-native-reanimated';
import { FlatList } from "react-native"

import { Container, Form, Input, Button, ButtonText, ButtonSearch, ButtonAdd, ButtonContainer } from "./styles";
import { ProductItem, ProductImage, ProductText, ListEmptyText, ProductDescription, ProductPrice, ProductInfo } from "./styles";

const mockSupermarketProducts = [
  {
    id: 1,
    name: "Arroz Tio João Tipo 1",
    description: "Arroz Branco Tipo 1, 5kg. Ideal para o preparo de todos os tipos de refeições.",
    price: "R$22,90",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MTibkW_ywxGCXL51Qg2DI0ep662oKtxZ1g&s"
  },
  {
    id: 2,
    name: "Feijão Preto Camil",
    description: "Feijão Preto Camil, 1kg. Perfeito para o acompanhamento de carnes e arroz.",
    price: "R$6,90",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MTibkW_ywxGCXL51Qg2DI0ep662oKtxZ1g&s"
  },
  {
    id: 3,
    name: "Óleo de Soja Liza",
    description: "Óleo de Soja Liza, 900ml. Ótimo para frituras e preparos diversos.",
    price: "R$5,49",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MTibkW_ywxGCXL51Qg2DI0ep662oKtxZ1g&s"
  },
  {
    id: 4,
    name: "Macarrão Instantâneo Nissin",
    description: "Macarrão Instantâneo Nissin, 85g. Prático e rápido para o dia a dia.",
    price: "R$2,49",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MTibkW_ywxGCXL51Qg2DI0ep662oKtxZ1g&s"
  },
  {
    id: 5,
    name: "Leite Condensado Moça",
    description: "Leite Condensado Moça, 395g. Ideal para sobremesas e receitas doces.",
    price: "R$7,89",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MTibkW_ywxGCXL51Qg2DI0ep662oKtxZ1g&s"
  },
  {
    id: 6,
    name: "Carne Bovina Alcatra",
    description: "Carne Bovina Alcatra, 1kg. Ideal para grelhar, assar ou fazer churrasco.",
    price: "R$35,90",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MTibkW_ywxGCXL51Qg2DI0ep662oKtxZ1g&s"
  },
  {
    id: 7,
    name: "Pão de Forma Pullman",
    description: "Pão de Forma Pullman, 500g. Pão fofinho para o café da manhã ou lanche.",
    price: "R$5,99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MTibkW_ywxGCXL51Qg2DI0ep662oKtxZ1g&s"
  },
  {
    id: 8,
    name: "Maçã Fuji",
    description: "Maçã Fuji, unidade. Fruta fresca e crocante, ideal para o lanche.",
    price: "R$1,99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MTibkW_ywxGCXL51Qg2DI0ep662oKtxZ1g&s"
  },
  {
    id: 9,
    name: "Coca-Cola 2L",
    description: "Coca-Cola 2L. Bebida refrigerante refrescante e saborosa.",
    price: "R$7,49",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MTibkW_ywxGCXL51Qg2DI0ep662oKtxZ1g&s"
  },
  {
    id: 10,
    name: "Biscoito Oreo",
    description: "Biscoito Oreo, pacote 142g. Deliciosos biscoitos com recheio de creme de baunilha.",
    price: "R$4,79",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MTibkW_ywxGCXL51Qg2DI0ep662oKtxZ1g&s"
  }
];


export default function Home() {

  return (
    <>
      <Container>
        <Title>Storage.io</Title>

        <Form>
          <Input
            placeholder="Pesquise produtos por nome ou categoria"
            placeholderTextColor="#6B6B6B"
          />

          <ButtonSearch>
            <ButtonText>🔍</ButtonText>
          </ButtonSearch>
        </Form>

        <ButtonAdd>
          <ButtonText>Novo item</ButtonText>
        </ButtonAdd>

        <FlatList
          data={mockSupermarketProducts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItem>

              <ProductImage source={{ uri: item.image }} />

              <ProductInfo>
                <ProductText>{item.name}</ProductText>
                <ProductDescription>{item.description}</ProductDescription>
                <ProductPrice>{item.price}</ProductPrice>
              </ProductInfo>

              <ButtonContainer>
                <Button>
                  <ButtonText>✏️</ButtonText>
                </Button>
                <Button>
                  <ButtonText>❌</ButtonText>
                </Button>
              </ButtonContainer>


            </ProductItem>
          )}

          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmptyText>
              Nenhum produto foi adicionado ainda. Adicione um!
            </ListEmptyText>
          )}

        />

      </Container>
    </>
  );
}

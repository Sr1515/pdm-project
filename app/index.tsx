import React from "react";
import 'react-native-reanimated';

import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native"
import { theme } from "@/theme";

import { ExpoRouter } from "expo-router";

import Login from "@/app/login";
import Venda from "@/app/venda";
import SignUp from "@/app/signUp";
import Cliente from "@/app/cliente";
import AddProduct from "@/app/addProduct";
import MapCliente from "@/app/mapCliente";
import GerenciadorVendas from "@/app/gerenciadorVendas";
import FooterMenu from "@/components/FooterMenu";
import AddClient from "./addCliente";


export default function App() {

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#121212"
        translucent={false}
      />

      <ThemeProvider theme={theme}>
        <AddClient />
      </ThemeProvider>

    </>
  )
}

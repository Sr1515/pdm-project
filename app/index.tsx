import React from "react";
import 'react-native-reanimated';

import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native"
import { theme } from "@/theme";

import Login from "@/screens/Login";
import Home from "@/screens/Home";
import Venda from "@/screens/Venda";
import SignUp from "@/screens/SignUp";
import Cliente from "@/screens/Cliente";
import AddProduct from "@/screens/AddProduct";
import MapCliente from "@/screens/MapCliente";
import GerenciadorVendas from "@/screens/GerenciadorVendas";
import AddClient from "@/screens/AddClient";


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

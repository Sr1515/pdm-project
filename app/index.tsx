import React from "react";
import 'react-native-reanimated';

import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native"
import { theme } from "@/theme";

import Login from "@/app/login";
import { AuthProviderContext } from "@/context/AuthProvider";


export default function App() {

  return (
    <>
      <Login />
    </>
  )
}

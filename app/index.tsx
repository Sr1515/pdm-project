import React from "react";
import { theme } from "@/theme";
import 'react-native-reanimated';

import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native"


import Login from "@/screens/Login";
import Home from "@/screens/Home";


export default function App() {

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#121212"
        translucent={false}
      />

      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>

    </>
  )
}

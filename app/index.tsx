import Home from "@/screens/Home";
import { theme } from "@/theme";
import React from "react";
import 'react-native-reanimated';
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native"


export default function App() {

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#121212"
        translucent={false}
      />

      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>

    </>
  )
}

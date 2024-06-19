import React, { useEffect } from "react";
import { Home } from "../src/screens/home";
import theme from "../src/theme/index";
import { ActivityIndicator, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export default function HomeScreen() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
  });

  useEffect(() => {
    StatusBar.setBarStyle("light-content", true);
    StatusBar.setBackgroundColor("#0D0D0D");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ? (
        <Home />
      ) : (
        <ActivityIndicator
          size="large"
          color="#1E6F9F"
          style={{ flex: 1, backgroundColor: "#0D0D0D" }}
        />
      )}
    </ThemeProvider>
  );
}

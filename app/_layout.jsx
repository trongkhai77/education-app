import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import {
  ClerkProvider,
  ClerkLoaded,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {
  useFonts({
    outfit: require("./Assets/Fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./Assets/Fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./Assets/Fonts/Outfit-Bold.ttf"),
  });
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SignedIn>
        <Home />
      </SignedIn>

      <SignedOut>
        <Login />
      </SignedOut>
    </ClerkProvider>
  );
}

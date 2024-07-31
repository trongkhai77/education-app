import { View, Text } from "react-native";
import { Stack } from "expo-router";
import React from "react";

export default function PageLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" />
    </Stack>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Header from "./../Components/Home/Header";

export default function Home() {
  const { user } = useUser();
  return (
    <View style={{ padding: 20, marginTop: 10 }}>
      <Header />
    </View>
  );
}

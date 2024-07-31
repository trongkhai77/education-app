import { View, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function basicContent() {
  const router = useRouter();
  const { basicContent } = useLocalSearchParams();
  const item = basicContent
    ? JSON.parse(decodeURIComponent(basicContent))
    : null;
  return (
    <View style={{ flex: 1, padding: 20, marginTop: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Ionicons
          name="arrow-back"
          size={32}
          color="black"
          onPress={() => router.back()}
        />
        <Ionicons name="ellipsis-vertical-outline" size={32} color="black" />
      </View>

      <View style={{ paddingTop: 20 }}>
        <Text style={{ fontSize: 30, fontFamily: "outfit-bold" }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 16, fontFamily: "outfit", marginTop: -5 }}>
          By {item.name}
        </Text>
      </View>
    </View>
  );
}

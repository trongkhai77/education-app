import { View, Text, TextInput, StyleSheet, Keyboard } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/app/Shared/Colors";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={24}
        color={Colors.gray}
        style={{ marginRight: 10 }}
      />
      <TextInput
        placeholder="Search"
        style={{ width: "100%", fontFamily: "outfit", fontSize: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    marginTop: 20,
    alignItems: "center",
  },
});

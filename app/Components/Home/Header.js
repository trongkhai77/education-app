import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

export default function Header() {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello</Text>
        <Text>{user?.fullName}</Text>
      </View>

      <View>
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 100, height: 100, borderRadius: 99 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

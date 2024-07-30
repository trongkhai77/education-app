import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

export default function Header() {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 16, fontFamily: "outfit" }}>Hello</Text>
        <Text style={{ fontSize: 24, fontFamily: "outfit-medium" }}>
          {user?.fullName}
        </Text>
      </View>

      <View>
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 50, height: 50, borderRadius: 100 }}
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

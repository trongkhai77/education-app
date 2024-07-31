import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  LogBox,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "./../../Shared/Colors";

export default function basicContent() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const router = useRouter();
  const { basicContent } = useLocalSearchParams();
  const item = basicContent
    ? JSON.parse(decodeURIComponent(basicContent))
    : null;
  return (
    <ScrollView style={{ flex: 1, padding: 20, marginTop: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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
          By {item.by}
        </Text>
      </View>

      <View
        style={{
          borderRadius: 6,
          overflow: "hidden",
          backgroundColor: "#fff",
          elevation: 2,
          marginTop: 25,
        }}
      >
        <Image
          source={item.imageUrl}
          style={{ width: "100%", height: 200 }}
          resizeMode="contain"
        />
      </View>

      <View style={{ marginTop: 25 }}>
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          About Course
        </Text>
        <Text style={{ fontFamily: "outfit" }}>{item.about}</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          Course Content
        </Text>
        <FlatList
          style={{ marginTop: 20 }}
          data={item.content}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => console.log(item.name)}
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
                backgroundColor: "#fff",
                padding: 15,
                borderRadius: 5,
                elevation: 1,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "outfit-bold",
                    color: Colors.gray,
                    fontSize: 25,
                  }}
                >
                  {item.chapter}
                </Text>
                <Text
                  style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <View>
                <Ionicons name="play-circle" size={30} color="#1D92FF" />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{ marginTop: 40 }}></View>
    </ScrollView>
  );
}

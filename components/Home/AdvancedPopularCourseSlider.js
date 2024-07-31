import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";

const sliderContent = [
  {
    id: 1,
    name: "Advanced Python",
    imageUrl: require("@/app/Assets/Images/advancedPython.jpg"),
    lession: 15,
  },
  {
    id: 2,
    name: "Advanced React JS",
    imageUrl: require("@/app/Assets/Images/advancedReactJS.jpg"),
    lession: 20,
  },
  {
    id: 3,
    name: "Advanced JavaScript",
    imageUrl: require("@/app/Assets/Images/advancedJS.jpg"),
    lession: 25,
  },
];

export default function AdvancedPopularCourseSlider() {
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={sliderContent}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              borderRadius: 6,
              overflow: "hidden",
              marginRight: 10,
              backgroundColor: "#fff",
              elevation: 1.5,
              marginBottom: 10,
              marginRight: 12,
            }}
          >
            <Image
              source={item.imageUrl}
              style={{ width: 210, height: 140 }}
              resizeMode="contain"
            />
            <View
              style={{
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "outfit-bold" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "outfit" }}>
                {item.lession} Lessions
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";

const sliderContent = [
  {
    id: 1,
    name: "Python Course",
    imageUrl: require("@/app/Assets/Images/python.jpg"),
  },
  {
    id: 2,
    name: "C++ Course",
    imageUrl: require("@/app/Assets/Images/cpp.jpg"),
  },
  {
    id: 3,
    name: "Java Course",
    imageUrl: require("@/app/Assets/Images/java.jpg"),
  },
];

export default function VideoCourseSlider() {
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={sliderContent}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 210,
              height: 130,
              borderRadius: 5,
              overflow: "hidden",
              marginRight: 12,
            }}
          >
            <Image
              source={item.imageUrl}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

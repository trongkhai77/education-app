import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";

const sliderContent = [
  {
    id: 1,
    name: "Basic Python",
    imageUrl: require("@/app/Assets/Images/basicPython.png"),
    lession: 15,
  },
  {
    id: 2,
    name: "Basic React JS",
    imageUrl: require("@/app/Assets/Images/basicReactJS.jpg"),
    lession: 20,
  },
  {
    id: 3,
    name: "Basic HTML and CSS",
    imageUrl: require("@/app/Assets/Images/basicHTMLandCss.png"),
    lession: 25,
  },
];

export default function BasicPopularCourseSlider() {
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
            <Image source={item.imageUrl} style={{ width: 210, height: 140 }} />
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

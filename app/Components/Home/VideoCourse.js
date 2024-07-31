import { View, Text, Image } from "react-native";
import React from "react";
import VideoCourseSlider from "../../../components/Home/VideoCourseSlider";

export default function VideoCourse() {
  return (
    <View>
      <Image
        source={require("./../../Assets/Images/title.png")}
        style={{ width: "100%", height: 160, marginTop: 30, borderRadius: 10 }}
      />

      <View>
        <Text
          style={{ fontFamily: "outfit-bold", fontSize: 24, marginTop: 30 }}
        >
          Video Course
        </Text>
        <VideoCourseSlider />
      </View>
    </View>
  );
}

import { View, Text, Image } from "react-native";
import React from "react";

export default function VideoCourseSlider() {
  return (
    <View>
      <Image
        source={require("./../../Assets/Images/title.png")}
        style={{ width: "100%", height: 160, marginTop: 30, borderRadius: 10 }}
      />

      <View>
        <Text>Video Course</Text>
      </View>
    </View>
  );
}

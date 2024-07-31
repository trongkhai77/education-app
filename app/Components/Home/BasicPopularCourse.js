import { View, Text } from "react-native";
import React from "react";
import BasicPopularCourseSlider from "@/components/Home/BasicPopularCourseSlider";

export default function BasicPopularCourse() {
  return (
    <View>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 24, marginTop: 25 }}>
        Basic Popular Course
      </Text>

      <BasicPopularCourseSlider />
    </View>
  );
}

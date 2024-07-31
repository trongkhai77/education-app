import { View, Text } from "react-native";
import React from "react";
import AdvancedPopularCourseSlider from "@/components/Home/AdvancedPopularCourseSlider";

export default function AdvancedCourse() {
  return (
    <View>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 24, marginTop: 15 }}>
        Advanced Course
      </Text>

      <AdvancedPopularCourseSlider />
    </View>
  );
}

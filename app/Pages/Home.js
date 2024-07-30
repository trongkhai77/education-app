import { View, Text } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Header from "./../Components/Home/Header";
import SearchBar from "./../Components/Home/SearchBar";
import VideoCourseSlider from "../Components/Home/VideoCourseSlider";

export default function Home() {
  const { user } = useUser();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 10,
        backgroundColor: "#F6F8FC",
      }}
    >
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar />

      {/* Slider */}
      <VideoCourseSlider />
    </View>
  );
}

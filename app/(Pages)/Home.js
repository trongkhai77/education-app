import { ScrollView, View } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Header from "../Components/Home/Header";
import SearchBar from "../Components/Home/SearchBar";
import VideoCourse from "../Components/Home/VideoCourse";
import BasicPopularCourse from "../Components/Home/BasicPopularCourse";
import AdvancedCourse from "../Components/Home/AdvancedCourse";

export default function Home() {
  const { user } = useUser();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
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

      {/* VideoCourse */}
      <VideoCourse />

      {/* Basic Popular Course */}
      <BasicPopularCourse />

      {/* Advance Course */}
      <AdvancedCourse />

      <View style={{ paddingTop: 40 }}></View>
    </ScrollView>
  );
}

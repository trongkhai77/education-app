import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const sliderContent = [
  {
    id: 1,
    name: "Basic Python",
    imageUrl: require("@/app/Assets/Images/basicPython.png"),
    lession: 15,
    by: "Kyle Truong",
    about:
      "Python is a general-purpose, high-level programming language. Its design philosophy emphasizes code readability with its notable use of significant whitespace.",
    content: [
      { id: 1, chapter: "01", name: "Introduction" },
      { id: 2, chapter: "02", name: "Variables" },
      { id: 3, chapter: "03", name: "Data Types" },
      { id: 4, chapter: "04", name: "Numbers" },
      { id: 5, chapter: "05", name: "Casting" },
    ],
  },
  {
    id: 2,
    name: "Basic React JS",
    imageUrl: require("@/app/Assets/Images/basicReactJS.jpg"),
    lession: 20,
    by: "Kyle Truong",
    about:
      "Welcome to our React JS course, your gateway to mastering one of the most popular libraries in web development!",
    content: [
      { id: 1, chapter: "01", name: "Introduction" },
      { id: 2, chapter: "02", name: "Variables" },
      { id: 3, chapter: "03", name: "Data Types" },
      { id: 4, chapter: "04", name: "Numbers" },
      { id: 5, chapter: "05", name: "Casting" },
    ],
  },
  {
    id: 3,
    name: "Basic HTML and CSS",
    imageUrl: require("@/app/Assets/Images/basicHTMLandCss.png"),
    lession: 25,
    by: "Kyle Truong",
    about:
      "Welcome everyone to the HTML and CSS course! We will learn the fundamental building blocks for creating websites - HTML for content and structure, and CSS for styling and design.",
    content: [
      { id: 1, chapter: "01", name: "Introduction" },
      { id: 2, chapter: "02", name: "Variables" },
      { id: 3, chapter: "03", name: "Data Types" },
      { id: 4, chapter: "04", name: "Numbers" },
      { id: 5, chapter: "05", name: "Casting" },
    ],
  },
];

export default function BasicPopularCourseSlider() {
  const router = useRouter();
  const onPress = (item) => {
    console.log(item.name);
    const itemJson = encodeURIComponent(JSON.stringify(item));
    router.push("/BasicPopularCourseDetail/" + itemJson);
  };

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
            onPress={() => onPress(item)}
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

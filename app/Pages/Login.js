import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../Shared/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View style={{ backgroundColor: "#013486" }}>
        <Image
          source={require("./../Assets/Images/login.png")}
          style={{
            width: "100%",
            marginTop: StatusBar.currentHeight,
          }}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "outfit",
            marginTop: 80,
            fontSize: 20,
          }}
        >
          Login/Signup
        </Text>

        <TouchableOpacity onPress={() => onPress()}>
          <LinearGradient
            colors={["#0C7DE4", "#12B3C9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Ionicons
              name="logo-google"
              size={24}
              color="white"
              style={{ marginRight: 10 }}
            />
            <Text
              style={{
                color: Colors.white,
                fontSize: 18,
                fontFamily: "outfit-medium",
              }}
            >
              Sign In with Google
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -20,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  welcomeText: {
    fontSize: 30,
    textAlign: "center",
    paddingTop: 40,
    fontFamily: "outfit-bold",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    margin: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

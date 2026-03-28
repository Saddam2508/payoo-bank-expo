import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // 2 seconds পরে login এ যাবে
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ marginTop: 20 }}
      />
      <Text style={styles.text}>Welcome to MyApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e1e",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: { width: 50, height: 50 },
  text: { color: "#fff", fontSize: 20, marginTop: 10 },
});

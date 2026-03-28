import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [mobile, setMobile] = useState("01234567891");
  const [pin, setPin] = useState("");
  const handleChange = (field: "mobile" | "pin", value: string) => {
    if (field === "mobile") setMobile(value);
    else if (field === "pin") setPin(value);
  };
  const handleSubmit = () => {
    if (mobile === "01234567891" && pin === "1234") {
      Alert.alert("login success");
      setPin("");
    } else if (mobile !== "01234567891") {
      Alert.alert("please enter valid mobile number");
    } else if (pin !== "1234") {
      Alert.alert("Invalid pin");
    } else {
      Alert.alert("Wrong credential");
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.bodyColor}>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/images/Logo-full.png")} />
          </View>

          <View style={styles.card}>
            <Text style={styles.mobileText}>Mobile Number</Text>
            <TextInput
              placeholder="Enter your number"
              keyboardType="numeric" // শুধু number input
              maxLength={11}
              style={styles.input}
              onChangeText={(text) => handleChange("mobile", text)}
              value={mobile}
            />
            <Text style={styles.mobileText}>4 Digit Pin</Text>
            <TextInput
              placeholder="Enter 4 Digit Pin"
              keyboardType="numeric" // শুধু number input
              secureTextEntry // dot hide করবে
              maxLength={4}
              style={styles.input}
              onChangeText={(text) => handleChange("pin", text)}
              value={pin}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Click</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  bodyColor: {
    backgroundColor: "#1e1e1e26",
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 20,
  },
  card: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    padding: 20,
    marginHorizontal: 20,
    elevation: 5,
  },

  mobileText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  input: {
    padding: 15,
    borderRadius: 20,
    marginVertical: 15,
    backgroundColor: "#1e1e1e26",
  },
  button: {
    padding: 15,
    borderRadius: 20,
    marginVertical: 15,
    backgroundColor: "#255fe5",
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

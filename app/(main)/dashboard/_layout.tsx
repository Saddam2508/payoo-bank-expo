import { Stack, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function DashboardLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerLeft: () => (
            <View style={styles.logoContainer}>
              <Image
                style={styles.dashboardLogo}
                source={require("../../../assets/images/logo.png")}
              />
              <View>
                <Text style={styles.amountText}>$50000</Text>
                <Text>Available Balance</Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <Pressable
              style={styles.logoutButton}
              onPress={() => router.replace("/(auth)/login")}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="analytics" options={{ title: "Analytics" }} />
      <Stack.Screen name="reports" options={{ title: "Reports" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    marginLeft: 5,
    gap: 10,
  },
  dashboardLogo: {
    width: 40,
    height: 40,
  },
  amountText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#ef4444",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  logoutText: { color: "white", fontWeight: "bold" },
});

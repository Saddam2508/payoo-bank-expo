import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import menuJson from "../../../public/menu.json";

type MenuItem = {
  id: number;
  title: string;
  route: string;
  icon: string;
};

export default function Dashboard() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 15 }}>
      {/* welcome message */}
      <View>
        <Text style={styles.welcome}>Welcome to Payoo</Text>
        <Text style={styles.enjoy}>
          Enjoy easy and convenient financial services with us. Cashout charge
          is low and
        </Text>
      </View>

      {/* Grid */}
      <View style={styles.grid}>
        {(menuJson as MenuItem[]).map((item) => (
          <Pressable
            key={item.id}
            onPress={() => router.push(item.route as any)}
            style={styles.dashboardIcon}
          >
            <Image source={{ uri: item.icon }} style={styles.icon} />

            <Text>{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  enjoy: { fontSize: 16, marginBottom: 20, color: "#334155" },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 5,
  },

  dashboardIcon: {
    width: "30%",
    backgroundColor: "#faf6f6",
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  icon: {
    width: 35,
    height: 35,
    marginBottom: 8,
  },
});

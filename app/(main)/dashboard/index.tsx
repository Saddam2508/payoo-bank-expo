import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

type MenuItem = {
  title: string;
  route: "/dashboard/analytics" | "/dashboard/reports";
};

export default function Dashboard() {
  const router = useRouter();

  const menus: MenuItem[] = [
    { title: "Analytics", route: "/dashboard/analytics" },
    { title: "Reports", route: "/dashboard/reports" },
  ];

  return (
    <View style={{ flex: 1, padding: 15 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        {/* Logo */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }}
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>My Admin</Text>
        </View>

        {/* Logout */}
        <TouchableOpacity
          onPress={() => router.replace("/(auth)/login")}
          style={{
            backgroundColor: "#ef4444",
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "white" }}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {menus.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(item.route)}
            activeOpacity={0.7}
            style={{
              width: "48%",
              backgroundColor: "#1e293b",
              padding: 20,
              borderRadius: 10,
              marginBottom: 15,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, marginBottom: 10 }}>📊</Text>

            <Text style={{ color: "white" }}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

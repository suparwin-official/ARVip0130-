import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#0b0b0b", justifyContent: "center", alignItems: "center" }}>
      
      <Text style={{ color: "gold", fontSize: 28, marginBottom: 40 }}>
        🎰 RAMR VIP Casino
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Slots")}>
        <Text style={{ backgroundColor: "red", color: "#fff", padding: 12, margin: 8 }}>
          Slot Machine
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Roulette")}>
        <Text style={{ backgroundColor: "green", color: "#fff", padding: 12, margin: 8 }}>
          Roulette
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
        <Text style={{ backgroundColor: "blue", color: "#fff", padding: 12, margin: 8 }}>
          Wallet Demo
        </Text>
      </TouchableOpacity>

    </View>
  );
}

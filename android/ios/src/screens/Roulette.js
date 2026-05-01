import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Roulette() {
  const [num, setNum] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 70, color: "gold" }}>{num}</Text>

      <TouchableOpacity onPress={() => setNum(Math.floor(Math.random() * 36))}>
        <Text style={{ backgroundColor: "green", color: "#fff", padding: 10, marginTop: 20 }}>
          SPIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}

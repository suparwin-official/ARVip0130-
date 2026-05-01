import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const symbols = ["🍒", "🍋", "🔔", "💎", "7️⃣"];

export default function SlotMachine() {
  const [slots, setSlots] = useState(["❓", "❓", "❓"]);

  const spin = () => {
    setSlots([
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)]
    ]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#111", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 50 }}>{slots.join(" | ")}</Text>

      <TouchableOpacity onPress={spin}>
        <Text style={{ marginTop: 20, backgroundColor: "red", color: "#fff", padding: 10 }}>
          SPIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}

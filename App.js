import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//Import Screen
import State from "./src/screens/State";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <State />
    </View>
  );
}

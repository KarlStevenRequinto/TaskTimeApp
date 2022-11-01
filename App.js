import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/Focus";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {focusSubject ? (
        <Text>merong timer</Text>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <Text style={{ color: "red" }}>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

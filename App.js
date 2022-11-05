import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Focus from "./src/features/Focus";
import Timer from "./src/features/Timer";
import { GlobalStyles } from "./src/globalstyles/globalStyles";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    backgroundColor: GlobalStyles.Colors.shade1,
  },
});

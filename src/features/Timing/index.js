import React from "react";
import { StyleSheet, View } from "react-native";
import RoundedButton from "../../components/RoundedButton";

const Timing = ({ changeTime }) => {
  return (
    <View style={styles.container}>
      <RoundedButton size={75} title="10" onPress={() => changeTime(10)} />
      <RoundedButton size={75} title="15" onPress={() => changeTime(15)} />
      <RoundedButton size={75} title="20" onPress={() => changeTime(20)} />
    </View>
  );
};
export default Timing;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

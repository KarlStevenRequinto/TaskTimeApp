import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";

const Focus = ({ addSubject }) => {
  const [tempItem, setTempItem] = useState("null");
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <TextInput
          onSubmitEditing={({ nativeEvent }) => {
            setTempItem(nativeEvent.text);
          }}
        />
        <RoundedButton
          title="+"
          size={50}
          onPress={() => {
            addSubject(tempItem);
          }}
        />
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

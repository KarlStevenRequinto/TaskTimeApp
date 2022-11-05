import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";
import { GlobalStyles } from "../../globalstyles/globalStyles";

const Focus = ({ addSubject }) => {
  const [tempItem, setTempItem] = useState("null");
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            onSubmitEditing={({ nativeEvent }) => {
              setTempItem(nativeEvent.text);
            }}
            keyboardType="visible-password"
            style={styles.textInput}
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
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: GlobalStyles.Colors.shade4,
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginVertical: 16,
    fontSize: 20,
    fontStyle: "none",
    flex: 1,
    marginRight: 20,
  },
});

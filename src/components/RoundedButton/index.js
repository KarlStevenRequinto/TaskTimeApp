import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { GlobalStyles } from "../../globalstyles/globalStyles";

const RoundedButton = ({
  style,
  onPress,
  title,
  textStyle,
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius]} onPress={onPress}>
      <Text style={[styles(size).text]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      alignItems: "center",
      width: size,
      height: size,
      borderColor: GlobalStyles.Colors.shade4,
      borderWidth: 3,
      justifyContent: "center",
    },
    text: {
      fontSize: size / 4,
      color: GlobalStyles.Colors.shade4,
    },
  });

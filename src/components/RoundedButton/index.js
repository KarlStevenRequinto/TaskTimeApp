import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

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
      borderColor: "red",
      borderWidth: 2,
      justifyContent: "center",
    },
    text: {
      fontSize: size / 3,
      color: "red",
    },
  });

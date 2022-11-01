import { StyleSheet, View, Text } from "react-native";
const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Focusing on:</Text>
        <Text>Timer here: {focusSubject}</Text>
      </View>
    </View>
  );
};
export default Timer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

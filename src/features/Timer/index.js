import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import CountDown from "../../components/CountDown";
import RoundedButton from "../../components/RoundedButton";

const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <CountDown isPaused={!isStarted} />
      <View>
        <Text>asdasdasdasd on:</Text>
        <Text>Timer here: {focusSubject}</Text>
      </View>
      {isStarted ? (
        <RoundedButton
          title="pause"
          onPress={() => {
            setIsStarted(false);
            console.log(isStarted);
          }}
          size={60}
        />
      ) : (
        <RoundedButton
          title="start"
          onPress={() => {
            setIsStarted(true);
            console.log(isStarted);
          }}
          size={60}
        />
      )}
    </View>
  );
};
export default Timer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

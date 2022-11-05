import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../globalstyles/globalStyles";

const minToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const CountDown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / minToMillis(minutes));
      return timeLeft;
    });
  };
  useEffect(() => {
    setMillis(minToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const [millis, setMillis] = useState(minToMillis(minutes));
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <View style={styles.timerContainer}>
      {/* <Text>Your current task is</Text> */}
      <Text style={styles.timerText}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  timerContainer: {
    flex: 0.25,
    padding: 20,
    backgroundColor: GlobalStyles.Colors.shade2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
    marginTop: 20,
    borderRadius: 4,
  },
  timerText: {
    fontSize: 48,
    color: GlobalStyles.Colors.shade4,
  },
});

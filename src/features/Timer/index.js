import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Vibration, Platform } from "react-native";
import { ProgressBar } from "react-native-paper";
import CountDown from "../../components/CountDown";
import RoundedButton from "../../components/RoundedButton";
import { GlobalStyles } from "../../globalstyles/globalStyles";
import Timing from "../Timing";
import { useKeepAwake } from "expo-keep-awake";

const DEFAULT_TIME = 0.1;
const Timer = ({ focusSubject }) => {
  useKeepAwake();
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };
  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };
  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
  };

  useEffect(() => {
    setProgress(progress);
  }, [progress]);

  return (
    <View style={styles.container}>
      <CountDown
        isPaused={!isStarted}
        onProgress={onProgress}
        minutes={minutes}
        onEnd={onEnd}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Your task rightnow is:</Text>
        <Text style={styles.headerText}>{focusSubject}</Text>
      </View>
      <ProgressBar
        style={styles.progressBar}
        progress={progress}
        color={GlobalStyles.Colors.shade3}
      />
      <View>
        <Timing changeTime={changeTime} />
      </View>
      <View style={styles.buttonContainer}>
        {isStarted ? (
          <RoundedButton
            title="pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        ) : (
          <RoundedButton
            title="start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
      </View>
    </View>
  );
};
export default Timer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  headerText: { fontSize: 24, color: GlobalStyles.Colors.shade4 },
  buttonContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {
    margin: 20,
    height: 20,
    backgroundColor: GlobalStyles.Colors.shade2,
  },
});

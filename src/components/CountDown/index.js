import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const minToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const CountDown = ({ minutes = 20, isPaused }) => {
  const interval = React.useRef(null);
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        // do more stuff
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const [millis, setMillis] = useState(minToMillis(minutes));
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <View>
      <Text>THE COUNTDOWN TIMER GOES HERE</Text>
      <Text>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

export default CountDown;

import React, { ReactNode, memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { useMemoOne } from "use-memo-one";
import { snapPoint } from "react-native-redash";
import {
  frictionFactor,
  verticalPanGestureHandler
} from "../components/AnimationHelpers";
import { THRESHOLD } from "./Search";

const {
  Value,
  Clock,
  eq,
  startClock,
  set,
  add,
  and,
  greaterOrEq,
  lessOrEq,
  cond,
  decay,
  block,
  not,
  spring,
  abs,
  multiply,
  divide,
  sub,
  useCode,
  call,
  neq
} = Animated;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

interface ScrollViewProps {
  children: ReactNode;
}

export default memo(({ children }: ScrollViewProps) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  return (
    <View
      style={styles.container}
      onLayout={({
        nativeEvent: {
          layout: { height }
        }
      }) => setContainerHeight(height)}
    >
      <View
        onLayout={({
          nativeEvent: {
            layout: { height }
          }
        }) => setContentHeight(height)}
      >
        {children}
      </View>
    </View>
  );
});

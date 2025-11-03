import type { LayoutRectangle } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import GameOption from "./GameOption";

interface Props {
  text: string;
  dropZoneLayout: LayoutRectangle | null;
  onDrop: (item: string, dropX: number, dropY: number) => void;
  onWrongDrop: (item: string, dropX: number, dropY: number) => void;
  isDropped?: boolean;
}

export default function DraggableGameOption({
  text,
  dropZoneLayout,
  onDrop,
  onWrongDrop,
  isDropped = false,
}: Props) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({ x: 0, y: 0 });
  const dropped = useSharedValue(isDropped);

  const handleDrop = (x: number, y: number) => {
    runOnJS(onDrop)(text, x, y);
  };
  const handleWrongDrop = (x: number, y: number) => {
    runOnJS(onWrongDrop)(text, x, y);
  };

  const panGesture = Gesture.Pan()
    .onStart(() => {
      context.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate((event) => {
      translateX.value = context.value.x + event.translationX;
      translateY.value = context.value.y + event.translationY;
    })
    .onEnd((event) => {
      if (!dropZoneLayout) return;

      const absX = event.absoluteX;
      const absY = event.absoluteY;

      const inside =
        absX > dropZoneLayout.x &&
        absX < dropZoneLayout.x + dropZoneLayout.width &&
        absY > dropZoneLayout.y &&
        absY < dropZoneLayout.y + dropZoneLayout.height;

      if (inside) {
        dropped.value = true;
        runOnJS(handleDrop)(absX, absY);
        console.log(absX, absY)
      } else {
        dropped.value = false;
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        runOnJS(handleWrongDrop)(absX, absY);
      }
    })
    .runOnJS(true);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
    zIndex: dropped.value ? 500 : 1000,
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        style={[
          animatedStyle,
          {
            position: "relative",
          },
        ]}
      >
        <GameOption text={text} />
      </Animated.View>
    </GestureDetector>
  );
}

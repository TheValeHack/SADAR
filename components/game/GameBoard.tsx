import { Image } from "expo-image";
import { useRef } from "react";
import type { LayoutRectangle } from "react-native";
import { View, ViewProps } from "react-native";

interface DroppedItem {
  text: string;
  x: number;
  y: number;
}

interface Props {
  imageSource: any;
  droppedItems: DroppedItem[];
  onDropZoneLayout: (layout: LayoutRectangle | null) => void;
}

export default function GameBoard({
  imageSource,
  droppedItems,
  onDropZoneLayout,
}: Props) {
  const dropZoneRef = useRef<View>(null);

  const onLayout: ViewProps["onLayout"] = () => {
    dropZoneRef.current?.measure((x, y, width, height, pageX, pageY) => {
      console.log({
        x: pageX,
        y: pageY,
        width,
        height,
      })
      onDropZoneLayout({
        x: pageX,
        y: pageY,
        width,
        height,
      });
    });
  };

  return (
    <View className="relative w-[75%] h-[400px] mx-auto mb-12">
      <Image
        source={imageSource}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        contentFit="cover"
      />

      <View
        ref={dropZoneRef}
        className="mt-3 mx-auto w-[90%] h-[79%] relative"
        onLayout={onLayout}
      >
        {/* {droppedItems.map((item, index) => (
          <View
            key={index}
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
            }}
          >
            <GameOption text={item.text} />
          </View>
        ))} */}
      </View>
    </View>
  );
}

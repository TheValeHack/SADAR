import type { LayoutRectangle } from "react-native";
import { View } from "react-native";
import DraggableGameOption from "./DraggableGameOption";

interface Option {
  text: string;
  dropped: boolean;
}

interface Props {
  options: Option[];
  dropZoneLayout: LayoutRectangle | null;
  onWrongDrop: (item: string, dropX: number, dropY: number) => void;
  onDrop: (item: string, dropX: number, dropY: number) => void;
}

export default function GameOptionsList({
  onWrongDrop,
  options,
  dropZoneLayout,
  onDrop,
}: Props) {
  return (
    <View className="flex flex-row flex-wrap gap-4 justify-center mb-10 relative">
      {options.map((option, index) => (
        <DraggableGameOption
          key={index}
          text={option.text}
          dropZoneLayout={dropZoneLayout}
          onDrop={onDrop}
          onWrongDrop={onWrongDrop}
          isDropped={option.dropped}
        />
      ))}
    </View>
  );
}

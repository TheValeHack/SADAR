import { AppText } from "@/components/global/AppText";
import { View } from "react-native";

interface Props {
  text: string;
  onDragEnd?: (text: string, x: number, y: number) => void;
  isDropped?: boolean;
}

export default function GameOption({ text, onDragEnd, isDropped = false }: Props) {
  return (
        <View className="bg-secondary-sc30 px-3 py-1 border border-secondary-sc50 rounded-lg">
          <AppText className="text-base text-center text-neutral-nr90">
            {text}
          </AppText>
        </View>
  );
}
import { View } from "react-native";
import GameOption from "./GameOption";

interface Props {
  options: string[];
}

export default function GameOptionsList({ options }: Props) {
  return (
    <View className="flex flex-row flex-wrap gap-4 justify-center mb-14">
      {options.map((option, index) => (
        <GameOption key={index} text={option} />
      ))}
    </View>
  );
}

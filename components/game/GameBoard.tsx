import { Image } from "expo-image";
import { View } from "react-native";

interface Props {
  imageSource: any;
}

export default function GameBoard({ imageSource }: Props) {
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
      <View className="mt-3 mx-auto w-[90%] h-[79%]">
        {/* Drop zone akan dibuat di sini nanti */}
      </View>
    </View>
  );
}

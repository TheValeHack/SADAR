import { Image } from "expo-image";
import { View } from "react-native";

interface ProfileAvatarProps {
  imageSource: any;
}

export default function ProfileAvatar({ imageSource }: ProfileAvatarProps) {
  return (
    <View
      className="w-24 h-24 bg-tertiary-tr20 border-4 border-tertiary-tr60 flex justify-center items-center rounded-full absolute"
      style={{ top: -48, zIndex: 10 }}
    >
      <Image
        source={imageSource}
        style={{
          width: "70%",
          height: "70%",
        }}
        contentFit="contain"
      />
    </View>
  );
}

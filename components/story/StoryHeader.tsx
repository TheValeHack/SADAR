import { AppText } from "@/components/global/AppText";
import { Image } from "expo-image";
import { View } from "react-native";

export function StoryHeader({ title, image }: { title: string; image: any }) {
  return (
    <View>
      <AppText className="text-2xl font-outfitSemiBold text-center">{title}</AppText>
      <Image
        source={image}
        style={{
          width: "100%",
          height: 300,
          marginTop: 16,
          borderRadius: 12,
        }}
        contentFit="cover"
      />
    </View>
  );
}

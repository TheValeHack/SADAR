import { AppText } from "@/components/global/AppText";
import { Image } from "expo-image";
import { View } from "react-native";

interface StoryHeaderProps {
    hideImage?: boolean;
    desc?: string;
    title: string; 
    image: any
}

export function StoryHeader({ hideImage, desc, title, image }: StoryHeaderProps) {
  return (
    <View>
      <AppText className="text-2xl font-outfitSemiBold text-center">{title}</AppText>
      { desc ? <AppText className="mt-3 text-lg text-center">{desc}</AppText> : <></>}
      <Image
        source={image}
        style={{
          width: "100%",
          height: 300,
          marginTop: 16,
          borderRadius: 12,
          display: hideImage ? "none" : "flex"
        }}
        contentFit="cover"
      />
    </View>
  );
}

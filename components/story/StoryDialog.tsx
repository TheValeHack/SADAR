import { AppText } from "@/components/global/AppText";
import { Image } from "expo-image";
import { View } from "react-native";

interface StoryDialogProps {
  speaker: "left" | "right";
  image: any;
  text: string;
}

export function StoryDialog({ speaker, image, text }: StoryDialogProps) {
  const isLeft = speaker === "left";
  return (
    <View
      className={`flex mb-6 flex-row ${
        isLeft ? "" : "flex-row-reverse"
      } gap-4`}
    >
      <View className="rounded-full overflow-hidden w-14 h-14">
        <Image
          source={image}
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"
        />
      </View>

      <View className="flex justify-center bg-tertiary-tr10 px-5 rounded-xl py-3 flex-shrink">
        <AppText className="break-words">{text}</AppText>
      </View>
    </View>
  );
}

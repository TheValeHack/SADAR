import { AppText } from "@/components/global/AppText";
import { View } from "react-native";

export function StoryParagraph({ children }: { children: React.ReactNode }) {
  return (
    <View className="mt-8">
      <AppText className="text-base text-justify">{children}</AppText>
    </View>
  );
}

import { AppText } from "@/components/global/AppText";
import { View } from "react-native";

interface Props {
  title: string;
  subtitle: string;
}

export default function GameInstruction({ title, subtitle }: Props) {
  return (
    <View>
      <AppText className="text-2xl font-outfitSemiBold text-center mb-4">
        {title}
      </AppText>
      <AppText className="text-lg text-center mb-6">{subtitle}</AppText>
    </View>
  );
}

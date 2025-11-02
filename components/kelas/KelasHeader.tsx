import { AppText } from "@/components/global/AppText";
import { View } from "react-native";

interface KelasHeaderProps {
  tema: string;
  judul: string;
  subTemaCount: number;
}

export function KelasHeader({ tema, judul, subTemaCount }: KelasHeaderProps) {
  return (
    <View className="px-8">
      <AppText className="text-xl text-center text-neutral-nr50">{tema}</AppText>
      <AppText className="text-2xl font-outfitSemiBold text-center text-neutral-nr90">
        {judul}
      </AppText>

      <View className="mx-auto bg-secondary-sc30 px-5 py-1 border border-secondary-sc50 rounded-xl mt-3">
        <AppText className="text-xl text-center text-neutral-nr90">
          {subTemaCount} Sub Tema
        </AppText>
      </View>
    </View>
  );
}

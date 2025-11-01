import { AppText } from "@/components/global/AppText";
import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";

interface ClassCardProps {
  className?: string;
  thumbnail: any;
  title: string;
  theme: string;
  onPress?: () => void;
}

export default function ClassCard({ className, thumbnail, title, theme, onPress }: ClassCardProps) {
  return (
    <View className={`mr-5 h-72 border border-neutral-nr40 bg-white rounded-xl flex flex-col overflow-hidden ${className}`}>
      <View className="w-full h-[45%] relative">
        <Image source={thumbnail} style={{ width: "100%", height: "100%" }} contentFit="cover" />
      </View>

      <View className="flex-1 justify-between">
        <View className="w-full p-3">
          <AppText className="text-sm font-outfitSemiBold text-neutral-nr50">{theme}</AppText>
          <AppText className="text-base">{title}</AppText>
        </View>

        <TouchableOpacity onPress={onPress} className="bg-primary-pr30 p-2">
          <AppText className="text-base text-center">Lihat Selengkapnya</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

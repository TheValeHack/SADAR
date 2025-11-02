import { AppText } from "@/components/global/AppText";
import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";

interface SubTemaCardProps {
  title: string;
  subTema: string;
  date: string;
  duration: string;
  onPress?: () => void;
}

export function SubTemaCard({ title, subTema, date, duration, onPress }: SubTemaCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-full border border-neutral-nr30 flex flex-row bg-neutral-nr00 rounded-xl px-3 pr-5 py-3 mb-6"
      activeOpacity={0.8}
    >
      <View className="flex justify-center items-center">
        <View className="bg-primary-pr30 w-16 h-16 flex items-center justify-center rounded-full ml-3">
          <Image
            source={require("@/assets/icons/play.svg")}
            style={{ width: 20, height: 20 }}
            contentFit="contain"
          />
        </View>
      </View>

      <View className="flex flex-col flex-1 ml-4">
        <View className="flex flex-row justify-between items-center">
          <AppText className="text-neutral-nr50">{subTema}</AppText>
          <AppText className="text-sm text-neutral-nr50 mt-1">{date}</AppText>
        </View>

        <AppText className="text-lg text-neutral-nr90 mt-1">{title}</AppText>

        <View className="flex flex-row mt-3 items-center">
          <Image
            source={require("@/assets/icons/clock.svg")}
            style={{ width: 18, height: 18 }}
            contentFit="contain"
          />
          <AppText className="text-neutral-nr50 ml-1">{duration}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

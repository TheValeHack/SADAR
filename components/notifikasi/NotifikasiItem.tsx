import { AppText } from "@/components/global/AppText";
import { Image } from "expo-image";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

interface NotifikasiItemProps {
  id: number;
  title: string;
  theme: string;
  subtitle: string;
  time: string;
  image: any;
  isRead: boolean;
}

export default function NotifikasiItem({
  id,
  title,
  theme,
  subtitle,
  time,
  image,
  isRead: initialRead,
}: NotifikasiItemProps) {
  const [isRead, setIsRead] = useState(initialRead);

  const handlePress = () => {
    setIsRead(true);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className="w-full border border-primary-pr70 flex flex-row bg-primary-pr10 rounded-xl px-3 py-3 mb-6"
    >
      <View className="flex justify-center items-center">
        <Image
          source={image}
          style={{ width: 70, height: 70 }}
          contentFit="contain"
        />
      </View>

      <View className="flex flex-col flex-1 ml-4">
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-row items-center flex-wrap">
            <AppText className="text-sm">{title} </AppText>
            <AppText className="text-sm font-outfitBold">{theme}</AppText>
          </View>

          {!isRead && <View className="h-3 w-3 bg-secondary-sc40 rounded-full" />}
        </View>

        <AppText className="text-sm text-neutral-nr50 mt-1">{time}</AppText>
        <AppText className="mt-1">{subtitle}</AppText>
      </View>
    </TouchableOpacity>
  );
}

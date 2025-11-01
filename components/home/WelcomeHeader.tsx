import { AppText } from "@/components/global/AppText";
import { View } from "react-native";

export default function WelcomeHeader({ name }: { name: string }) {
  return (
    <View className="h-[310px] pe-8">
      <AppText className="text-xl text-center">Selamat Datang,</AppText>
      <AppText className="text-2xl font-outfitExtraBold text-center">{name}</AppText>
      <AppText className="text-lg text-center">Mari lanjutkan membaca cerita!</AppText>
    </View>
  );
}

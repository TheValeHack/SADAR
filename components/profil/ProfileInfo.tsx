import { AppText } from "@/components/global/AppText";
import { View } from "react-native";

interface ProfileInfoProps {
  name: string;
  grade: string;
}

export default function ProfileInfo({ name, grade }: ProfileInfoProps) {
  return (
    <View className="p-2">
      <AppText className="font-outfitSemiBold text-2xl text-center">
        Nama : {name}
      </AppText>
      <AppText className="font-outfitSemiBold text-2xl text-center">
        Kelas : {grade}
      </AppText>
    </View>
  );
}

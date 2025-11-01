import { AppText } from "@/components/global/AppText";
import { TouchableOpacity, View } from "react-native";

interface SectionHeaderProps {
  title: string;
  className?: string;
  onPress?: () => void;
}

export default function SectionHeader({ title, onPress, className }: SectionHeaderProps) {
  return (
    <View className={`flex flex-row justify-between items-center pe-8 ${className}`}>
      <AppText className="text-xl font-outfitBold">{title}</AppText>
      <TouchableOpacity onPress={onPress}>
        <AppText className="text-sm text-primary-pr40">Lihat Selengkapnya</AppText>
      </TouchableOpacity>
    </View>
  );
}

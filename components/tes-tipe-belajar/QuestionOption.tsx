import { AppText } from "@/components/global/AppText";
import { TouchableOpacity, View } from "react-native";

interface QuestionOptionProps {
  label: string;
  text: string;
  selected?: boolean;
  onPress: () => void;
}

export default function QuestionOption({
  label,
  text,
  selected = false,
  onPress,
}: QuestionOptionProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`flex flex-row items-start rounded-xl`}
    >
      <View
        className={`flex items-center justify-center w-9 h-9 rounded-md border border-neutral-nr90 ${
          selected ? "bg-primary-pr30" : "bg-neutral-nr00"
        }`}
      >
        <AppText className="text-base">{label}</AppText>
      </View>
      <AppText className="text-base flex-1 ml-3">{text}</AppText>
    </TouchableOpacity>
  );
}

import { AppText } from "@/components/global/AppText";
import { View } from "react-native";
import QuestionOption from "./QuestionOption";

interface QuestionCardProps {
  question: string;
  options: { label: string; text: string }[];
  selectedOption: string | null;
  onSelect: (label: string) => void;
}

export default function QuestionCard({
  question,
  options,
  selectedOption,
  onSelect,
}: QuestionCardProps) {
  return (
    <View className="mt-8">
      <AppText className="text-lg">{question}</AppText>
      <View className="flex flex-col mt-6 gap-4">
        {options.map((opt) => (
          <QuestionOption
            key={opt.label}
            label={opt.label}
            text={opt.text}
            selected={selectedOption === opt.label}
            onPress={() => onSelect(opt.label)}
          />
        ))}
      </View>
    </View>
  );
}

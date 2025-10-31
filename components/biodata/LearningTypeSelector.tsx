import { useState } from "react";
import { View } from "react-native";
import { LearningTypeOption } from "./LearningTypeOption";

const types = [
  {
    key: "kinestetik",
    label: "Kinestetik",
    image: require("@/assets/images/tipe_kinestetik.png"),
  },
  {
    key: "visual",
    label: "Visual",
    image: require("@/assets/images/tipe_visual.png"),
  },
  {
    key: "audio",
    label: "Auditori",
    image: require("@/assets/images/tipe_audio.png"),
  },
];

interface Props {
  onSelect: (value: string) => void;
}

export function LearningTypeSelector({ onSelect }: Props) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    setSelectedType(key);
    onSelect(key);
  };

  return (
    <View className="flex flex-row justify-between mb-6">
      {types.map((type) => (
        <LearningTypeOption
          key={type.key}
          image={type.image}
          label={type.label}
          selected={selectedType === type.key}
          onPress={() => handleSelect(type.key)}
        />
      ))}
    </View>
  );
}

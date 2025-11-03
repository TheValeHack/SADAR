import { useEffect, useState } from "react";
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
  scaleSelector?: boolean;
  scaleSize?: number;
  onSelect: (value: string) => void;
  initialSelectedType: string | null;
}

export function LearningTypeSelector({
  onSelect,
  scaleSelector,
  scaleSize,
  initialSelectedType,
}: Props) {
  const [selectedType, setSelectedType] = useState<string | null>(initialSelectedType);

  useEffect(() => {
    setSelectedType(initialSelectedType);
  }, [initialSelectedType]);

  const handleSelect = (key: string) => {
    setSelectedType(key);
    onSelect(key);
  };

  return (
    <View className="flex flex-row justify-between mb-6">
      {types.map((type) => (
        <LearningTypeOption
          scaleSelector={scaleSelector}
          scaleSize={scaleSize}
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

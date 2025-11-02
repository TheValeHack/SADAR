import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";
import { AppText } from "../global/AppText";

interface Choice {
    image: any;
    label: string;
}

interface ChoiceItemProps {
    className?: string;
    width?: any; 
    label: string;
    image: any;
    onSelect: () => void;
}

export function ChoiceItem({ width, className, label, image, onSelect }: ChoiceItemProps) {
  return (
    <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onSelect}
            className={`flex flex-col rounded-lg overflow-hidden ${className}`}
            style={{ width: width || "45%" }}
          >
            <Image
              source={image}
              style={{ width: "100%", aspectRatio: 1 }}
              contentFit="cover"
            />
            <View className="p-2 bg-primary-pr30">
              <AppText className="text-center">{label}</AppText>
            </View>
    </TouchableOpacity>
  );
}

import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";
import { AppText } from "../global/AppText";

interface ChoiceItemProps {
    checked: boolean;
    className?: string;
    width?: any; 
    label: string;
    image: any;
    onSelect: () => void;
}

export function ChoiceItem({ checked, width, className, label, image, onSelect }: ChoiceItemProps) {
  return (
    <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onSelect}
            className={`relative flex flex-col ${className}`}
            style={{ width: width || "45%" }}
          >
            {
              !checked || <View
              className="bg-success-scs20 w-10 h-10 flex items-center justify-center rounded-full absolute z-20"
              style={{
                marginLeft: -12,
                marginTop: -12
              }}
            >
              <Image source={require("@/assets/icons/check.svg")} style={{ width: 16, height: 16 }} contentFit="contain" />
            </View>
            }
            <Image
              source={image}
              style={{ width: "100%", aspectRatio: 1, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
              contentFit="cover"
            />
            <View className="p-2 bg-primary-pr30 rounded-b-lg">
              <AppText className="text-center">{label}</AppText>
            </View>
    </TouchableOpacity>
  );
}

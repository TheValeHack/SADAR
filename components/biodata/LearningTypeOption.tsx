import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  scaleSelector?: boolean;
  scaleSize?: number;
  image: any;
  label: string;
  selected: boolean;
  onPress: () => void;
}

export function LearningTypeOption({ scaleSize, scaleSelector, image, label, selected, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        { 
          borderColor: selected ? "#000000" : "#999999",
          transform: selected && scaleSelector? [{ scale: scaleSize || 1.2 }] : [{ scale: 0.9 }],
         }, 
      ]}
    >
      <Image source={image} style={styles.image} contentFit="cover" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "27%",
    height: 150,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

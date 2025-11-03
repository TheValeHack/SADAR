import { Image } from "expo-image";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface StoryAudioControlsProps {
  onPlay?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const StoryAudioControls = ({ onPlay, onNext, onPrev }: StoryAudioControlsProps) => {
  const buttons = [
    { icon: require("@/assets/icons/backward.svg"), onPress: onPrev, size: 24 },
    { icon: require("@/assets/icons/play.svg"), onPress: onPlay, size: 12 },
    { icon: require("@/assets/icons/forward.svg"), onPress: onNext, size: 24 },
  ];

  return (
    <View className="mt-8 flex flex-row justify-center gap-9">
      {buttons.map((btn, i) => (
        <TouchableOpacity
          key={i}
          onPress={btn.onPress}
          className="bg-primary-pr30 w-14 h-14 flex items-center justify-center rounded-full"
        >
          <Image source={btn.icon} style={{ width: btn.size, height: btn.size }} contentFit="contain" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

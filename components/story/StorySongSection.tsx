import { AppText } from "@/components/global/AppText";
import { StoryAudioControls } from "@/components/story/StoryAudioControls";
import ProgressBar from "@/components/tes-tipe-belajar/ProgressBar";
import React from "react";
import { View } from "react-native";

interface StorySongSectionProps {
  title: string;
  progress: number;
  onPlay?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const StorySongSection = ({ title, progress, onPlay, onNext, onPrev }: StorySongSectionProps) => {
  return (
    <View className="mt-8">
      <AppText className="text-3xl text-center font-outfitBold mb-8">{title}</AppText>
      <ProgressBar circle progress={progress} />
      <StoryAudioControls onPlay={onPlay} onNext={onNext} onPrev={onPrev} />
    </View>
  );
};

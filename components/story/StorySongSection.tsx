import { AppText } from "@/components/global/AppText";
import { StoryAudioControls } from "@/components/story/StoryAudioControls";
import ProgressBar from "@/components/tes-tipe-belajar/ProgressBar";
import React from "react";
import { View } from "react-native";

interface StorySongSectionProps {
  isPlaying: boolean;
  title: string;
  progress: number;
  currentTime?: string;
  totalTime?: string;
  onPlay?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const StorySongSection = ({
  isPlaying,
  title,
  progress,
  currentTime,
  totalTime,
  onPlay,
  onNext,
  onPrev,
}: StorySongSectionProps) => {
  return (
    <View className="mt-8">
      <AppText className="text-3xl text-center font-outfitBold mb-8">
        {title}
      </AppText>

      <ProgressBar circle progress={progress} />

      <View className="flex-row justify-between mt-2">
        <AppText className="text-neutral-nr60 text-sm">
          {currentTime ?? "0:00"}
        </AppText>
        <AppText className="text-neutral-nr60 text-sm">
          {totalTime ?? "0:00"}
        </AppText>
      </View>

      <StoryAudioControls
        isPlaying={isPlaying}
        onPlay={onPlay}
        onNext={onNext}
        onPrev={onPrev}
      />
    </View>
  );
};

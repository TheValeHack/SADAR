import AppBar from "@/components/global/AppBar";
import AppButton from "@/components/global/AppButton";
import Layout from "@/components/layout/Layout";
import { StoryHeader } from "@/components/story/StoryHeader";
import { StorySongSection } from "@/components/story/StorySongSection";
import { Audio, AVPlaybackStatusSuccess } from "expo-av";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StoryAudioPage() {
  const { subtemaId } = useLocalSearchParams();
  const router = useRouter();

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const audioUrl =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  useEffect(() => {
    return () => {
      if (sound) sound.unloadAsync();
    };
  }, [sound]);

  const loadAudio = async () => {
    if (sound) await sound.unloadAsync();

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: audioUrl },
      { shouldPlay: false }
    );

    newSound.setOnPlaybackStatusUpdate((status) => {
      if (!status.isLoaded) return;

      const s = status as AVPlaybackStatusSuccess;
      if (s.durationMillis) {
        setDuration(s.durationMillis);
        setPosition(s.positionMillis);
        setProgress(s.positionMillis / s.durationMillis);
      }
    });

    setSound(newSound);
    return newSound;
  };

  const handlePlay = async () => {
    try {
      if (!sound) {
        const newSound = await loadAudio();
        await newSound.playAsync();
        setIsPlaying(true);
      } else {
        const status = await sound.getStatusAsync();
        if (status.isLoaded) {
          if (status.isPlaying) {
            await sound.pauseAsync();
            setIsPlaying(false);
          } else {
            await sound.playAsync();
            setIsPlaying(true);
          }
        }
      }
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const handleForward = async () => {
    if (!sound) return;
    const status = await sound.getStatusAsync();
    if (status.isLoaded && status.positionMillis && status.durationMillis) {
      const newPosition = Math.min(
        status.positionMillis + 15000,
        status.durationMillis
      );
      await sound.setPositionAsync(newPosition);
    }
  };

  const handleBackward = async () => {
    if (!sound) return;
    const status = await sound.getStatusAsync();
    if (status.isLoaded && status.positionMillis) {
      const newPosition = Math.max(status.positionMillis - 15000, 0);
      await sound.setPositionAsync(newPosition);
    }
  };

  const handleFinish = () => {
    // router.push(`/kelas-cerita/${subtemaId}/game`);
  };

  const formatTime = (millis: number) => {
    if (!millis) return "0:00";
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <SafeAreaView
      edges={["bottom", "left", "right"]}
      className="flex-1 bg-white"
    >
      <AppBar className="mt-16" title="" />
      <Layout className="pt-28 pb-16 flex-1">
        <View className="px-8 z-20">
          <StoryHeader
            title="Bantu kelinci mengingat apa kelebihan yang sudah disebutkan"
            desc="Putar dan nyanyikan lagu di bawah ini"
            image={require("@/assets/images/rabbit-with-kid.png")}
          />

          <StorySongSection
            title="Kelinciku"
            progress={progress}
            onPlay={handlePlay}
            onNext={handleForward}
            onPrev={handleBackward}
            isPlaying={isPlaying}
            currentTime={formatTime(position)}
            totalTime={formatTime(duration)}
          />
        </View>
      </Layout>

      <View className="px-8 mb-8">
        <AppButton onPress={handleFinish}>
          Selesai mendengarkan lagu
        </AppButton>
      </View>
    </SafeAreaView>
  );
}

import AppButton from "@/components/global/AppButton";
import Layout from "@/components/layout/Layout";
import { StoryHeader } from "@/components/story/StoryHeader";
import { StorySongSection } from "@/components/story/StorySongSection";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StoryAudioPage() {
  const { subtemaId } = useLocalSearchParams();
  const router = useRouter();

  const handlePlay = () => {
    console.log("Play audio for", subtemaId);
  };

  const handleNext = () => {
    console.log("Next audio section");
  };

  const handlePrev = () => {
    console.log("Previous audio section");
  };

  const handleFinish = () => {
    router.push(`/kelas-cerita/${subtemaId}/halaman-2`);
  };

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} className="flex-1 bg-white">
      <Layout className="py-16 flex-1">
        <View className="px-8 z-20">
          <StoryHeader
            title="Bantu kelinci mengingat apa kelebihan yang sudah disebutkan"
            desc="Putar dan nyanyikan lagu di bawah ini"
            image={require("@/assets/images/rabbit-with-kid.png")}
          />

          <StorySongSection
            title="Kelinciku"
            progress={0.4}
            onPlay={handlePlay}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </View>
      </Layout>

      <View className="px-8 mb-8">
        <AppButton onPress={handleFinish}>Selesai mendengarkan lagu</AppButton>
      </View>
    </SafeAreaView>
  );
}

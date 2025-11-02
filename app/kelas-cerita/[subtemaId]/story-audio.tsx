import AppButton from "@/components/global/AppButton";
import { AppText } from "@/components/global/AppText";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { View } from "react-native";

export default function StoryAudioPage() {
  const [learningType, setLearningType] = useState<string | null>(null);

  return (
    <Layout className="py-16">
      <View className="px-8 z-20">
        <AppText className="text-3xl font-outfitSemiBold text-center">
          Perbedaan Pertumbuhan Tumbuhan dan Hewan (audio)
        </AppText>

        <View className="mt-16">
          <AppButton className="mt-8">Mulai Cerita</AppButton>
        </View>
      </View>
    </Layout>
  );
}

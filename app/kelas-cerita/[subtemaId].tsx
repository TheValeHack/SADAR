import { LearningTypeSelector } from "@/components/biodata/LearningTypeSelector";
import AppBar from "@/components/global/AppBar";
import AppButton from "@/components/global/AppButton";
import { AppText } from "@/components/global/AppText";
import Layout from "@/components/layout/Layout";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function SubtemaDetailPage() {
  const router = useRouter();
  const [learningType, setLearningType] = useState<string | null>("visual");
  const { subtemaId } = useLocalSearchParams();

  const handleStart = () => {
    if (!learningType) return;

    let path = "";
    if (learningType === "visual") {
      path = `/kelas-cerita/${subtemaId}/story-visual`;
    } else if (learningType === "audio") {
      path = `/kelas-cerita/${subtemaId}/story-audio`;
    } else if (learningType === "kinestetik") {
      path = `/kelas-cerita/${subtemaId}/story-kinestetik`;
    }

    router.push(path as any);
  };

  return (
    <>
      <AppBar
          className="mt-16"
          title=""
      />
      <Layout className="pt-36 pb-16">
        <Image
          source={require("@/assets/images/cloud.png")}
          style={{
            width: "100%",
            height: 150,
            position: "absolute",
            top: 0,
          }}
          contentFit="cover"
        />

        <View className="px-8 z-20">
          <AppText className="text-3xl font-outfitSemiBold text-center">
            Perbedaan Pertumbuhan Tumbuhan dan Hewan
          </AppText>

          <View className="mt-16">
              <AppText className="text-xl font-outfitSemiBold text-center  mb-16">
              Pilih tipe belajar!
              </AppText>
            <LearningTypeSelector scaleSelector onSelect={(val) => setLearningType(val)} />

            <AppButton onPress={handleStart} className="mt-8">Mulai Cerita</AppButton>
          </View>
        </View>
          <View className="w-full h-[60vh] absolute bottom-0">
              <Image
              source={require("@/assets/images/subtema-choose-type-bg.png")}
              style={{
              width: "100%",
              height: "100%",
              }}
              contentFit="cover"
          />
          </View>
      </Layout>
    </>
  );
}

import AppButton from "@/components/global/AppButton";
import { AppText } from "@/components/global/AppText";
import Layout from "@/components/layout/Layout";
import ProgressBar from "@/components/tes-tipe-belajar/ProgressBar";
import QuestionCard from "@/components/tes-tipe-belajar/QuestionCard";
import { Image } from "expo-image";
import { useState } from "react";
import { View } from "react-native";

export default function TesTipeBelajarPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 2;

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  return (
    <Layout className="py-16">
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
          Tes Tipe Belajar
        </AppText>
        <AppText className="mt-1 text-base text-center">
          Jawab pertanyaan berikut dengan memilih A, B, atau C
        </AppText>

        <View className="mt-8">
          <ProgressBar
            progress={currentQuestion / totalQuestions}
            label={`${currentQuestion}/${totalQuestions}`}
          />
        </View>

        <QuestionCard
          question="Saya perlu satu ilustrasi dari apa yang diajarkan supaya bisa memahaminya."
          options={[
            {
              label: "A",
              text: "Kamu sering lupa menyampaikan kembali hal-hal yang pernah dipesankan kepadamu secara lisan",
            },
            {
              label: "B",
              text: "Kamu mudah memahami informasi dengan membaca teks atau melihat gambar",
            },
            {
              label: "C",
              text: "Kamu suka mendengarkan penjelasan guru atau teman untuk memahami sesuatu",
            },
          ]}
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
        />

        <AppButton className="mt-8">
          Selanjutnya
        </AppButton>
      </View>

      <Image
        source={require("@/assets/images/grass.png")}
        style={{
          width: "100%",
          height: 150,
          position: "absolute",
          bottom: 0,
        }}
        contentFit="cover"
      />
    </Layout>
  );
}

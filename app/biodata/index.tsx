import { LearningTypeSelector } from "@/components/biodata/LearningTypeSelector";
import AppButton from "@/components/global/AppButton";
import AppPickerInput from "@/components/global/AppPickerInput";
import { AppText } from "@/components/global/AppText";
import AppTextInput from "@/components/global/AppTextInput";
import Layout from "@/components/layout/Layout";
import { Image } from "expo-image";
import { useState } from "react";
import { View } from "react-native";

export default function BiodataPage() {
  const [selectedClass, setSelectedClass] = useState<string>("kelas1");
  const [learningType, setLearningType] = useState<string | null>(null);

  return (
    <Layout className="py-16 px-0">
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

      <View className="px-8">
        <AppText className="text-3xl font-outfitSemiBold text-center">
          Biodata
        </AppText>
        <AppText className="mt-1 text-base text-center">
          Isikan nama, kelas, IQ, dan tipe belajar kamu di bawah ini
        </AppText>

        <View className="mt-8">
          <AppTextInput
            className="mb-6"
            label="Nama"
            placeholder="Masukkan nama kamu"
          />

          <AppPickerInput
            className="mb-6"
            label="Kelas"
            selectedValue={selectedClass}
            onValueChange={setSelectedClass}
            items={[
              { label: "Kelas 1", value: "kelas1" },
              { label: "Kelas 2", value: "kelas2" },
              { label: "Kelas 3", value: "kelas3" },
            ]}
          />

          <AppTextInput
            className="mb-6"
            label="IQ (Opsional)"
            placeholder="Masukkan skor IQ kamu"
            keyboardType="numeric"
          />

          <AppText className="mb-2 text-lg text-neutral-nr60">
            Pilih salah satu tipe belajar kamu
          </AppText>
          <LearningTypeSelector onSelect={(val) => setLearningType(val)} />

          <AppText className="text-base text-primary-pr60 underline text-center">
            aku belum tahu tipe belajarku
          </AppText>

          <AppButton className="mt-8">Masuk</AppButton>
        </View>
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

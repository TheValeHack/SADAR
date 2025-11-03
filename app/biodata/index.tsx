import { LearningTypeSelector } from "@/components/biodata/LearningTypeSelector";
import AppButton from "@/components/global/AppButton";
import AppPickerInput from "@/components/global/AppPickerInput";
import { AppText } from "@/components/global/AppText";
import AppTextInput from "@/components/global/AppTextInput";
import Layout from "@/components/layout/Layout";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";


const typeMap: { [key: string]: string } = {
    'visual': 'Visual',
    'audio': 'Auditori',
    'kinestetik': 'Kinestetik',
};

export default function BiodataPage() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<string>("kelas1");
  const [iqScore, setIqScore] = useState<string>('');
  const [learningType, setLearningType] = useState<string | null>(null);
  const [showQuizResultModal, setShowQuizResultModal] = useState(false);

  useEffect(() => {
    const resultType = params.resultType as string | undefined;
    if (resultType) {
      const receivedTypeKey = resultType.toLowerCase();

      if (Object.keys(typeMap).includes(receivedTypeKey)) {
        setLearningType(receivedTypeKey);
        const typeLabel = typeMap[receivedTypeKey];

        Alert.alert(
          "Tes Selesai 🎉",
          `Tipe belajar Anda telah diatur menjadi: ${typeLabel}.`,
          [{ text: "OK" }]
        );
      }
    }
  }, [params.resultType]);


  const handleStartQuiz = () => {
      router.push('/tes-tipe-belajar'); 
  };

  const handleMasuk = () => {
      if (!name || !learningType) {
          Alert.alert("Perhatian", "Nama dan Tipe Belajar harus diisi sebelum Masuk.");
          return;
      }

      console.log("Nama:", name);
      console.log("Kelas:", selectedClass);
      console.log("IQ:", iqScore);
      console.log("Tipe Belajar:", learningType);
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
            value={name}
            onChangeText={setName}
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
            value={iqScore}
            onChangeText={setIqScore}
          />

          <AppText className="mb-4 text-lg text-neutral-nr60">
            Pilih salah satu tipe belajar kamu
          </AppText>
          <LearningTypeSelector initialSelectedType={learningType} scaleSize={1.02} scaleSelector onSelect={(val) => setLearningType(val)} />

          <TouchableOpacity onPress={handleStartQuiz}>
              <AppText className="text-base text-primary-pr60 underline text-center mt-3">
                  aku belum tahu tipe belajarku
              </AppText>
          </TouchableOpacity>

          <AppButton className="mt-8" onPress={handleMasuk}>Masuk</AppButton>
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

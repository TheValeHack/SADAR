import AppBar from "@/components/global/AppBar";
import AppButton from "@/components/global/AppButton";
import Layout from "@/components/layout/Layout";
import { ChoiceItem } from "@/components/story/ChoiceItem";
import { StoryGameSuccessModal } from "@/components/story/StoryGameSuccessModal";
import { StoryHeader } from "@/components/story/StoryHeader";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StoryKinestetikPage() {
  const { subtemaId } = useLocalSearchParams();
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false)

  const choices = [
              {
                image: require("@/assets/images/rabbit-jump.png"),
                label: "Bisa melompat",
                checked: true
              },
              {
                image: require("@/assets/images/rabbit-sing.png"),
                label: "Bisa bernyanyi",
                checked: false
              },
              {
                image: require("@/assets/images/rabbit-fly.png"),
                label: "Bisa terbang",
                checked: false
              }
            ]

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} className="flex-1 bg-white">
      <AppBar
          className="mt-16"
          title=""
      />
      <Layout className="pt-28 pb-16 flex-1">
        <View className="px-8 z-20">
          <StoryHeader
            title="Bantu kelinci mengingat apa kelebihan yang sudah disebutkan"
            desc="Pilih gambar yang bisa dilakukan kelinci dan ikutilah gerakannya"
            image={null}
            hideImage
          />

          <View className="mt-8 flex flex-row flex-wrap justify-center items-center gap-8">
              {
                choices.map((item, index) => (
                  <ChoiceItem
                    key={index}
                    checked={item.checked}
                    label={item.label}
                    image={item.image}
                    onSelect={() => {}}
                  />
                ))
              }
          </View>
        </View>
      </Layout>

      <View className="px-8 mb-8">
        <AppButton onPress={() => setShowModal(true)}>Selesai memilih gambar</AppButton>
      </View>

      <StoryGameSuccessModal
          visible={showModal}
          onClose={() => setShowModal(false)}
      />
    </SafeAreaView>
  );
}

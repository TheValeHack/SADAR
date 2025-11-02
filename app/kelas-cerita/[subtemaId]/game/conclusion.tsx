import AppButton from "@/components/global/AppButton";
import { AppText } from "@/components/global/AppText";
import Layout from "@/components/layout/Layout";
import { Image } from "expo-image";
import { View } from "react-native";

export default function ConclusionGamePage() {
  return (
    <Layout className="flex-1 relative" style={{ backgroundColor: "#D7F3FF" }}>
      <Image
        source={require("@/assets/images/mountain.png")}
        style={{
          width: "100%",
          height: 320,
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 0,
        }}
        contentFit="cover"
      />
      <Image
        source={require("@/assets/images/cloud-sun.png")}
        style={{
          width: "100%",
          height: 150,
          position: "absolute",
          top: 100,
          left: 0,
          zIndex: 0,
        }}
        contentFit="cover"
      />

      <View className="px-8 relative h-full flex items-center justify-center">
        <View className="w-full min-h-52 relative flex flex-col items-center justify-center z-10">
          <Image
            source={require("@/assets/images/papan3.png")}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            contentFit="fill"
          />
          <View className="px-8 py-8">
            <AppText className="font-outfitSemiBold text-lg text-center">
              Kesimpulan
            </AppText>
            <AppText className="font-outfitSemiBold text-justify mt-3">
              Si Pohon dan Si Kelinci tumbuh dengan cara yang berbeda. Si Pohon
              tumbuh di satu tempat dengan bantuan air dan sinar matahari. Si
              Kelinci tumbuh dengan belajar bergerak dan makan sendiri. Walau
              berbeda, mereka tetap bisa berteman dan bermain bersama.
            </AppText>
          </View>
        </View>

        <AppButton className="absolute bottom-0 mb-16 z-20">Keluar</AppButton>
      </View>
    </Layout>
  );
}

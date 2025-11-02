import { AppText } from "@/components/global/AppText";
import ClassCard from "@/components/kelas/ClassCard";
import Layout from "@/components/layout/Layout";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function KelaskuPage() {
  const router = useRouter();
  const recentClasses = [
    {
      id: 1,
      title: "Perkembangan makhluk hidup",
      theme: "Tema 1",
      thumbnail: require("@/assets/images/thumbnail1.png"),
    },
    {
      id: 2,
      title: "Hidup sehat dan bersih",
      theme: "Tema 2",
      thumbnail: require("@/assets/images/thumbnail1.png"),
    },
  ];

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
          Kelasku
        </AppText>

        <View className="mt-8 flex flex-row flex-wrap justify-between">
          {recentClasses.map((kelas) => (
            <View key={kelas.id} className="w-[48%] mb-4">
              <ClassCard {...kelas} onPress={() => router.navigate("/kelas/12")} />
            </View>
          ))}
        </View>
      </View>

      <Image
        source={require("@/assets/images/river.png")}
        style={{
          width: "100%",
          height: 220,
          position: "absolute",
          bottom: 0,
          backgroundColor: "#00"
        }}
        contentFit="cover"
      />
    </Layout>
  );
}

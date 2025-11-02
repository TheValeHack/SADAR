import ProgressItemCard from "@/components/ceritaku/ProgressItemCard";
import { AppText } from "@/components/global/AppText";
import Layout from "@/components/layout/Layout";
import { Image } from "expo-image";
import { View } from "react-native";

export default function CeritakuPage() {
  const progressItems = [
    {
      id: 1,
      title: "Ciri-ciri makhluk hidup",
      subTitle: "Sub Tema 1",
      theme: "Tema 1",
      timeAgo: "2 jam lalu",
      progress: 0.45,
      thumbnail: require("@/assets/images/thumbnail1.png"),
    },
    {
      id: 2,
      title: "Pentingnya lingkungan bersih",
      subTitle: "Sub Tema 2",
      theme: "Tema 1",
      timeAgo: "5 jam lalu",
      progress: 0.6,
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
          Dalam Progress
        </AppText>

        <View className="mt-8">
          {progressItems.map((item) => (
            <ProgressItemCard className="w-full mb-4" key={item.id} {...item} />
          ))}
        </View>
      </View>

      <Image
        source={require("@/assets/images/grass.png")}
        style={{
          width: "100%",
          height: 150,
          position: "absolute",
          bottom: 0,
          backgroundColor: "#00"
        }}
        contentFit="cover"
      />
    </Layout>
  );
}

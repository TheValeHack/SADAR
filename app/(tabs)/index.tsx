import ClassCard from "@/components/home/ClassCard";
import HorizontalList from "@/components/home/HorizontalList";
import ProgressItemCard from "@/components/home/ProgressItemCard";
import SectionHeader from "@/components/home/SectionHeader";
import WelcomeHeader from "@/components/home/WelcomeHeader";
import Layout from "@/components/layout/Layout";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function HomePage() {
  const router = useRouter();
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
        source={require("@/assets/images/home-banner-bg.png")}
        style={{ width: "100%", height: 400, position: "absolute", top: 0 }}
        contentFit="cover"
      />
      <View className="ps-8 z-20">
        <WelcomeHeader name="Irfan Valerian" />

        <SectionHeader title="Dalam Progress" onPress={() => router.navigate("/ceritaku")} />
        <View className="mt-6">
          <HorizontalList>
            {progressItems.map((item) => (
              <ProgressItemCard className="w-[80vw] mr-5" key={item.id} {...item} />
            ))}
          </HorizontalList>
        </View>

        <SectionHeader className="mt-8" title="Kelas yang Baru Diakses" onPress={() => router.navigate("/kelas")} />
        <View className="mt-6">
          <HorizontalList>
            {recentClasses.map((kelas) => (
              <ClassCard className="w-[40vw] mr-5" key={kelas.id} {...kelas} />
            ))}
          </HorizontalList>
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

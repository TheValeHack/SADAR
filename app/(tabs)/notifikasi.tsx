import { AppText } from "@/components/global/AppText";
import Layout from "@/components/layout/Layout";
import NotifikasiItem from "@/components/notifikasi/NotifikasiItem";
import { Image } from "expo-image";
import { View } from "react-native";

export default function NotifikasiPage() {
  const notifications = [
    {
      id: 1,
      title: "Cerita seru telah hadir di",
      theme: "Tema 1",
      subtitle: "Subtema 4 : Perbedaan Pertumbuhan Tumbuhan dan Hewan",
      time: "30 menit lalu",
      image: require("@/assets/images/bird-happy.png"),
      isRead: false,
    },
    {
      id: 2,
      title: "Kamu belum baca cerita di",
      theme: "Tema 1",
      subtitle: "Subtema 1 :  Ciri-Ciri Makhluk Hidup",
      time: "2 hari lalu",
      image: require("@/assets/images/bird-sad.png"),
      isRead: true,
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
          Notifikasi
        </AppText>

        <View className="mt-8">
          {notifications.map((notif) => (
            <NotifikasiItem key={notif.id} {...notif} />
          ))}
        </View>
      </View>

      <Image
        source={require("@/assets/images/mountain.png")}
        style={{
          width: "100%",
          height: 260,
          position: "absolute",
          bottom: 0,
          backgroundColor: "#00"
        }}
        contentFit="cover"
      />
    </Layout>
  );
}

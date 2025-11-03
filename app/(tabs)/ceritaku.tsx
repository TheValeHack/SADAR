import ProgressItemCard from "@/components/ceritaku/ProgressItemCard";
import AppBar from "@/components/global/AppBar";
import { AppText } from "@/components/global/AppText";
import Layout from "@/components/layout/Layout";
import { timeAgo } from "@/utils/timeAgo";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";

export default function CeritakuPage() {
  const router = useRouter();

  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [showSortMenu, setShowSortMenu] = useState(false);

  const [progressItems, setProgressItems] = useState([
    {
      id: 1,
      title: "Ciri-ciri makhluk hidup",
      subTitle: "Sub Tema 1",
      theme: "Tema 1",
      progress: 0.45,
      thumbnail: require("@/assets/images/thumbnail1.png"),
      time: new Date(2025, 10, 3, 10, 0),
    },
    {
      id: 2,
      title: "Pentingnya lingkungan bersih",
      subTitle: "Sub Tema 2",
      theme: "Tema 1",
      progress: 0.6,
      thumbnail: require("@/assets/images/thumbnail1.png"),
      time: new Date(2025, 10, 3, 15, 30),
    },
    {
      id: 3,
      title: "Menjaga kebersihan sekolah",
      subTitle: "Sub Tema 3",
      theme: "Tema 2",
      progress: 0.75,
      thumbnail: require("@/assets/images/thumbnail1.png"),
      time: new Date(2025, 10, 2, 9, 15),
    },
  ]);

  const sortedItems = [...progressItems].sort((a, b) => {
    if (sortOrder === "newest") {
      return b.time.getTime() - a.time.getTime();
    } else {
      return a.time.getTime() - b.time.getTime();
    }
  });

  const handleSortChange = (order: "newest" | "oldest") => {
    setSortOrder(order);
    setShowSortMenu(false);
  };

  return (
    <>
      <AppBar
        className="mt-28"
        title="Dalam Progress"
        showRightButton
        rightButtonIcon={require("@/assets/icons/candle.svg")}
        onRightButtonPress={() => setShowSortMenu(true)}
      />

      <Layout className="pt-36 pb-16 relative">
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
          <View className="mt-8">
            {sortedItems.map((item) => (
              <ProgressItemCard
                className="w-full mb-4"
                key={item.id}
                timeAgo={timeAgo(item.time)}
                {...item}
              />
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
            backgroundColor: "#00",
          }}
          contentFit="cover"
        />
      </Layout>

      <Modal
        transparent
        visible={showSortMenu}
        animationType="fade"
        onRequestClose={() => setShowSortMenu(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setShowSortMenu(false)}
          className="flex-1 bg-black/40 justify-end"
        >
          <View className="bg-white rounded-t-3xl p-6">
            <AppText className="text-xl font-outfitSemiBold mb-4">
              Urutkan Berdasarkan
            </AppText>

            <TouchableOpacity
              onPress={() => handleSortChange("newest")}
              className={`py-3 ${
                sortOrder === "newest" ? "bg-primary-pr10" : "bg-transparent"
              } rounded-xl`}
            >
              <AppText className="text-lg text-center">Terbaru</AppText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleSortChange("oldest")}
              className={`py-3 mt-2 ${
                sortOrder === "oldest" ? "bg-primary-pr10" : "bg-transparent"
              } rounded-xl`}
            >
              <AppText className="text-lg text-center">Terlama</AppText>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}
 
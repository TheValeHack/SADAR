import AppBar from "@/components/global/AppBar";
import { AppText } from "@/components/global/AppText";
import AppTextInput from "@/components/global/AppTextInput";
import ClassCard from "@/components/kelas/ClassCard";
import Layout from "@/components/layout/Layout";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function KelaskuPage() {
  const router = useRouter();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    {
      id: 3,
      title: "Lingkungan dan Alam",
      theme: "Tema 3",
      thumbnail: require("@/assets/images/thumbnail1.png"),
    },
  ];

  const filteredClasses = recentClasses.filter((kelas) => {
    const query = searchQuery.toLowerCase();
    return (
      kelas.title.toLowerCase().includes(query) ||
      kelas.theme.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <AppBar
        className="mt-28"
        title="Kelasku"
        rightButtonIcon={require("@/assets/icons/search.svg")}
        onRightButtonPress={() => setShowSearchBar(!showSearchBar)}
        showRightButton
      />

      <Layout className="pt-36 pb-16">
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
          {showSearchBar && (
            <AppTextInput
              label=""
              placeholder="Masukkan kata kunci"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
              style={{
                marginBottom: 12,
                borderRadius: 100,
              }}
            />
          )}

          <View className="mt-8 flex flex-row flex-wrap justify-between">
            {filteredClasses.length > 0 ? (
              filteredClasses.map((kelas) => (
                <View key={kelas.id} className="w-[48%] mb-4">
                  <ClassCard
                    {...kelas}
                    onPress={() => router.navigate(`/kelas/${kelas.id}`)}
                  />
                </View>
              ))
            ) : (
              <View className="w-full mt-8">
                <AppText className="text-center text-lg">Kelas tidak ditemukan</AppText>
              </View>
            )}
          </View>
        </View>

        <Image
          source={require("@/assets/images/river.png")}
          style={{
            width: "100%",
            height: 220,
            position: "absolute",
            bottom: 0,
          }}
          contentFit="cover"
        />
      </Layout>
    </>
  );
}

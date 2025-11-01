import { AppText } from "@/components/global/AppText";
import Layout from "@/components/layout/Layout";
import ProfileCard from "@/components/profil/ProfileCard";
import { Image } from "expo-image";
import { View } from "react-native";

export default function ProfilPage() {
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
          Profil
        </AppText>

        <ProfileCard
          name="Irfan Valerian"
          grade="3 SD"
          avatarSource={require("@/assets/images/bird-happy.png")}
        />
      </View>

      <Image
        source={require("@/assets/images/mountain.png")}
        style={{
          width: "100%",
          height: 260,
          position: "absolute",
          bottom: 0,
        }}
        contentFit="cover"
      />
    </Layout>
  );
}

import { AppText } from "@/components/global/AppText";
import Layout from "@/components/layout/Layout";
import { Image } from "expo-image";

export default function SuccessGamePage() {
  return (
    <Layout className="py-16 flex-1 flex items-center justify-center" style={{ backgroundColor:  "#BAEAC0"}}>
      <Image
        source={require("@/assets/images/bird-hero.png")}
        style={{
            width: "55%",
            aspectRatio: 1
        }}
      />
      <AppText style={{ fontSize: 32 }} className="font-outfitExtraBold mt-6">KAMU BERHASIL!</AppText>
      <AppText className="font-outfitSemiBold text-xl">Kamu sangat pintar</AppText>
    </Layout>
  );
}
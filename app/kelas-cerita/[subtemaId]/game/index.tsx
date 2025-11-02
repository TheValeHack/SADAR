import GameBoard from "@/components/game/GameBoard";
import GameInstruction from "@/components/game/GameInstruction";
import GameOptionsList from "@/components/game/GameOptionsList";
import AppButton from "@/components/global/AppButton";
import Layout from "@/components/layout/Layout";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DragAndDropGamePage() {
  const gameOptions = [
    "bisa berlari",
    "bisa pindah-pindah",
    "diam",
    "bisa makan sendiri",
    "memiliki akar dan daun",
  ];

  const handleFinishGame = () => {
    console.log("Game selesai!");
  };

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} className="flex-1 bg-white">
      <Layout className="py-16 flex-1">
        <View className="px-8 z-20">
          <GameInstruction
            title="Bantu kelinci mengingat apa kelebihan yang sudah disebutkan"
            subtitle="Tarik  dan lepas kotak warna kuning ke papan kayu di paling bawah !"
          />

          <GameOptionsList options={gameOptions} />

          <GameBoard imageSource={require("@/assets/images/papan2.png")} />

          <AppButton secondary onPress={handleFinishGame}>Selesai bermain game</AppButton>
        </View>
      </Layout>
    </SafeAreaView>
  );
}
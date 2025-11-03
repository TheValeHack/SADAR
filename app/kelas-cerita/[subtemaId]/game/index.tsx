import GameBoard from "@/components/game/GameBoard";
import GameInstruction from "@/components/game/GameInstruction";
import GameOptionsList from "@/components/game/GameOptionsList";
import AppBar from "@/components/global/AppBar";
import AppButton from "@/components/global/AppButton";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import type { LayoutRectangle } from "react-native";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DragAndDropGamePage() {
  const [options, setOptions] = useState([
    { text: "bisa berlari", dropped: false },
    { text: "bisa pindah-pindah", dropped: false },
    { text: "diam", dropped: false },
    { text: "bisa makan sendiri", dropped: false },
    { text: "memiliki akar dan daun", dropped: false },
  ]);

  const [dropZoneLayout, setDropZoneLayout] = useState<LayoutRectangle | null>(null);

  const [droppedOptions, setDroppedOptions] = useState<
    { text: string; x: number; y: number }[]
  >([]);

  const handleWrongDrop = (item: string, dropX: number, dropY: number) => {
      console.log('item dibuang')
      setDroppedOptions((prev) => {
        const existingIndex = prev.findIndex((opt) => opt.text === item);
        if (existingIndex !== -1) {
          let updated = prev.filter((opt) => opt.text !== item);
          return updated;
        }
        return prev
      });
  }

  const handleDrop = (item: string, dropX: number, dropY: number) => {
    if (!dropZoneLayout) {
      console.log('item dibuang')
      setDroppedOptions((prev) => {
        const existingIndex = prev.findIndex((opt) => opt.text === item);
        if (existingIndex !== -1) {
          let updated = prev.filter((opt) => opt.text !== item);
          return updated;
        }
        return prev
      });
      return
    };

    const relativeX = dropX - dropZoneLayout.x;
    const relativeY = dropY - dropZoneLayout.y;

    setDroppedOptions((prev) => {
      const existingIndex = prev.findIndex((opt) => opt.text === item);
      if (existingIndex !== -1) {
        console.log('item sudah ada')
        const updated = [...prev];
        updated[existingIndex] = { text: item, x: relativeX, y: relativeY };
        return updated;
      }

      return [...prev, { text: item, x: relativeX, y: relativeY }];
    });

    setOptions((prev) =>
      prev.map((opt) =>
        opt.text === item ? { ...opt, dropped: true } : opt
      )
    );
  };


  const handleFinishGame = () => {
    console.log("Game selesai!");
    console.log("Opsi yang ada di papan:", droppedOptions);
  };

  useEffect(() => {
    console.log("Dropped items:", droppedOptions);
  }, [droppedOptions]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView edges={["bottom", "left", "right"]} className="flex-1 bg-white">
        <AppBar className="mt-16" title="" />
        <Layout className="pt-28 pb-16 flex-1">
          <View className="px-8 z-20 relative">
            <GameInstruction
              title="Bantu kelinci mengingat apa kelebihan yang sudah disebutkan"
              subtitle="Tarik dan lepas kotak warna kuning ke papan kayu di paling bawah!"
            />

            <GameOptionsList
              options={options}
              dropZoneLayout={dropZoneLayout}
              onDrop={handleDrop}
              onWrongDrop={handleWrongDrop}
            />

            <GameBoard
              imageSource={require("@/assets/images/papan2.png")}
              onDropZoneLayout={setDropZoneLayout}
              droppedItems={droppedOptions}
            />

            <AppButton secondary onPress={handleFinishGame}>
              Selesai bermain game
            </AppButton>
          </View>
        </Layout>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

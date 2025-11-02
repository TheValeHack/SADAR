import { AppText } from "@/components/global/AppText";
import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";

interface StoryBottomBarProps {
  currentPage: number;
  totalPage: number;
  onPrev?: () => void;
  onNext?: () => void;
}

export function StoryBottomBar({
  currentPage,
  totalPage,
  onPrev,
  onNext,
}: StoryBottomBarProps) {
  return (
    <View className="bg-neutral-nr00 w-full flex flex-row justify-between px-8 py-5 items-center border-t border-neutral-nr30">
      <View className="flex flex-row gap-1 items-center">
        <AppText className="text-base">Halaman</AppText>
        <AppText className="text-lg font-outfitBold">{currentPage}</AppText>
        <AppText className="text-base">dari {totalPage}</AppText>
      </View>

      <View className="flex flex-row gap-4">
        <TouchableOpacity
          onPress={onPrev}
          activeOpacity={0.8}
          className="w-12 h-12 flex items-center justify-center rounded-full"
          style={{
            backgroundColor: currentPage == 1 ? "#E6E6E6": "#D7F3FF"
          }}
        >
          <Image
            source={require("@/assets/icons/arrow-left.svg")}
            style={{ width: 28, height: 28 }}
            tintColor={currentPage == 1 ? "#FFFFFF": "#000000"}
            contentFit="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onNext}
          activeOpacity={0.8}
          className="w-12 h-12 flex items-center justify-center rounded-full"
          style={{
            backgroundColor: currentPage == totalPage ? "#E6E6E6": "#D7F3FF"
          }}
        >
          <Image
            source={require("@/assets/icons/arrow-right.svg")}
            style={{ width: 28, height: 28 }}
            tintColor={currentPage == totalPage ? "#FFFFFF": "#000000"}
            contentFit="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

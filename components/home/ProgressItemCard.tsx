import { AppText } from "@/components/global/AppText";
import ProgressBar from "@/components/tes-tipe-belajar/ProgressBar";
import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";

interface ProgressItemCardProps {
  className?: string;
  thumbnail: any;
  title: string;
  subTitle: string;
  theme: string;
  timeAgo: string;
  progress: number;
  onPressPlay?: () => void;
}

export default function ProgressItemCard({
    className,
    thumbnail,
    title,
    subTitle,
    theme,
    timeAgo,
    progress,
    onPressPlay,
    }: ProgressItemCardProps) {
    return (
        <View className={`bg-white h-32 border border-neutral-nr40 rounded-xl flex flex-row overflow-hidden ${className}`}>
            <View className="w-[35%] h-full relative">
                <Image
                source={thumbnail}
                style={{ width: "100%", height: "100%" }}
                contentFit="cover"
                />
                <View className="z-30 bg-warning-wr30 px-3 py-1 absolute bottom-0 rounded-tr-xl">
                <AppText className="text-sm text-center text-neutral-nr00">{theme}</AppText>
                </View>
            </View>

            {/* Content */}
            <View className="flex-1 p-3 flex-col justify-between">
                <View>
                <View className="flex flex-row justify-between items-center">
                    <AppText className="text-sm font-outfitSemiBold text-neutral-nr50">{subTitle}</AppText>
                    <AppText className="text-xs text-neutral-nr50">{timeAgo}</AppText>
                </View>
                <AppText className="text-base">{title}</AppText>
                </View>

                <View className="flex flex-row justify-between items-end">
                <View className="flex-1 gap-2">
                    <AppText className="text-xs text-neutral-nr60">Progress: {Math.round(progress * 100)}%</AppText>
                    <ProgressBar progress={progress} />
                </View>
                <TouchableOpacity
                    onPress={onPressPlay}
                    className="bg-primary-pr30 w-10 h-10 flex items-center justify-center rounded-xl ml-3"
                >
                    <Image
                    source={require("@/assets/icons/play.svg")}
                    style={{ width: 15, height: 15 }}
                    contentFit="contain"
                    />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

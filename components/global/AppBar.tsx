import { AppText } from "@/components/global/AppText";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { TouchableOpacity, View, ViewProps } from "react-native";

interface AppBarProps extends ViewProps {
    blueRightButton?: boolean;
    className?: string;
    title: string;
    onBack?: () => void;
    rightButtonIcon?: any;
    onRightButtonPress?: () => void;
    showRightButton?: boolean;
}

export default function AppBar({
    blueRightButton,
    className,
    title,
    onBack,
    rightButtonIcon,
    onRightButtonPress,
    showRightButton = false,
    ...props
}: AppBarProps) {
    const router = useRouter();

    return (
        <View className={`flex flex-row justify-between py-4 px-8 items-center bg-white backdrop-blur-md absolute z-50 ${className}`} {...props}>
            <TouchableOpacity
                onPress={() => {
                    if(onBack){
                        onBack();
                    }
                    router.back();
                }}
                activeOpacity={0.8}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-pr10"
            >
                <Image
                source={require("@/assets/icons/arrow-left.svg")}
                style={{ width: 28, height: 28 }}
                contentFit="contain"
                />
            </TouchableOpacity>

            <AppText className="text-3xl font-outfitSemiBold text-center flex-1">
                {title}
            </AppText>

            {showRightButton ? (
                <TouchableOpacity
                onPress={onRightButtonPress}
                activeOpacity={0.8}
                style={{
                    borderWidth: blueRightButton ? 0 : 1,
                    backgroundColor: blueRightButton ? "#D7F3FF" : "#FFFFFF"
                }}
                className="border-neutral-nr30 w-12 h-12 rounded-full flex items-center justify-center"
                >
                <Image
                    source={rightButtonIcon}
                    style={{ width: 24, height: 24 }}
                    contentFit="contain"
                />
                </TouchableOpacity>
            ) : (
                <View className="w-12" />
            )}
        </View>
    );
}

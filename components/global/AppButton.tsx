import { View, ViewProps } from "react-native";
import { AppText } from "./AppText";


interface AppButtonProps extends ViewProps {
    children?: React.ReactNode,
    className?: string
}
export default function AppButton({children, className, ...props}: AppButtonProps) {
  return (
    <View className={`w-full py-3 bg-primary-pr30 rounded-full border-neutral-nr90 border ${className}`} {...props}>
        <AppText className="text-xl font-outfitSemiBold text-center">
            {children}
        </AppText>
    </View>
  );
}
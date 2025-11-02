import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { AppText } from "./AppText";


interface AppButtonProps extends TouchableOpacityProps {
    onPress?: () => void,
    children?: React.ReactNode,
    className?: string
}
export default function AppButton({children, className, onPress}: AppButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`w-full py-3 bg-primary-pr30 rounded-full border-neutral-nr90 border ${className}`} 
      onPress={onPress}
    >
        <AppText className="text-xl font-outfitSemiBold text-center">
            {children}
        </AppText>
    </TouchableOpacity>
  );
}
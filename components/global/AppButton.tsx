import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { AppText } from "./AppText";


interface AppButtonProps extends TouchableOpacityProps {
    secondary?: boolean,
    onPress?: () => void,
    children?: React.ReactNode,
    className?: string
}
export default function AppButton({secondary, children, className, onPress}: AppButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`w-full py-3 rounded-full border-neutral-nr90 border ${className}`}
      style={{ 
        backgroundColor: secondary ? "#CCCCCC" : "#84D3F5",
       }} 
      onPress={onPress}
    >
        <AppText className="text-xl font-outfitSemiBold text-center" style={{ color:  secondary ? "#FFFFFF" : "#000000" }}>
            {children}
        </AppText>
    </TouchableOpacity>
  );
}
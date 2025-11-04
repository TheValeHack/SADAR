import { AppText } from "@/components/global/AppText";
import { View } from "react-native";

interface ProgressBarProps {
  circle?: boolean;
  progress: number; // 0 - 1
  label?: string;
}

export default function ProgressBar({ circle, progress, label }: ProgressBarProps) {
  const percentage = Math.min(Math.max(progress, 0), 1) * 100;

  return (
    <View className="flex flex-row items-center w-full">
      <View className="flex-1 relative">
        <View className="w-full bg-neutral-nr10 h-4 rounded-full" />
        <View
          className="bg-primary-pr40 h-4 rounded-full absolute top-0 left-0 flex items-end justify-center"
          style={{ width: `${percentage}%` }}
        >
          {
            !circle || 
            <View 
              className="w-6 h-6 bg-primary-pr40 rounded-full"
              style={{
                position: "absolute",
                right: -10
              }}
            />
          }
        </View>
      </View>
      {label && (
        <AppText className="ml-3 text-sm text-neutral-nr60">{label}</AppText>
      )}
    </View>
  );
}

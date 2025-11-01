import { ReactNode } from "react";
import { ScrollView, View } from "react-native";

export default function HorizontalList({ children }: { children: ReactNode }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row">{children}</View>
    </ScrollView>
  );
}

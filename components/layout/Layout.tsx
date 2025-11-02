import React from "react";
import { ScrollView, StyleProp, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


interface LayoutProps {
  style?: StyleProp<ViewStyle>,
  children: React.ReactNode,
  className?: string
}
export default function Layout({style, children, className}: LayoutProps) {
  return (
    <ScrollView>
      <SafeAreaView className={`flex-1 relative bg-white min-h-screen ${className}`} style={style}>
          {children}
      </SafeAreaView>
    </ScrollView>
  );
}
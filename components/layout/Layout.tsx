import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <ScrollView>
      <SafeAreaView className={`flex-1 relative bg-white min-h-screen ${className}`}>
          {children}
      </SafeAreaView>
    </ScrollView>
  );
}
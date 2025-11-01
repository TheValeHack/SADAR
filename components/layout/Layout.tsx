import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <SafeAreaView className={`flex-1 relative bg-white ${className}`}>
        {children}
    </SafeAreaView>
  );
}
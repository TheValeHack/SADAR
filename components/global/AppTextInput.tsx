import React, { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { AppText } from "./AppText";

interface AppTextInputProps extends TextInputProps {
  label: string;
  className?: string;
}

export default function AppTextInput({ className, label, ...props }: AppTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={className}>
        <AppText className="mb-1 text-lg font-outfitMedium text-neutral-nr60">{label}</AppText>
        <TextInput
            {...props}
            className={`border ${isFocused ? "border-neutral-nr90" : "border-neutral-nr40"} text-neutral-nr90 text-lg font-outfitMedium rounded-2xl py-3 px-4`}
            placeholderTextColor="#999"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    </View>
  );
}

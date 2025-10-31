import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View } from "react-native";
import { AppText } from "./AppText";

interface AppPickerInputProps {
  label: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
  className?: string;
}

export default function AppPickerInput({
  label,
  selectedValue,
  onValueChange,
  items,
  className,
}: AppPickerInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={className}>
      <AppText className="mb-1 text-lg font-outfitMedium text-neutral-nr60">
        {label}
      </AppText>
      <View
        className={`rounded-2xl border ${
          isFocused ? "border-neutral-nr90" : "border-neutral-nr40"
        }`}
      >
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => onValueChange(itemValue)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            color: "#000000",
            marginVertical: -16,
            marginHorizontal: 6,
            paddingVertical: 12,
          }}
        >
          {items.map((item) => (
            <Picker.Item
              key={item.value}
              style={{ fontFamily: "Outfit_500Medium", fontSize: 16 }}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}
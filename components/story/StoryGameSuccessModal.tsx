import { Image } from "expo-image";
import { Modal, Pressable, TouchableOpacity, View } from "react-native";
import { AppText } from "../global/AppText";

interface StoryGameModalProps {
  visible: boolean;
  onClose: () => void;
}

export function StoryGameSuccessModal({ visible, onClose }: StoryGameModalProps) {
  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent>
      <Pressable
        onPress={onClose}
        className="flex-1 bg-black/75 justify-center relative px-8"
      >
        <Pressable
          onPress={() => {}}
          className="bg-success-scs20 rounded-xl px-8 py-10 relative items-center justify-center"
        >
          <View className="items-end absolute right-0" style={{ top: -22, marginRight: -16 }}>
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.8}
              className="bg-success-scs20 border border-neutral-nr50 w-14 h-14 rounded-full flex items-center justify-center"
            >
              <Image
                source={require("@/assets/icons/close.svg")}
                style={{ width: 20, height: 20 }}
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require("@/assets/images/bird-hero.png")}
            style={{ width: "60%", aspectRatio: 1 }}
            contentFit="contain"
          />
          <AppText className="text-3xl font-outfitExtraBold">KAMU BENAR!</AppText>
          <AppText className="text-lg font-outfitSemiBold">Kamu sangat pintar</AppText>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

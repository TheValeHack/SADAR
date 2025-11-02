import { Image } from "expo-image";
import { ReactNode } from "react";
import { Modal, Pressable, TouchableOpacity, View } from "react-native";

interface StoryGameModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode; // konten dinamis
}

export function StoryGameModal({ visible, onClose, children }: StoryGameModalProps) {
  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent>
      <Pressable
        onPress={onClose}
        className="flex-1 bg-black/75 justify-end relative"
      >
        <Pressable
          onPress={() => {}}
          className="bg-primary-pr10 rounded-t-2xl px-8 pt-12 pb-20 relative"
        >
          <View className="items-end absolute right-0 mr-6" style={{ top: -22 }}>
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.8}
              className="bg-primary-pr10 border border-neutral-nr50 w-14 h-14 rounded-full flex items-center justify-center"
            >
              <Image
                source={require("@/assets/icons/close.svg")}
                style={{ width: 20, height: 20 }}
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>

          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

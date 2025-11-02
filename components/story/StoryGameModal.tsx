import { Image } from "expo-image";
import { Modal, Pressable, TouchableOpacity, View } from "react-native";
import { AppText } from "../global/AppText";

interface StoryGameModalProps {
  visible: boolean;
  onClose: () => void;
  onStartGame: () => void;
}

export function StoryGameModal({ visible, onClose, onStartGame }: StoryGameModalProps) {
    return (
        <Modal visible={visible} transparent animationType="slide" statusBarTranslucent>
        <Pressable
            onPress={onClose}
            className="flex-1 bg-black/75 justify-end relative"
        >
            <Pressable
            onPress={() => {}}
            className="bg-primary-pr10 rounded-t-2xl px-8 pt-12 pb-20"
            >
            <View className="items-end absolute right-0 mr-6" style={{top: -22}}>
                <TouchableOpacity
                onPress={onClose}
                activeOpacity={0.8}
                className="bg-primary-pr10 border border-neutral-nr50 w-14 h-14 rounded-full flex items-center justify-center"
                >
                    <Image
                        source={require("@/assets/icons/close.svg")}
                        style={{
                            width: 20,
                            height: 20
                        }}
                        contentFit="contain"
                    />
                </TouchableOpacity>
            </View>

            {/* <AppText className="text-2xl font-outfitSemiBold text-center mb-2">
                Mari bermain terlebih dahulu!
            </AppText>

            <AppText className="text-xl text-center mb-6">
                Mari bantu kelinci mengingat apa kelebihan yang sudah disebutkan!
            </AppText>
            <AppButton onPress={onStartGame}>Mulai main game</AppButton> */}
            <AppText className="text-2xl font-outfitSemiBold text-center mb-8">
                Pilih apa yang dilakukan kelinci selanjutnya
            </AppText>
            <View className="flex flex-row justify-between w-full">
                <View className="flex flex-col rounded-lg overflow-hidden" style={{ width: "45%" }}>
                    <Image
                        source={require("@/assets/images/rabbit-happy.png")}
                        style={{
                            width: "100%",
                            aspectRatio: 1
                        }}
                        contentFit="cover"
                    />
                    <View className="p-2 bg-primary-pr30">
                        <AppText className="text-center">Berhenti bertengkar</AppText>
                    </View>
                </View>
                <View className="flex flex-col rounded-lg overflow-hidden" style={{ width: "45%" }}>
                    <Image
                        source={require("@/assets/images/rabbit-mad.png")}
                        style={{
                            width: "100%",
                            aspectRatio: 1
                        }}
                        contentFit="cover"
                    />
                    <View className="p-2 bg-primary-pr30">
                        <AppText className="text-center">Terus bertengkar</AppText>
                    </View>
                </View>
            </View>
            </Pressable>
        </Pressable>
        </Modal>
    );
    }

import AppBar from "@/components/global/AppBar";
import { AppText } from "@/components/global/AppText";
import Layout from "@/components/layout/Layout";
import { ChoiceItem } from "@/components/story/ChoiceItem";
import { GameInviteContent } from "@/components/story/GameInviteContent";
import { StoryBottomBar } from "@/components/story/StoryBottomBar";
import { StoryDialog } from "@/components/story/StoryDialog";
import { StoryGameModal } from "@/components/story/StoryGameModal";
import { StoryHeader } from "@/components/story/StoryHeader";
import { StoryParagraph } from "@/components/story/StoryParagraph";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as Speech from 'expo-speech';
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StoryVisualPage() {
    const { subtemaId } = useLocalSearchParams();
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<"invite" | "choice">("invite");
    const choices = [
            {
                image: require("@/assets/images/rabbit-happy.png"),
                label: "Berhenti bertengkar",
                checked: false
            },
            {
                image: require("@/assets/images/rabbit-mad.png"),
                label: "Terus bertengkar",
                checked: false
            },
        ]

    const handleNext = () => {
        setShowModal(true)
    };

    const handleStartGame = () => {
        setShowModal(false);
        router.push(`/kelas-cerita/${subtemaId}/game`);
    };

    const storyText = `
        Judul Cerita: Perbedaan Pertumbuhan Tumbuhan dan Hewan.
        Di sebuah hutan kecil, hiduplah dua sahabat: Pohon Cemara kecil
        bernama Si Pohon dan seekor kelinci putih bernama Si Kelinci. Setiap
        hari, Si Kelinci bermain di sekitar Si Pohon. Mereka sama-sama tumbuh,
        tapi dengan cara yang berbeda.
        Dialog Si Kelinci: Hei, Si Pohon! sambil melompat.
        Dialog Si Pohon: Hebat, Kelinci! Aku juga tumbuh.
    `.replace(/\s+/g, ' ').trim(); 

    const handleSpeak = async () => {
        const isSpeaking = await Speech.isSpeakingAsync();
        
        if (isSpeaking) {
            await Speech.stop();
        } else {
            Speech.speak(storyText, {
                language: 'id-ID',
                rate: 1.0,
            });
        }
    };

    return (
        <SafeAreaView edges={["bottom", "left", "right"]} className="flex-1 bg-white">
        <AppBar
             className="mt-16"
             title=""
             showRightButton
             blueRightButton
             rightButtonIcon={require("@/assets/icons/sound.svg")}
             onRightButtonPress={handleSpeak} 
         />
        <Layout className="pt-32 pb-16 flex-1">
            <View className="px-8 z-20">
            <StoryHeader
                title="Perbedaan Pertumbuhan Tumbuhan dan Hewan"
                image={require("@/assets/images/rabbit-with-kid.png")}
            />
            <StoryParagraph>
                Di sebuah hutan kecil, hiduplah dua sahabat: Pohon Cemara kecil
                bernama Si Pohon dan seekor kelinci putih bernama Si Kelinci. Setiap
                hari, Si Kelinci bermain di sekitar Si Pohon. Mereka sama-sama tumbuh,
                tapi dengan cara yang berbeda.
            </StoryParagraph>

            <View className="mt-8">
                <StoryDialog
                    speaker="left"
                    image={require("@/assets/images/rabbit.png")}
                    text="Hei, Si Pohon! (sambil melompat)"
                />
                <StoryDialog
                    speaker="right"
                    image={require("@/assets/images/tree.png")}
                    text="Hebat, Kelinci! Aku juga tumbuh."
                />
            </View>
            </View>
        </Layout>
        
        <StoryBottomBar
            currentPage={1}
            totalPage={2}
            onNext={handleNext}
        />
        <StoryGameModal
            visible={showModal}
            onClose={() => setShowModal(false)}
        >
            {modalType === "invite" ? (
            <GameInviteContent onStartGame={() => router.push("/kelas-cerita/1/game")} />
            ) : (
                <View>
                  <AppText className="text-2xl font-outfitSemiBold text-center mb-8">
                    Pilih apa yang dilakukan kelinci selanjutnya
                  </AppText>
            
                  <View className="flex flex-row justify-between w-full">
                    {choices.map((choice, index) => (
                      <ChoiceItem
                        key={index}
                        checked={choice.checked}
                        image={choice.image}
                        label={choice.label}
                        onSelect={() => { }}
                      />
                    ))}
                  </View>
                </View>
            )}
        </StoryGameModal>
    </SafeAreaView>
    );
}
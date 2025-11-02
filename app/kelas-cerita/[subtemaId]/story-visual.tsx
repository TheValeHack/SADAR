import Layout from "@/components/layout/Layout";
import { StoryBottomBar } from "@/components/story/StoryBottomBar";
import { StoryDialog } from "@/components/story/StoryDialog";
import { StoryGameModal } from "@/components/story/StoryGameModal";
import { StoryHeader } from "@/components/story/StoryHeader";
import { StoryParagraph } from "@/components/story/StoryParagraph";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StoryVisualage() {
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const handleNext = () => {
       setShowModal(true)
    };

    const handleStartGame = () => {
        setShowModal(false);
    };

    return (
        <SafeAreaView edges={["bottom", "left", "right"]} className="flex-1 bg-white">
        <Layout className="py-16 flex-1">
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
            onStartGame={handleStartGame}
        />
        </SafeAreaView>
    );
    }

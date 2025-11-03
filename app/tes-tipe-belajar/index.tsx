import AppButton from "@/components/global/AppButton";
import { AppText } from "@/components/global/AppText";
import Layout from "@/components/layout/Layout";
import ProgressBar from "@/components/tes-tipe-belajar/ProgressBar";
import QuestionCard from "@/components/tes-tipe-belajar/QuestionCard";
import quizData, { QuizQuestion } from '@/data/quizData';
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { View } from "react-native";

type AnswerMap = { [key: number]: string | null };

type ResultScore = {
    V: number;
    A: number;
    K: number;
    R: number;
};

export default function TesTipeBelajarPage() {
    const router = useRouter();
    const questions: QuizQuestion[] = quizData.questions;
    const totalQuestions = questions.length;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
    const [answers, setAnswers] = useState<AnswerMap>({});
    const [quizFinished, setQuizFinished] = useState(false);
    const [result, setResult] = useState<ResultScore | null>(null);

    const currentQuestion = questions[currentQuestionIndex];
    
    const formattedOptions = useMemo(() => {
        const labels = ["A", "B", "C", "D"];
        return currentQuestion 
            ? currentQuestion.options.map((opt, index) => ({
                label: labels[index], 
                text: opt.text,
                key: opt.key, 
              })) 
            : [];
    }, [currentQuestion]);

    const getOptionKeyByLabel = (label: string): string | null => {
        const option = formattedOptions.find(opt => opt.label === label);
        return option ? option.key : null;
    };

    const getLabelByOptionKey = (key: string | null): string | null => {
        if (!key) return null;
        const option = formattedOptions.find(opt => opt.key === key);
        return option ? option.label : null;
    };
    
    const selectedOptionKey = answers[currentQuestion?.id] || null;
    const selectedOptionLabel = getLabelByOptionKey(selectedOptionKey);


    const calculateResult = () => {
        const scores: ResultScore = { V: 0, A: 0, K: 0, R: 0 };

        questions.forEach(q => {
            const selectedKey = answers[q.id];
            if (selectedKey) {
                const type = q.scoring[selectedKey];
                if (type) {
                    scores[type] += 1;
                }
            }
        });

        navigateToBiodata(scores);

        // setResult(scores);
        // setQuizFinished(true);
    };

    const handleSelectOption = (label: string) => {
        const key = getOptionKeyByLabel(label);
        if (key) {
            setAnswers(prev => ({
                ...prev,
                [currentQuestion.id]: key,
            }));
        }
    };

    const handleNext = () => {
        if (!selectedOptionKey) {
            return;
        }

        if (currentQuestionIndex === totalQuestions - 1) {
            calculateResult();
        } else {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };
    
    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const [dominantType, setDominantType] = useState<string | null>(null);

    const navigateToBiodata = useCallback((calculatedResult: ResultScore) => {
        const finalResult = { V: calculatedResult.V, A: calculatedResult.A, K: calculatedResult.K };
        
        const [calculatedDominantType] = Object.entries(finalResult).reduce(
            (max, entry) => (entry[1] > max[1] ? entry : max),
            ['', -1]
        );

        const typeDisplay = 
            calculatedDominantType === 'V' ? 'Visual' : 
            calculatedDominantType === 'A' ? 'Audio' : 
            calculatedDominantType === 'K' ? 'Kinestetik' : 'Tidak Ditemukan';

        router.replace({
            pathname: '/biodata', // PASTIKAN PATH INI BENAR!
            params: {
                resultType: typeDisplay,
            },
        });
    }, [router]);
    const currentProgress = (currentQuestionIndex + 1) / totalQuestions;
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
    const isFirstQuestion = currentQuestionIndex === 0;

    return (
        <Layout className="py-16">
            <Image
                source={require("@/assets/images/cloud.png")}
                style={{
                    width: "100%",
                    height: 150,
                    position: "absolute",
                    top: 0,
                }}
                contentFit="cover"
            />

            <View className="px-8 z-20">
                <AppText className="text-3xl font-outfitSemiBold text-center">
                    Tes Tipe Belajar
                </AppText>
                <AppText className="mt-1 text-base text-center">
                    Pertanyaan {currentQuestionIndex + 1} dari {totalQuestions}
                </AppText>

                <View className="mt-8">
                    <ProgressBar
                        progress={currentProgress}
                        label={`${currentQuestionIndex + 1}/${totalQuestions}`}
                    />
                </View>

                {currentQuestion && (
                    <QuestionCard
                        question={currentQuestion.text}
                        options={formattedOptions.map(opt => ({
                            label: opt.label,
                            text: opt.text,
                        }))}
                        selectedOption={selectedOptionLabel}
                        onSelect={handleSelectOption}
                    />
                )}
                
                <View className="flex-row justify-between mt-8">
                    <View className="flex-1 mr-2">
                        <AppButton 
                            onPress={handlePrev}
                            secondary={isFirstQuestion ? true : false}
                            disabled={isFirstQuestion}
                            style={{ opacity: isFirstQuestion ? 0.3 : 1 }}
                        >
                            Sebelumnya
                        </AppButton>
                    </View>
                    
                    <View className="flex-1 ml-2">
                        <AppButton 
                            onPress={handleNext}
                            disabled={!selectedOptionKey} 
                            style={{ opacity: selectedOptionKey ? 1 : 0.5 }} 
                        >
                            {isLastQuestion ? 'Lihat Hasil' : 'Selanjutnya'}
                        </AppButton>
                    </View>
                </View>
            </View>

            <Image
                source={require("@/assets/images/grass.png")}
                style={{
                    width: "100%",
                    height: 150,
                    position: "absolute",
                    bottom: 0,
                }}
                contentFit="cover"
            />
        </Layout>
    );
}
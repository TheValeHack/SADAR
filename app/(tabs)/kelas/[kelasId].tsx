import { KelasHeader } from "@/components/kelas/KelasHeader";
import { SubTemaCard } from "@/components/kelas/SubTemaCard";
import Layout from "@/components/layout/Layout";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";

export default function KelasDetailPage() {
    const router = useRouter();
    const subTemas = [
        {
        id: 1,
        subTema: "Sub Tema 1",
        title: "Perbedaan Pertumbuhan Tumbuhan dan Hewan",
        date: "13/09/25",
        duration: "10 menit",
        },
        {
        id: 2,
        subTema: "Sub Tema 2",
        title: "Siklus Hidup Makhluk Hidup",
        date: "15/09/25",
        duration: "12 menit",
        },
    ];

    const handleSubTemaPress = (id: number) => {
        router.push({
        pathname: "/subtema/[subtemaId]",
        params: { subtemaId: String(id) },
        });
    };

    return (
        <Layout className="py-16">
        <Image
            source={require("@/assets/images/kelas-detail-banner-bg.png")}
            style={{
            width: "100%",
            height: 310,
            position: "absolute",
            top: 0,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            }}
            contentFit="cover"
        />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="h-[240px]" />

            <KelasHeader
            tema="Tema 1"
            judul="Perkembangan Makhluk Hidup"
            subTemaCount={subTemas.length}
            />

            <View className="mt-10 px-8">
            {subTemas.map((item) => (
                <SubTemaCard
                key={item.id}
                subTema={item.subTema}
                title={item.title}
                date={item.date}
                duration={item.duration}
                onPress={() => handleSubTemaPress(item.id)}
                />
            ))}
            </View>
        </ScrollView>

        {/* Bottom Grass */}
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

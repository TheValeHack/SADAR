import AppBar from "@/components/global/AppBar";
import AppButton from "@/components/global/AppButton";
import Layout from "@/components/layout/Layout";
import { ChoiceItem } from "@/components/story/ChoiceItem";
import { StoryHeader } from "@/components/story/StoryHeader";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StoryKinestetikPage() {
  const { subtemaId } = useLocalSearchParams();
  const [showCamera, setShowCamera] = useState(false);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(5);

  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);

  const choices = [
    {
      image: require("@/assets/images/rabbit-jump.png"),
      label: "Bisa melompat",
      checked: true,
    },
    {
      image: require("@/assets/images/rabbit-sing.png"),
      label: "Bisa bernyanyi",
      checked: false,
    },
    {
      image: require("@/assets/images/rabbit-fly.png"),
      label: "Bisa terbang",
      checked: false,
    },
  ];

  useEffect(() => {
    if (showCamera && countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (showCamera && countdown === 0) {
      takePicture();
    }
  }, [showCamera, countdown]);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      setShowCamera(false);
      setCountdown(5);
      console.log("Foto disimpan di:", photo.uri);
    }
  };

  const handleFinishSelecting = async () => {
    if (!permission) {
      await requestPermission();
      return;
    }
    if (!permission.granted) {
      const newPerm = await requestPermission();
      if (!newPerm.granted) {
        alert("Izin kamera dibutuhkan untuk melanjutkan!");
        return;
      }
    }
    setShowCamera(true);
  };

  if (showCamera) {
    return (
      <View className="flex-1 bg-black">
        <CameraView
          ref={cameraRef}
          style={{ flex: 1 }}
          facing={"front"}
        />
        <Text
          style={{
            position: "absolute",
            bottom: 80,
            alignSelf: "center",
            fontSize: 48,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {countdown}
        </Text>
      </View>
    );
  }

  if (photoUri) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <Text className="text-xl font-semibold mb-4">
          Foto berhasil diambil 🎉
        </Text>
        <Image
          source={{ uri: photoUri }}
          style={{ width: 250, height: 350, borderRadius: 16 }}
        />
        <AppButton className="mt-8" onPress={() => setPhotoUri(null)}>
          Ambil Ulang
        </AppButton>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} className="flex-1 bg-white">
      <AppBar className="mt-16" title="" />
      <Layout className="pt-28 pb-16 flex-1">
        <View className="px-8 z-20">
          <StoryHeader
            title="Bantu kelinci mengingat apa kelebihan yang sudah disebutkan"
            desc="Pilih gambar yang bisa dilakukan kelinci dan ikutilah gerakannya"
            image={null}
            hideImage
          />
          <View className="mt-8 flex flex-row flex-wrap justify-center items-center gap-8">
            {choices.map((item, index) => (
              <ChoiceItem
                key={index}
                checked={item.checked}
                label={item.label}
                image={item.image}
                onSelect={() => {}}
              />
            ))}
          </View>
        </View>
      </Layout>

      <View className="px-8 mb-8">
        <AppButton onPress={handleFinishSelecting}>
          Selesai memilih gambar
        </AppButton>
      </View>
    </SafeAreaView>
  );
}

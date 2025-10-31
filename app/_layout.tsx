import {
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  useFonts
} from "@expo-google-fonts/outfit";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import "./../global.css";


SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded, error] = useFonts({
    outfitRegular: Outfit_400Regular,
    outfitMedium: Outfit_500Medium,
    outfitSemiBold: Outfit_600SemiBold,
    outfitBold: Outfit_700Bold,
    outfitExtraBold: Outfit_800ExtraBold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}

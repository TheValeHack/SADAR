import { View } from "react-native";
import AppButton from "../global/AppButton";
import { AppText } from "../global/AppText";

interface GameInviteContentProps {
  onStartGame: () => void;
}

export function GameInviteContent({ onStartGame }: GameInviteContentProps) {
  return (
    <View>
      <AppText className="text-2xl font-outfitSemiBold text-center mb-2">
        Mari bermain terlebih dahulu!
      </AppText>
      <AppText className="text-xl text-center mb-6">
        Mari bantu kelinci mengingat apa kelebihan yang sudah disebutkan!
      </AppText>
      <AppButton onPress={onStartGame}>Mulai main game</AppButton>
    </View>
  );
}

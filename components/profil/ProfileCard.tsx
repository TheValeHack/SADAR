import { Image } from "expo-image";
import { View } from "react-native";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

interface ProfileCardProps {
  name: string;
  grade: string;
  avatarSource: any;
}

export default function ProfileCard({ name, grade, avatarSource }: ProfileCardProps) {
  return (
    <View className="w-full min-h-52 relative flex flex-col items-center justify-center mt-32">
      <Image
        source={require("@/assets/images/papan.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        contentFit="cover"
      />

      <ProfileAvatar imageSource={avatarSource} />
      <ProfileInfo name={name} grade={grade} />
    </View>
  );
}

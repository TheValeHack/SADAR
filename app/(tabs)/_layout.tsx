import TabBar from '@/components/global/TabBar';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={props => <TabBar {...props} />}>
        <Tabs.Screen name="index" options={{ title: "Beranda"}} />
        <Tabs.Screen name="ceritaku" options={{ title: "Ceritaku"}} />
        <Tabs.Screen name="notifikasi" options={{ title: "Notifikasi"}} />
        <Tabs.Screen name="kelas" options={{ title: "Kelas"}} />
        <Tabs.Screen name="profil" options={{ title: "Profil"}} />
    </Tabs>
  );
}

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable, Text } from '@react-navigation/elements';
import { useLinkBuilder } from '@react-navigation/native';
import { Image } from 'expo-image';
import { View } from 'react-native';

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  const icons: { [key: string]: any } = {
    index: require('@/assets/icons/home.svg'),
    ceritaku: require('@/assets/icons/book-open.svg'),
    notifikasi: require('@/assets/icons/bell.svg'),
    kelas: require('@/assets/icons/graduation-hat.svg'),
    profil: require('@/assets/icons/user-circle.svg'),
  };

  return (
    <View className="flex-row h-24 border border-t border-neutral-nr30 rounded-t-lg bg-neutral-nr00">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            className='flex-1 items-center justify-center'
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View
                className={`py-2 flex-col gap-1 items-center justify-center ${
                    isFocused ? 'bg-primary-pr20 rounded-2xl' : 'bg-transparent'
                }`}
                >
                <Image
                    source={icons[route.name]}
                    style={{ width: 20, height: 20, tintColor: isFocused ? '#2E4A56' : '#808080' }}
                    contentFit="contain"
                />
                <Text
                    style={{
                    color: isFocused ? '#2E4A56' : '#808080',
                    fontFamily: 'outfitMedium',
                    fontSize: 14,
                    paddingHorizontal: 8,
                    }}
                >
                    {label}
                </Text>
            </View>
          </PlatformPressable>
        );
      })}
    </View>
  );
}
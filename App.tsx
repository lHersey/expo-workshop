import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import Navigator from 'shared/navigator';
import Providers from 'shared/providers';

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_100: Inter_100Thin,
    Inter_200: Inter_200ExtraLight,
    Inter_300: Inter_300Light,
    Inter_400: Inter_400Regular,
    Inter_500: Inter_500Medium,
    Inter_600: Inter_600SemiBold,
    Inter_700: Inter_700Bold,
    Inter_800: Inter_800ExtraBold,
    Inter_900: Inter_900Black,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Providers>
      <StatusBar style="auto" />
      <Navigator />
    </Providers>
  );
};

export default App;

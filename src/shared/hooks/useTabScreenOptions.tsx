import { Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { useMemo } from 'react';
import { IoniconsName } from 'shared/types/icons';

type TabScreenConfig = {
  icon: IoniconsName;
};

const useTabScreenOptions = (config: TabScreenConfig) => {
  const { icon } = config;

  return useMemo<BottomTabNavigationOptions>(() => {
    return {
      tabBarIcon: ({ color, focused }) => (
        <Ionicons name={focused ? icon : (`${icon}-outline` as IoniconsName)} color={color} size={26} />
      ),
    };
  }, [icon]);
};

export { useTabScreenOptions };

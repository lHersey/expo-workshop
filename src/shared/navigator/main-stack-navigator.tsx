import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import { Screens, ScreensTitles } from 'shared/constants/screens';
import { useTheme } from 'styled-components/native';

import MainTabNavigator from './main-tab-navigator';

const MainStack = createNativeStackNavigator();

const MainStackNavigator: FC = () => {
  const theme = useTheme();

  return (
    <MainStack.Navigator initialRouteName={Screens.DASHBOARD_TAB}>
      <MainStack.Screen
        options={({ route }) => ({
          headerTitle: ScreensTitles[getFocusedRouteNameFromRoute(route) ?? Screens.HOME],
          headerTitleAlign: 'left',
          headerTitleStyle: { color: theme.PRIMARY_TEXT_COLOR_COLOR, fontFamily: 'Inter_700' },
          headerStyle: { backgroundColor: theme.SECONDARY_BACKGROUND_COLOR, elevation: 0, borderBottomWidth: 0 },
        })}
        name={Screens.DASHBOARD_TAB}
        component={MainTabNavigator}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

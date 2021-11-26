import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';
import CreateTransaction from 'screens/create-transaction';
import DashboardScreen from 'screens/dashboard';
import { Screens } from 'shared/constants/screens';
import { useTabScreenOptions } from 'shared/hooks';
import { useTheme } from 'styled-components/native';

const MainTab = createBottomTabNavigator();

const MainTabNavigator: FC = () => {
  const theme = useTheme();
  const dashboardOptions = useTabScreenOptions({ icon: 'home' });
  const createTransactionOptions = useTabScreenOptions({ icon: 'receipt' });

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.PRIMARY_COLOR,
        tabBarInactiveTintColor: theme.BORDER_COLOR,
      }}
    >
      <MainTab.Screen name={Screens.DASHBOARD_TAB} component={DashboardScreen} options={dashboardOptions} />
      <MainTab.Screen
        name={Screens.CREATE_TRANSACTION_TAB}
        component={CreateTransaction}
        options={createTransactionOptions}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;

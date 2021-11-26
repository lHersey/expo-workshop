import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';

import MainTabNavigator from './main-tab-navigator';

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;

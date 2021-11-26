import { FC } from 'react';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'shared/store';
import { ThemeProvider } from 'styled-components/native';

import { THEME } from '../../styles/theme';

const Providers: FC = props => {
  const { children } = props;

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={THEME}>
          <SafeAreaProvider>
            <FlashMessage position="center" />
            {children}
          </SafeAreaProvider>
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default Providers;

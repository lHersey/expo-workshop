import { configureStore } from '@reduxjs/toolkit';
import { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { RootState } from 'shared/store/hooks';
import rootReducer from 'shared/store/reducers';
import { ThemeProvider } from 'styled-components/native';

import { THEME } from '../../styles/theme';

type Props = {
  state?: Partial<RootState>;
};

const TestProviders: FC<Props> = props => {
  const { children, state } = props;

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: state,
    devTools: false,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  });

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={THEME}>
        <SafeAreaProvider
          initialMetrics={{
            frame: { x: 0, y: 0, width: 0, height: 0 },
            insets: { top: 0, left: 0, right: 0, bottom: 0 },
          }}
        >
          {children}
        </SafeAreaProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default TestProviders;

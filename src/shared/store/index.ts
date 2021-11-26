import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import rootReducer from './reducers';

const persistedReducer = persistReducer(
  {
    key: 'PARKING',
    storage: AsyncStorage,
  },
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  devTools: __DEV__,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export { persistor };
export default store;

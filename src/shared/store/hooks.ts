import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';

import rootReducer from './reducers';

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<Promise<ReturnType>, RootState, null, Action<string>>;
export type ReduxDispatch = ThunkDispatch<RootState, null, Action<string>>;

export const useThunkDispatch = () => useDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import Transaction from 'shared/models/transaction';
import { RootState } from 'shared/store/hooks';

export const transactionsAdapter = createEntityAdapter<Transaction>({
  sortComparer: (v1, v2) => (v1.date > v2.date ? 1 : -1),
});
export const transactionSelectors = transactionsAdapter.getSelectors<RootState>(s => s.transaction);

const { reducer, actions } = createSlice({
  name: 'transactions',
  initialState: transactionsAdapter.getInitialState(),
  reducers: {
    transactionAdded(state, action: PayloadAction<Transaction>) {
      transactionsAdapter.addOne(state, action.payload);
    },
  },
});

export const { transactionAdded } = actions;
export default reducer;

import { createSelector } from '@reduxjs/toolkit';
import { useMemo } from 'react';

import { RootState, useSelector } from '../hooks';
import { transactionSelectors } from '../reducers/transaction/reducer';

const selectTransactionId = (_: RootState, transactionId: string) => transactionId;

const makeTransactionSelector = () =>
  createSelector(
    [transactionSelectors.selectEntities, selectTransactionId],
    (transactions, transactionId) => transactions[transactionId],
  );

const useTransactionSelector = (transactionId: string) => {
  const transactionSelector = useMemo(makeTransactionSelector, []);

  return useSelector(state => transactionSelector(state, transactionId));
};

export default useTransactionSelector;

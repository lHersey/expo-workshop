import { createSelector } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { BalanceType } from 'shared/enum';

import { useSelector } from '../hooks';
import { categoriesSelector } from '../reducers/category/reducer';
import { transactionSelectors } from '../reducers/transaction/reducer';

const makeIncomeBalanceSelector = () =>
  createSelector([transactionSelectors.selectAll, categoriesSelector.selectEntities], (transactions, categories) =>
    transactions.reduce((balance, transaction) => {
      if (categories[transaction.category]?.type === BalanceType.INCOME) return balance + transaction.ammount;
      return balance;
    }, 0),
  );

const makeExpensesBalanceSelector = () =>
  createSelector([transactionSelectors.selectAll, categoriesSelector.selectEntities], (transactions, categories) =>
    transactions.reduce((balance, transaction) => {
      if (categories[transaction.category]?.type === BalanceType.EXPENSE) return balance + transaction.ammount;
      return balance;
    }, 0),
  );

export const useIncomeBalanceSelector = () => {
  const incomeBalanceSelector = useMemo(makeIncomeBalanceSelector, []);
  return useSelector(incomeBalanceSelector);
};

export const useExpensesBalanceSelector = () => {
  const expensesBalanceSelector = useMemo(makeExpensesBalanceSelector, []);
  return useSelector(expensesBalanceSelector);
};

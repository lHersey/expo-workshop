import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BalanceType } from 'shared/enum';
import Category from 'shared/models/category';
import { RootState } from 'shared/store/hooks';
import { generate } from 'shortid';

export const categoriesAdapter = createEntityAdapter<Category>();
export const categoriesSelector = categoriesAdapter.getSelectors<RootState>(s => s.category);

const initialState = categoriesAdapter.addMany(categoriesAdapter.getInitialState(), [
  new Category(generate(), 'Food', '#ffb722', BalanceType.EXPENSE, 'fast-food'),
  new Category(generate(), 'Entertainment', '#7133e7', BalanceType.EXPENSE, 'game-controller'),
  new Category(generate(), 'Travel', '#d92727', BalanceType.EXPENSE, 'airplane'),
  new Category(generate(), 'Shopping', '#0eb397', BalanceType.EXPENSE, 'card'),
  new Category(generate(), 'Gym', '#cc33b7', BalanceType.EXPENSE, 'barbell'),
  new Category(generate(), 'Health', '#7133e7', BalanceType.EXPENSE, 'bandage'),
  new Category(generate(), 'Services', '#0f6a7f', BalanceType.EXPENSE, 'receipt'),
  new Category(generate(), 'Pets', '#d771e0', BalanceType.EXPENSE, 'paw'),
  new Category(generate(), 'Salary', '#36b1e7', BalanceType.INCOME, 'cash'),
]);

const { reducer, actions } = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoryAdded: (state, action: PayloadAction<Category>) => {
      categoriesAdapter.addOne(state, action.payload);
    },
  },
});

export const { categoryAdded } = actions;
export default reducer;

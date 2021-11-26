import { EntityState } from '@reduxjs/toolkit';
import { BalanceType } from 'shared/enum';
import Category from 'shared/models/category';

export const mockCategory = (category: Partial<Category> = {}): Category => {
  return {
    ...new Category('1', 'CategoryName', '#d3fae2', BalanceType.INCOME, 'add-outline'),
    ...category,
  };
};

export const mockCategoryEntity = (...categories: Category[]) => {
  return categories.reduce(
    (entityState, category) => {
      entityState.entities[category.id] = category;
      entityState.ids.push(category.id);

      return entityState;
    },
    { entities: {}, ids: [] } as EntityState<Category>,
  );
};

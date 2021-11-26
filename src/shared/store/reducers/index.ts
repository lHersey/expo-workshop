import { combineReducers } from '@reduxjs/toolkit';

import categoryReducer from './category/reducer';
import transactionReducer from './transaction/reducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  transaction: transactionReducer,
});

export default rootReducer;

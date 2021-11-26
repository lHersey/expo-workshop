import { BalanceType } from 'shared/enum';
import { IoniconsName } from 'shared/types/icons';

import Transaction from './transaction';

class Category {
  id: string;
  name: string;
  color: string;
  transactions: Transaction[];
  type: BalanceType;
  icon: IoniconsName;

  constructor(id: string, name: string, color: string, type: BalanceType, icon: IoniconsName) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.type = type;
    this.transactions = [];
    this.icon = icon;
  }
}

export default Category;

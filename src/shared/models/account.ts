class Account {
  id: string;
  name: string;
  description?: string;
  balance: number;
  currency: string;

  constructor(id: string, name: string, balance: number, currency: string, description?: string) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.currency = currency;
    this.description = description;
  }
}

export default Account;

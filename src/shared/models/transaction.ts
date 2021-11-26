class Transaction {
  id: string;
  date: string;
  ammount: number;
  note: string;
  category: string;

  constructor(id: string, date: string, ammount: number, note: string, category: string) {
    this.id = id;
    this.date = date;
    this.ammount = ammount;
    this.note = note;
    this.category = category;
  }
}

export default Transaction;

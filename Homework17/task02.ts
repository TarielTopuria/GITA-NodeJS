class BankAccount {
  private readonly accountNumber: string;
  private balance: number;
  private readonly transactionHistory: string[];

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.transactionHistory = [];
  }

  public getAccountInfo(): string {
    return `Account Number: ${this.accountNumber}, Balance: ${this.balance.toFixed(2)}`;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }
    this.balance += amount;
    this.recordTransaction(`Deposited ${amount.toFixed(2)}. New Balance: ${this.balance.toFixed(2)}`);
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient balance.");
    }
    this.balance -= amount;
    this.recordTransaction(`Withdrew ${amount.toFixed(2)}. New Balance: ${this.balance.toFixed(2)}`);
  }

  public transferFunds(amount: number, recipient: BankAccount): void {
    if (amount <= 0) {
      throw new Error("Transfer amount must be greater than zero.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient balance for transfer.");
    }
    this.withdraw(amount);
    recipient.deposit(amount);
    this.recordTransaction(`Transferred ${amount.toFixed(2)} to Account: ${recipient.getAccountNumber()}`);
    recipient.recordTransaction(`Received ${amount.toFixed(2)} from Account: ${this.getAccountNumber()}`);
  }

  public getTransactionHistory(): string[] {
    return this.transactionHistory;
  }

  private recordTransaction(description: string): void {
    this.transactionHistory.push(description);
  }

  public getAccountNumber(): string {
    return this.accountNumber;
  }
}

const account1 = new BankAccount("123456789", 1000);
const account2 = new BankAccount("987654321", 500);

account1.deposit(200);
account1.withdraw(150);
account1.transferFunds(300, account2);

account2.deposit(100);
account2.withdraw(50);

console.log(account1.getAccountInfo());
console.log(account2.getAccountInfo());

console.log("Transaction History for Account 1:", account1.getTransactionHistory());
console.log("Transaction History for Account 2:", account2.getTransactionHistory());

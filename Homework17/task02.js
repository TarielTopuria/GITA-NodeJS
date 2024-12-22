var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.transactionHistory = [];
    }
    BankAccount.prototype.getAccountInfo = function () {
        return "Account Number: ".concat(this.accountNumber, ", Balance: ").concat(this.balance.toFixed(2));
    };
    BankAccount.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        this.balance += amount;
        this.recordTransaction("Deposited ".concat(amount.toFixed(2), ". New Balance: ").concat(this.balance.toFixed(2)));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient balance.");
        }
        this.balance -= amount;
        this.recordTransaction("Withdrew ".concat(amount.toFixed(2), ". New Balance: ").concat(this.balance.toFixed(2)));
    };
    BankAccount.prototype.transferFunds = function (amount, recipient) {
        if (amount <= 0) {
            throw new Error("Transfer amount must be greater than zero.");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient balance for transfer.");
        }
        this.withdraw(amount);
        recipient.deposit(amount);
        this.recordTransaction("Transferred ".concat(amount.toFixed(2), " to Account: ").concat(recipient.getAccountNumber()));
        recipient.recordTransaction("Received ".concat(amount.toFixed(2), " from Account: ").concat(this.getAccountNumber()));
    };
    BankAccount.prototype.getTransactionHistory = function () {
        return this.transactionHistory;
    };
    BankAccount.prototype.recordTransaction = function (description) {
        this.transactionHistory.push(description);
    };
    BankAccount.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    return BankAccount;
}());
var account1 = new BankAccount("123456789", 1000);
var account2 = new BankAccount("987654321", 500);
account1.deposit(200);
account1.withdraw(150);
account1.transferFunds(300, account2);
account2.deposit(100);
account2.withdraw(50);
console.log(account1.getAccountInfo());
console.log(account2.getAccountInfo());
console.log("Transaction History for Account 1:", account1.getTransactionHistory());
console.log("Transaction History for Account 2:", account2.getTransactionHistory());

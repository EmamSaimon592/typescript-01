class BankAccount {
  private _accountHolder: string;
  private _balance: number;
  private _accountNumber: string;

  constructor(accountHolder: string, accountNumber: string, initialBalance: number = 0) {
     this._accountHolder = accountHolder;
     this._accountNumber = accountNumber;
     this._balance = initialBalance;
  }
   
  // Getter for account holder name
  get accountHolder(): string {
    return this._accountHolder;
  }

  // Setter for account holder name (with validation)
  set accountHolder(newName: string) {
    if (newName.trim().length > 0) {
      this._accountHolder = newName;
    } else {
      console.log(' Account holder name cannot be empty.');
    }
  }

  // Getter for balance (with formatted string)
  get balance(): string {
    return ` Current Balance: $${this._balance.toFixed(2)}`;
  }

  // Setter for balance (only positive values allowed)
  set balance(amount: number) {
    if (amount >= 0) {
      this._balance = amount;
    } else {
      console.log(' Balance cannot be negative.');
    }
  }

  // Getter for account number
  get accountNumber(): string {
    return ` Account No: ${this._accountNumber}`;
  }

  // Deposit money
  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(` Deposited $${amount}`);
    } else {
      console.log(' Invalid deposit amount.');
    }
  }

  // Withdraw money
  withdraw(amount: number): void {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(` Withdrawn $${amount}`);
    } else {
      console.log(
        ' Withdrawal failed. Insufficient balance or invalid amount.'
      );
    }
  }

  // Show full account summary
  showSummary(): void {
    console.log('\n Account Summary:');
    console.log(this.accountNumber);
    console.log(`👤 Account Holder: ${this.accountHolder}`);
    console.log(this.balance);
  }
}
const myAccount = new BankAccount('Imam Hossain', 'ACC123456', 500);

// Summary
myAccount.showSummary();

// Deposit some money
myAccount.deposit(300);

// Withdraw some money
myAccount.withdraw(200);

// Check current balance using getter
console.log(myAccount.balance);

// Try to set a new name
myAccount.accountHolder = 'Saimon';

// Try to set an invalid name
myAccount.accountHolder = '';

// Set a new balance using setter
myAccount.balance = 1000;

// Try to set negative balance
myAccount.balance = -500;

// Show final summary
myAccount.showSummary();

/*
 Account Summary:
 Account No: ACC123456
 Account Holder: Imam Hossain
 Current Balance: $500.00

 Deposited $300
 Withdrawn $200
 Current Balance: $600.00
 Account holder name cannot be empty.
 Balance cannot be negative.

 Account Summary:
 Account No: ACC123456
 Account Holder: Saimon
 Current Balance: $1000.00
 
*/
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
    this.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("deposited amount", this.balance);
        } else {
            console.log("Invalid amount for deposit");
        }

    };
    this.withdraw = function (amount) {
        if (amount > 0) {
            this.balance = this.balance - amount;
            console.log("withdraw amount", this.balance);
        } else {
            console.log("Invalid amount for deposit");
        }
    };
    this.checkBalance = function () {
        console.log(`Account ${this.accountNumber} balance ${this.balance}.`);
    };
    this.isActive = function () {
        if (this.active) {
            return this.active;
        } else {
            console.log("Account not active");
        }
    };
}

var acc1 = new BankAccount("123456789", "prasanth", "savings", 10000);
console.log(acc1);
var acc2 = new BankAccount("987654321", "vamshi", "current", 20000)
// console.log(acc2);
// acc1.deposit(500);
// acc1.withdraw(500);
// acc1.checkBalance();
// acc1.isActive();

// acc2.deposit(500);
// acc2.withdraw(500);
// acc2.checkBalance();
// acc2.isActive();



function getTotalbalance(allAccounts) {
    let total = 0;
    allAccounts.forEach((account) => {
        if (account.isActive()) {
            total += account.balance;
        }
    });
    return total;
}

const allAccounts = [];
allAccounts.push(acc1, acc2);
console.log("Total Balance", getTotalbalance(allAccounts));
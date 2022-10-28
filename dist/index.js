"use strict";
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount");
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(0, 'Awais', 0);
account.deposit(100);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map
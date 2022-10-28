"use strict";
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(0, "Awais", 0);
account.deposit(100);
console.log(account.balance);
//# sourceMappingURL=index.js.map
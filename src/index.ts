class Account {
    nickname?: string;

    constructor(
        public readonly id: number,
        public name: string,
        private _balance: number
    ) {}

    deposit(amount: number): void {
        if (amount <= 0) throw new Error("Invalid Amount");
        this._balance += amount;
    }

    getBalance(): number {
        return this._balance;
    }
}

let account = new Account(0, "Awais", 0);
account.deposit(100);
console.log(account instanceof Account);
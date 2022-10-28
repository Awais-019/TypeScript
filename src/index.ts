class Account {
    readonly id: number;
    name: string;
    balance: number;
    nickname?: string;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) throw new Error("Invalid Amount");
        this.balance += amount;
    }
}

let account = new Account(0, 'Awais', 0);
account.deposit(100);
console.log(account instanceof Account);
class Account {
    id: number;
    name: string;
    balance: number;

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

interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloundCalender extends Calender {
    sync(): void;
}

class GoogleCalnder implements Calender {
    constructor(public name: string) {}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}

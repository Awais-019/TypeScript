type Student = {
    readonly id: number;
    name: string;
    retire: (data: Date) => void;
};

let student: Student = {
    id: 19,
    name: "Awais",
    retire: (date: Date) => {
        console.log(date);
    },
};

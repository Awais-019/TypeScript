let student: {
    readonly id: number;
    name: string;
    retire: (data: Date) => void;
} = {
    id: 19,
    name: "Awais",
    retire: (date: Date) => {
        console.log(date);
    },
};

class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    walk(): void {
        console.log("Walking...");
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log("Taking test...");
    }
}

class Teacher extends Person {
    override get fullName() {
        return "Professor " + super.fullName;
    }
}

printNames([
    new Student(1, "Muhammad", "Awais"),
    new Teacher("Mosh", "Hamedani"),
]);

function printNames(people: Person[]) {
    for (let person of people) console.log(person.fullName);
}

function greet(name: string | null) {
    if (name === null) {
        throw new Error("Name is required");
    }
    return `Hello ${name}`;
}

greet("Awais");

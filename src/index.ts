interface Result<T> {
    data: T | null;
    error: string | null;
}

function fetch<T>(): Result<T> {
    return { data: null, error: null };
}

interface User {
    name: string;
}

interface Product {
    title: string;
}

let result = fetch<User>();
function reject(mesage: string): never {
    throw new Error(mesage);
}

function processEvents(): never {
    while (true) {
        // Read a message from a queue
    }
}

processEvents();
console.log("Hello World");
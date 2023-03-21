
// ein Number Array
let nums: number[] = [1, 2, 3]
// Dieser Array kann nur Zahlen enthalten ansonsten Type Error

// ein Union-Type Array
const anArry: (number | string)[] = [1, "eins"]
// Dieser Array kann nur Zahlen und Strings enthalen



// ein anderer Weg (Generics)
let numbers: Array<number> = [1, 2, 3]

// man kann in den <> jeden typ einfügen sogar einen weiteren Array

// das "T" ist ein Platzhalter und steht für jeden typen

let strs: Array<string> = ["eins", "zwei"];
let arrs: Array<Array<number>> = [
    [1, 2],
    [9, 8],
];

const first = <T>(elements: Array<T>): T => {
    return elements[0];
}


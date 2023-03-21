"use strict";
// ein Number Array
let nums = [1, 2, 3];
// Dieser Array kann nur Zahlen enthalten ansonsten Type Error
// ein Union-Type Array
const anArry = [1, "eins"];
// Dieser Array kann nur Zahlen und Strings enthalen
// ein anderer Weg (Generics)
let numbers = [1, 2, 3];
// man kann in den <> jeden typ einfügen sogar einen weiteren Array
// das "T" ist ein Platzhalter und steht für jeden typen
let strs = ["eins", "zwei"];
let arrs = [
    [1, 2],
    [9, 8],
];
const first = (elements) => {
    return elements[0];
};

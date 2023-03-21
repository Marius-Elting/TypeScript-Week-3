// ÜBUNG 1

const sum = (userInput: number[]) => {
    let result: number = 0
    for (let number of userInput) {
        result += Number(number)
    }
    return result
}

sum([1, 3, 9])
sum([])


// ÜBUNG 2

const sumString = (userInput: (number | string)[]) => {
    let result: string = ""
    for (let number of userInput) {
        result += number
    }
    return result
}

sumString([1, "test", 10])


// ÜBUNG 3

const genericLenght = <T>(userInput: Array<T>) => {
    return userInput.length
}


genericLenght([1, 2, 3, 5, 6,])
genericLenght([])

// ÜBUNG 4

const genericLast = <T>(userInput: Array<T>) => {
    //  return userInput.at(-1) <- das wirft einen Error, da zu neu (ES2022)
    return userInput[userInput.length - 1]
}


genericLast([1, 2, 3, 5, 6])
genericLast([])

// ÜBUNG 5

const genericLastString = <T>(userInput: Array<T> | T) => {
    if (!Array.isArray(userInput)) {
        return userInput
    } else {
        return userInput[userInput.length - 1]
    }
}


genericLastString([1, 2, 3, 5, 6])
genericLastString(1)


// ÜBUNG 6

const genericRange = <T>(array: Array<T>, start: number, end: number) => {
    return array.slice(start, end + 1)
}

genericRange([1, 2, 3, 4, 5, 6], 0, 2)
genericRange([1, 2, 3, 4, 5, 6], 0, 0)



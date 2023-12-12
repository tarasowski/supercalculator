export const add = (a, b) => {
    const result = a + b
    return result
} 

export const subtract = (a, b) => {
    const result = a - b
    return result
}

export const multiply = (a, b) => {
    const result = a * b
    return result

}

export const divide = (a, b) => {
    if (b === 0) {
        return "Division through zero is not possible! You dumb ass."
    } else {
        const result = a / b
        return result
    }
}

export const toPower = (a, b) => {
    const result = a ** b
    return result
}
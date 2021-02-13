export const divide = (a, b) => a / b

export const sum = (...args) => new Array.from(args).reduce((acc, item) => acc + item)

export const multiply = (...args) => new Array.from(args).reduce((acc, item) => acc * item)

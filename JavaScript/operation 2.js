function calculate(operations) {
    let result = operations[0];

    for (let i = 1; i < operations.length; i += 2) {
        const operator = operations[i];
        const nextNumber = operations[i + 1];
        result = operate(result, nextNumber, operator);
    }

    return result;
}
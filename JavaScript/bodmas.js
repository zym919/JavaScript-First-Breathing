function bodmasCalculate(operations) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    const values = [];
    const ops = [];

    for (let i = 0; i < operations.length; i++) {
        if (typeof operations[i] === 'number') {
            values.push(operations[i]);
        } else {
            while (
                ops.length &&
                precedence[ops[ops.length - 1]] >= precedence[operations[i]]
            ) {
                const op = ops.pop();
                const right = values.pop();
                const left = values.pop();
                values.push(operate(left, right, op));
            }
            ops.push(operations[i]);
        }
    }

    while (ops.length) {
        const op = ops.pop();
        const right = values.pop();
        const left = values.pop();
        values.push(operate(left, right, op));
    }

    return values[0];
}

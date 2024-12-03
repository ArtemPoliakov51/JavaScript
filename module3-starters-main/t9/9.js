document.getElementById('start').addEventListener('click', function() {
    const calculation = document.getElementById('calculation').value.trim();
    if (!calculation) {
        document.getElementById('result').textContent = 'Please enter a calculation.';
        return;
    }

    let numbers = calculation.split(/[\+\-\*\/]/).map(num => parseInt(num, 10));
    let operators = calculation.split(/\d+/).filter(operator => operator !== '');
    if (numbers.length - operators.length !== 1) {
        document.getElementById('result').textContent = 'Invalid calculation format.';
        return;
    }
    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const number = numbers[i + 1];

        if (operator === '+') {
            result += number;
        } else if (operator === '-') {
            result -= number;
        } else if (operator === '*') {
            result *= number;
        } else if (operator === '/') {
            if (number === 0) {
                document.getElementById('result').textContent = 'Error: Division by zero.';
                return;
            }
            result = Math.floor(result / number);
        }
    }
    document.getElementById('result').textContent = `Result: ${result}`;
});

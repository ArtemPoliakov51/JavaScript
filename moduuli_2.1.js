let numbers = []
for (let i = 0; i < 5; i++) {
    let num = prompt(`Enter five numbers ${i + 1}:`);
    numbers.push(Number(num));
}

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

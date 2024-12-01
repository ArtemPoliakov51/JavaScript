let NumChoise = parseInt(prompt("roll's max number"))

function dice(sides) {
    const diceNum = Math.floor(Math.random() * sides) + 1;
    return diceNum;
}

function main () {
    const list = document.createElement("ul");
    document.body.appendChild(list);

    while (true) {
        const num = dice(NumChoise);

        const listItem = document.createElement("li");
        listItem.textContent = `${num}`;
        list.appendChild(listItem);


        if (num === NumChoise) {
            break;
        }
    }
}
main();
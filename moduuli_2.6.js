function dice() {
    DiceNum = Math.floor(Math.random() * 6) + 1;
    return DiceNum;
}

function main () {
    const list = document.createElement("ul");
    document.body.appendChild(list);

    while (true) {
        const num = dice();

        const listItem = document.createElement("li");
        listItem.textContent = ` ${num}`;
        list.appendChild(listItem);


        if (num === 6) {
            break;
        }
    }
}
main();
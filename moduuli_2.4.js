let Numbers = [];

while (true) {
    const num = parseInt(prompt("number"))
    Numbers.push(num);

    if (num === 0) {
        break;
    }
}
Numbers.sort();

const list = document.querySelector("#list");

Numbers.forEach(num => {
    const listItem = document.createElement("li");
    listItem.textContent = num;
    list.appendChild(listItem);
});

console.log(Numbers);
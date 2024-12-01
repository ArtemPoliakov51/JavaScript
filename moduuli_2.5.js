let Numbers = [];

while (true) {
    const num = parseInt(prompt("Give a number"))

    if (Numbers.includes(num)) {
        alert("Number was given before")
        break;
    }
    Numbers.push(num);
}
Numbers.sort();

const list = document.querySelector("#list");

Numbers.forEach(num => {
    const listItem = document.createElement("li");
    listItem.textContent = num;
    list.appendChild(listItem);
});

console.log(Numbers);
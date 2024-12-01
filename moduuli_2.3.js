const quantity = 6
let dogNames = [];

for (let i = 0; i < quantity; i++) {
    const name = prompt("dog name")
    dogNames.push(name);
}
dogNames.sort().reverse();

const list = document.querySelector("#list");

dogNames.forEach(name => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    list.appendChild(listItem);
});
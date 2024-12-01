const quantity = parseInt(prompt("How much people you add?"))
let allNames = [];

for (let i = 0; i < quantity; i++) {
    const name = prompt("Enter name?")
    allNames.push(name);
}
allNames.sort();

const list = document.querySelector("#list");

allNames.forEach(name => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    list.appendChild(listItem);
});

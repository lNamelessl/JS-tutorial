const beets = document.getElementById("beets");
beets.addEventListener("click", listener => {
    beets.style.backgroundColor = "tomato";
})
beets.style.backgroundColor = "yellow";

const fruits = document.getElementsByClassName("fruits");
Array.from(fruits).forEach(fruit => { fruit.style.backgroundColor = "red" });

h4 = document.getElementsByTagName("h4");
Array.from(h4).forEach(h => { h.style.backgroundColor = "blue" });

const fruit = document.querySelector("li");
fruit.style.backgroundColor = "lightgreen"

const nRoots = document.querySelectorAll("ol");
nRoots.forEach(nRoot => {
    nRoot.style.backgroundColor = "orange"
})

const sibling = beets.previousElementSibling
sibling.style.backgroundColor = "azure"

const newElement = document.createElement("h2");
newElement.textContent = "Food R Us 🍣";
document.getElementById("myh1").prepend(newElement);


const newFooter = document.createElement("footer");
newFooter.textContent = "🍴";
document.getElementById("myh4").append(newFooter);
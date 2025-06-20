
let fruits = ["apple", "banana", "mango", "orange"];


for(i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

console.log(...fruits);

function combineStrings(...strings){
    return strings.join(" ")
}

const fullName = combineStrings("Mr.", "Abdulrahim", "Kasim");

console.log(fullName);
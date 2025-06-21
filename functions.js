// functions
let email = "fakefakemail.com"
const myH1 = document.getElementById("myH1");


function isValidEmail(email){
    return email.includes("@") ? true : false;
}   

console.log(isValidEmail(email)); 


// callbacks
function hello(){
    console.log(`Hello`)
}

function goodbye(){
    console.log(`Goodbye`)
}

hello(goodbye())

// For Each Method
let fruits = ["apple", "banana", "mango"];
fruits.forEach(capitalize);
fruits.forEach(display);

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function display(element){
    console.log(element)
}
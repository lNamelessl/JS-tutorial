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
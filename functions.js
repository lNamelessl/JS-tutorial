// functions
let email = "fakefakemail.com"

function isValidEmail(email){
    return email.includes("@") ? true : false;
}   

console.log(isValidEmail(email));
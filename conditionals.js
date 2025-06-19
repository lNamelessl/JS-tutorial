// conditionals
const myText = document.getElementById("myText");
const myBtn = document.getElementById("myBtn");
const resultElement = document.getElementById("resultElement");
const myP1 = document.getElementById("myP1")
const isLoggedIn = true;
let age;




// myBtn.onclick = function () {
//     age = Number(myText.value);

//     if (age >= 100) {
//         resultElement.textContent = `You are too old to enter this site`
//     }
//     else if (age == 0) {
//         resultElement.textContent = `You are not old enough to enter this site. You were just born`
//     }
//     else if (age >= 18) {
//         resultElement.textContent = `You are old enough to enter this site`
//     }
//     else {
//         resultElement.textContent = `You are not old enough to enter this site`
//     }
// }


// while loops 
while (!isLoggedIn) {
    window.prompt("log need to log in")
}
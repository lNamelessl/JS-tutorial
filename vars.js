let fullName = "Nameless";
let age = 22;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}` ;
document.getElementById("p2").textContent = `You're ${age} years old`;
document.getElementById("p3").textContent = `Student: ${isStudent}`
console.log(typeof isStudent)
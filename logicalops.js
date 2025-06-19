// logical operators

const temp = 0;
let myP1 = document.getElementById("myP1")
const isSunny = false;

if (temp > 0 && temp <= 200) {
    myP1.textContent = "It is sunny"
}
if (temp < 0 || temp == 0 ){
    myP1.textContent = `It is not sunny`
}
if(!isSunny){
    myP1.textContent = `It is not sunny`
} 
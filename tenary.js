const myInput = document.getElementById("myInput");
const myP1 = document.getElementById("myP1");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function(){
    total = Number(myInput.value);
    let discount = total >= 100 ? 10 : 0;
    myP1.textContent = `Your total is ${total - total * (discount/100)}`;
}

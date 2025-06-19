const myCheckBox = document.getElementById("myCheckBox");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");


mySubmit.onclick = function(){
    if(myCheckBox.checked){
     subResult.textContent = `You have already subscribed!`   
    }
    else if(myCheckBox){
        subResult.textContent = `You are not subscribed`
    }
}


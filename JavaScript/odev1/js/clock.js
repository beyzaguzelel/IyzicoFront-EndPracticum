let name=prompt("Adınızı giriniz")
let myName=document.querySelector("#myName")
myName.innerHTML=name

function showTime(){
    let today = new Date().toLocaleString('tr-TR');
    document.getElementById("myClock").innerHTML = today;
    
}
setInterval(showTime, 1000);



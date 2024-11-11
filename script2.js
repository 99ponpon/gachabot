// Index

const settings1 = document.getElementById("fixedheader2")
const prize1 = document.getElementById("botprize")

settings1.addEventListener("click", function(){
    console.log("hello")
    window.location.href = "login.html";
})

prize1.addEventListener("click", function(){
    window.location.href = "prizes.html";
})
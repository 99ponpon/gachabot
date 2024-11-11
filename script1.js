// Login

const a1 = document.getElementById("field1")
const a2 = document.getElementById("field2")
const y = document.getElementById("button1")

console.log(y)

y.addEventListener("click", function()
{ 
    if (a1.value == "" || a2.value == ""){
        console.log("nothing")
    }
    else {
        console.log("something")
        sessionStorage.setItem("log", "yes")
        window.location.href = "index.html";
    }
});
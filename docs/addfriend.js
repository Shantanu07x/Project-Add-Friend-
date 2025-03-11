var btn1 = document.querySelector("#btn2")
var btn2 = document.querySelector("#btn1")
var istatus = document.querySelector(".card h3")

btn1.addEventListener("click", function(){
    istatus.innerHTML= "FRIENDS"
    istatus.style.color = "green"
})

btn2.addEventListener("dblclick", function(){
    istatus.innerHTML = "STRANGER"
    istatus.style.color = "purple"
})
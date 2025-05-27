//first way
const body = document.getElementsByTagName("body")[0];

function setcolor (name){
    body.style.backgroundColor = name;
}


//second way
const body2 = document.querySelector("body")
const button = document.querySelectorAll(".btn")

button.forEach(function(btn){
    btn.addEventListener("click", function(e){
        body2.style.backgroundColor = e.target.id
    })
})


//third way
button.forEach(function(btn){
    btn.addEventListener("click", function(e){
    if (e.target.id === "green"){
        body2.style.backgroundColor = e.target.id
    }
    if (e.target.id === "blue"){
        body2.style.backgroundColor = e.target.id
    }
    if (e.target.id === "red"){
        body2.style.backgroundColor = e.target.id
    }
    
    })
})

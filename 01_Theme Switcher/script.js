
const button = document.querySelectorAll("#button")

button.forEach(function (button){


    button.addEventListener("click" , function(event){
        if(event.target.className === "grey" ){
            body.style.backgroundColor = event.target.className
        }
        if(event.target.className === "white" ){
            body.style.backgroundColor = event.target.className
        }
        if(event.target.className === "blue" ){
            body.style.backgroundColor = event.target.className
        }
        if(event.target.className === "yellow" ){
            body.style.backgroundColor = event.target.className
        }
    })
})
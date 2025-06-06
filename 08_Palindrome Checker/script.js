const input = document.getElementById("input")

function reverse (str){
   return str.split("").reverse().join("")
}

function check(){
    let inputValue = input.value
    let reverseValue = reverse(inputValue)

    if (inputValue === reverseValue){
        alert("P A L I N D R O M E")
    }
    else {
        alert("Not a PALINDROME")
    }

    input.value = ""
}


// The first method

let ball = document.querySelector("#ball")
let offset = 10    //  <=== This means that our ball is 10 px away from the left
setInterval(() => {
    ball.style.left = offset + "px"
    offset += 1
} , 10)
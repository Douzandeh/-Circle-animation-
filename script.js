// The first and second methods

// The first method

// let ball = document.querySelector("#ball")
// let offset = 10    //  <=== This means that our ball is 10 px away from the left
// setInterval(() => {
//     ball.style.left = offset + "px"
//     offset += 1
// } , 10)


// The second method
// let ball = document.querySelector("#ball")
// let offset = 10;
// function animate(){
//     ball.style.left = offset + "px"
//     offset +=1
//     requestAnimationFrame(animate)
// }
// animate()
// The reason that the second method is better than the first method is because it is optimal


//    The third method is the use of canvas

let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height =window.innerHeight

let c = canvas.getContext("2d")

let r = 40
let x = 50
let y = 50


function animate(){
    c.beginPath()
    c.arc(x,y,r,0,2 * Math.PI)
    c.fillStyle = "red"
    x+= 1
    requestAnimationFrame(animate)
}
animate()
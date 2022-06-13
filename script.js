// The first method

// let ball = document.querySelector("#ball")
// let offset = 10    //  <=== This means that our ball is 10 px away from the left
// setInterval(() => {
//     ball.style.left = offset + "px"
//     offset += 1
// } , 10)


// The second method
let ball = document.querySelector("#ball")
let offset = 10;
function animate(){
    ball.style.left = offset + "px"
    offset +=1
    requestAnimationFrame(animate)
}
animate()
// The reason that the second method is better than the first method is because it is optimal

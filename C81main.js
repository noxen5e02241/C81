canvas=document.getElementById("mycanvas")
var ctx= canvas.getContext("2d")
var color="cobalt blue"
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
 mousex= e.clientX-canvas.offsetLeft
 mousey=e.clientY-canvas.offsetTop
console.log(mousey);
console.log(mousex);
circle(mousex,mousey)
}
function circle(mousex,mousey){
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(mousex,mousey,40,0,2*Math.PI)
ctx.stroke()

}
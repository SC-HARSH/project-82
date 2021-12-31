var Eventname = "nothing";
var lastcoordx,lastcoordy;
var radius = 20;
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 3;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    width = document.getElementById("width".value);
    radius = document.getElementById("radius").value;
    Eventname = "mousedown";
}

document.getElementById("mycanvas").addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    Eventname = "mouseleave";
}

document.getElementById("mycanvas").addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    Eventname = "mouseup";
}

document.getElementById("mycanvas").addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    currentcoordx = e.clientX - canvas.offsetLeft;
    currentcoordy = e.clientY - canvas.offsetTop;
    console.log(lastcoordy);
    if (Eventname == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.arcWidth = width;
        ctx.arc(currentcoordx, currentcoordy, radius ,0 , 2*Math.PI);
        ctx.stroke();
    };
    lastcoordx = currentcoordx;
    lastcoordy = currentcoordy;
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

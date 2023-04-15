var canvas = document.getElementById("Window-Game");
var ctx = canvas.getContext("2d");

var Bill = new Image();
Bill.src = "standing-bill-final.png";

var x = 15;
var y = 10;

setInterval(Main, 1000/60);

function Main() {
    ctx.clearRect(0,0,1000,1000)
    ctx.drawImage(Bill,x,y)
    y+= 1;


}

function jump() {
    y -= 20;


}

function moveForward() {
    x += 5;

}

document.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
        jump();
        console.log("jump")
    }
})

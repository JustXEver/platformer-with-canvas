var Bill = new Image();
Bill.src = "standing-bill-final.png";
var Billrun = new Image();
Bill.src = "bill-running-4.png";
var myGamePiece;

var ground1

var platform1 = new Image();
Platform.src = "platform.png";

function startGame() {
    myGamePiece = new component(161, 271, "red", 161, 271);
    ground1 = new component(10, 200, "green", 300, 120);
    myGameArea.start();
    platform1 = new component(426, 96, "blue", 426, 96)
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.style = "background-image:url('background0.png')";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },

    stop: function () {
        clearInterval(this.interval);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.67;
    this.gravitySpeed = 0;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(Bill, this.x, this.y)
    }

    this.newPos = function () {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function () {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom
            this.speedY = 0;
            myGamePiece.gravitySpeed = 0;
        }
    }
}



function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

function moveup() {
    if (true) {
        myGamePiece.speedY -= 20;
    }

}

function movedown() {
    myGamePiece.speedY = 10;
    if (myGamePiece.speedY == 10) {
        myGamePiece.speedY += 5;
    }
    myGamePiece.speedY = -1;
}

function moveleft() {
    myGamePiece.speedX -= 1;
    myGamePiece.speedY = 0;
}

function moveright() {
    myGamePiece.speedX += 1;
    myGamePiece.speedY = 0;
}

document.addEventListener("keydown", (event) => {
    console.log(event)
    if (event.key === "ArrowRight") { moveright(); }

})

document.addEventListener("keydown", (event) => {
    console.log(event)
    if (event.key === "ArrowLeft") { moveleft(); }

})

document.addEventListener("keydown", (event) => {
    console.log(event)
    if (event.key === "ArrowDown") { movedown(); }

})

document.addEventListener("keydown", (event) => {
    console.log(event)
    if (event.key === "ArrowUp") { moveup(); }


})

document.addEventListener("keyup", (event) => {
    console.log(event)
    if (event.key === "ArrowRight") { myGamePiece.speedX = 0; }

})

document.addEventListener("keyup", (event) => {
    console.log(event)
    if (event.key === "ArrowLeft") {
        myGamePiece.speedX = 0;
    }

})
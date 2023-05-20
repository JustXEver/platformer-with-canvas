// class world {
//     gravity = 0.1;
//     background = "background0.png";
//};

class player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xw = 0;
        this.yw = 0;
        this.ground = true;
        this.billimage = "./standing-bill-final.png";
        this.gp1 = y+271;
    }   
};

class platform {
    constructor() {
        this.cords = [100,100];
        this.image = "./platform.png";
    }
};

let world = {
            canvas: document.createElement("canvas"),
            start: function () {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
                this.canvas.style="background-image:url('background0.png')";
                this.context = this.canvas.getContext("2d");
                document.body.insertBefore(this.canvas, document.body.childNodes[0]);
                this.interval = setInterval(world.clear(), 20);
            },
            stop: function () {
                clearInterval(this.interval);
            },
            clear: function () {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            },ctx : world.context
        }
world.start();

while (true) {
    world.ctx.drawImage(player.billimage, player.x, player.y);}
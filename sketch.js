var player;
var ball ;
function setup() {
    createCanvas(400,400);
    background(0);
    player = new Player(0,height/2);
    ball = new Ball(7,width/2,height/2);
    angleMode(DEGREES);
}

function draw() {
    if(keyIsDown(38)){
        player.update("up");
    }
    if(keyIsDown(40)){
        player.update("down");
    }
    ball.update(player);
    background(0);
    player.show();
    ball.show();
}

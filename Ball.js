function Ball(radius,x,y){

    this.r = radius;
    this.pos = createVector(x,y);
    this.speed = createVector(-5,0);

    this.show = function () {

        this.pos.add(this.speed);
        fill(255);
        ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2);
    };

    this.update = function(player){
        //Wall Collision

        if(this.pos.x + this.r + 2 > width || this.pos.x - this.r - 2 < 0){
            this.speed.set(-this.speed.x,this.speed.y);
        }
        if(this.pos.y - this.r -2 < 0 || this.pos.y + this.r + 2 > height){
            this.speed.set(this.speed.x, -this.speed.y);
        }


        /*
            Player Collision
         */
        // collisiosn on x axis
        if(this.pos.x - this.r -2 < player.x + player.w && this.pos.x + this.r + 2 > player.x ){

            // collision on y axis
            if((this.pos.y + this.r + 2 >= player.y) && (this.pos.y - this.r - 2 <= player.y + player.h)){

                var newy = (player.y + player.h/2 - this.pos.y)*0.1;
                this.speed.set(-this.speed.x, -newy);
            }
        }


    }


}
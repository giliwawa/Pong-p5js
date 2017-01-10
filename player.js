function Player(x,y){


    this.h = 100;
    this.w = 20;
    this.y = y ;
    this.x = x;
    this.speed = 10;

    this.show = function(){
        fill(255);
        rect(this.x,this.y,this.w,this.h);
    }

    this.update = function(direction){
        if(direction == "up"){
            if( !(this.y < 30)){
                this.y -= this.speed;
            }
        }
        if(direction == "down"){
            if( !(this.y > height-this.h -30)){
                this.y += this.speed;
            }
        }
    }
}
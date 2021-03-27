class Stone{
    constructor(x,y,radius){
        var options={
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2

        }

        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.width=radius;
        this.height=radius;
        this.stoneIMG = loadImage("stone.png");
    
    }
    display(){
        imageMode(CENTER);
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        
      image(this.stoneIMG,pos.x,pos.y, this.width, this.height)
    pop();
    }    

}
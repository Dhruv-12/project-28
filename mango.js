class Mango{
    constructor(x,y,radius){
        var options={
            isStatic : true,
            restitution : 0,
            friction : 1,
            

        }

        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.width=radius;
        this.height=radius;
        this.mangoIMG = loadImage("mango.png");
    
    }
    display(){
        imageMode(CENTER);
        var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      imageMode(CENTER)
      image(this.mangoIMG,0,0, this.width, this.height)
      pop();
    }    

}
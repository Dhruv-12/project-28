class tree{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        this.treeIMG = loadImage("tree.png");
    
    }
    display(){
        imageMode(CENTER);
        var pos=this.body.position;
      
      image(this.treeIMG,pos.x,pos.y, this.width, this.height)
      
    }    

}
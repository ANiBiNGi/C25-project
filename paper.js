class paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution': 0.2,
            'friction': 0,
            'density': 2
        }
        this.body = Bodies.circle(x,y,radius/2,options)
        this.radius = radius;
        this.image = loadImage("images/paper1.png")
        World.add(world,this.body)
    }
display(){
    var pos = this.body.position;
    fill("magenta");
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.radius,this.radius);  
}
}
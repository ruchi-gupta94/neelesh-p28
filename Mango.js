class Mango{
    constructor(x,y,radius){
        this.body= Matter.Bodies.circle(x,y,radius, {isStatic:true, restitution:0, friction:1});

        this.radius=radius;
        
        this.image=loadImage("mango.png")

        World.add(world, this.body)
    }

    display(){

        push();

        imageMode(CENTER);

        fill("purple");

        stroke("purple");

        var pos=this.body.position
        var angle = this.body.angle;
        translate(pos.x, pos.y);
		rotate(angle)

        image(this.image, 0, 0, this.radius*2,this.radius*2);

        pop();

    }

}
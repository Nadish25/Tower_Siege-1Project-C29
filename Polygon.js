class Polygon {
    constructor(x,y,r){

        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);

        this.image = loadImage("polygon.png");
        this.x = x;
        this.y = y;
        this.r = r;
    }

    

    display(){
        this.x = this.body.position.x;
        this.y = this.body.position.y;

        imageMode(CENTER);
        image(this.image,this.x,this.y,this.r,this.r);
    }
} 
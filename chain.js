/*class CHAIN{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var op = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Matter.Constraint.create(op)
        World.add(world,this.rope)
    }
    display(){
        var A = this.chain.bodyA.position;
        var B = this.chain.bodyB.position;
        pop();
        line(A.x,A.y,B.x,b.y);
        push();
    }
}*/

class CHAIN{
    constructor(bodyA,bodyB, offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.bodyB = bodyB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        push();
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}
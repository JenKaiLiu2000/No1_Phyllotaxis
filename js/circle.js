function particle_circle(pos,color,alpha,radius){
    this.pos = pos;
    this.alpha = alpha;
    this.color = color;
    this.radius = radius;
    this.strokeWeight = 2;

    this.show = function(){ 
        stroke(this.color,this.alpha*map(this.radius,10,100,1,0.6));
        strokeWeight(this.strokeWeight*map(this.radius,10,100,1,0.4));
        ellipse(this.pos.x,this.pos.y,this.radius,this.radius);
    }

    this.disapear = function(){
        this.alpha -= 0.7;
    }
}
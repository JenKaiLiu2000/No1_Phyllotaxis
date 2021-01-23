let n = 0;
let c = 8;
let m_radius = 10;
let m_radius_start = 10;
let const_angle = 137.0;
let alpha = 50;
let time = 0;
let vector_rotation = 0;
let current_time = 0;

let particles = [];
let paritcle_count = 1200;
let id = 0;
function setup() {
  createCanvas(550, 550).parent("main-display");
  angleMode(DEGREES);
  colorMode(HSB, 100);
  background(0);
  for(let i = 0 ; i < paritcle_count ; i++){
    particles[i] = new particle_circle(new createVector(0,0),0,0,0);
  }
}

function draw() {
  
  background(0);
  current_time += 0.014;
  if(time > 90){
    n= 0;
    m_radius = m_radius_start;
    alpha = 50;
    console.log("refresh");
    time = 0;
    m_radius_start--;
  }
  for(let i = 0 ; i< 20;i++){
    let theta = n*const_angle;
    let r = c*sqrt(n);
    let x = cos(theta);
    let y = sin(theta);
    let p = createVector(x, y);
    p.mult(r);
    p.add(width/2,height/2);
    fill(255)
    fill(0,0,0,0);
    let light_v = createVector(cos(vector_rotation), sin(vector_rotation));
    let point_v = p.copy();
    let dotProdut = light_v.dot(point_v.normalize());
    // stroke(dotProdut*100,alpha);
    // strokeWeight(2);
    // ellipse(p.x,p.y,m_radius,m_radius);
    particles[id] = new particle_circle(p,dotProdut*100,alpha,m_radius);
    n++;
    id++;
    const_angle += 0.00008; //0.00008
    m_radius += 0.08;
    vector_rotation+= sin(current_time*2);
    
    console.log(dotProdut);
  }
  alpha += 0.4;
  time++;
  for(let i = 0 ; i < paritcle_count ; i++){
    particles[i].disapear();
    particles[i].show();
  }
  if(id >= paritcle_count){
    id=0;
  }
}
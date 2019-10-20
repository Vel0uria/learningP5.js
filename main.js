let carta

function setup() {
  createCanvas(400, 630);
  
  carta = loadImage('https://res.cloudinary.com/dn1i6hdch/image/upload/v1564423937/12-Hanged_vyhouh.jpg')
}

function draw() {
  background(220);
  imageMode(CENTER)
  image(carta,width/2,height/2,width,height)
  noStroke()
  fill(random(200,255),random(200,255),random(180,200),random(10,100))
  ellipse(197,473,125,98)
  
 
}

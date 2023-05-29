function preload(){
    eyes = loadImage("eyes.jpg")
    lip = loadImage("lip.jpg")
    bottom = loadImage("bottom.jpg")
    skull = loadModel("skull.obj")
  
  }
  function setup() {
    createCanvas(400, 600, WEBGL);
    angleMode(DEGREES)
  }
  
  function draw() {
    background(0)
    //MATRYOSHKA
    push()
    findPoint(-130,-280,-120,-250,-120,-230,-130,-200)
    matryoshka(-130,-280,-120,-250,-120,-230,-130,-200)
    findPoint(-130,-200,-135,-187,-135,-160,-130,-150)
    matryoshka(-130,-200,-135,-187,-135,-160,-130,-150)
    findPoint(-90,-280,-98, -265,-98,-250,-90,-235)
    matryoshka(-90,-280,-98, -265,-98,-250,-90,-235)
    findPoint(-90,-235,-85,-220,-85,-214,-89.5,-204)
    matryoshka(-90,-235,-85,-220,-85,-214,-89.5,-204)
    findPoint(-89.5,-204,-60,-214,-30,-224,0,-215)
    matryoshka(-89.5,-204,-60,-214,-30,-224,0,-215)
    findPoint(-130,-200,-110,-210,-100,-220,-90,-235)
    matryoshka(-130,-200,-110,-210,-100,-220,-90,-235)
    findPoint(-128,-150,-120,-165,-125,-180,-128,-190)
    matryoshka(-128,-150,-120,-155,-125,-170,-128,-190)
    findPoint(-128,-190,-110,-180,-95,-180,-85,-193)
    matryoshka(-128,-190,-110,-180,-95,-180,-85,-193)
    findPoint(-85,-193,-60,-187,-25,-190,0,-215)
     matryoshka(-85,-193,-60,-187,-25,-190,0,-215)
    findPoint(-70,-280,-85, -265,-85,-250,-70,-235)
    matryoshka(-70,-280,-85, -265,-85,-250,-70,-235)
    findPoint(-75,-235,-68,-220,-68,-214,-75,-204)
    matryoshka(-75,-235,-68,-220,-68,-214,-75,-204)
    findPoint(-50,-280,-60,-235,-40,-220,0,-215)
    matryoshka(-50,-280,-60,-235,-40,-220,0,-215)
    //decoration
     stroke(179,255,255)
    triangle(0,-190,-10,-172.679,10,-172.679)
    circle(-5,-172.679,9)
    circle(5,-172.679,9)
    circle(-60,-181.340,12)
    circle(-60,-169.340,12)
    ellipse(-68,-175.340,18,10)
    ellipse(-54,-175.340,18,10)
    circle(60,-181.340,12)
    circle(60,-169.340,12)
    ellipse(68,-175.340,18,10)
    ellipse(54,-175.340,18,10)
    imageMode(CENTER)
    image(eyes,0,-255,80,20 )
    image(lip, 0, -235,20,10)
    pop()
    
    //transaction1
    push()
    rectMode(CENTER)
    fill(200,255,255)
    noStroke()
    rect(0,-145.340,250,60)
    blendMode(DIFFERENCE)
    fill(0,170,255)
    rect(-100,-160.340,200,20)
    fill(0)
    rect(100,-160.340,200,20)
    fill(0,0,255)
    rect(100,-130,200,20)
    fill(0)
    rect(-100,-130,200,20)
    pop()
    push()
    stroke(0,255,255)
    strokeWeight(5)
    line(0,-115.5,0,-90)
    line(-123,-115.5,-123,-80)
    line(123,-115.5,123,-80)
    strokeWeight(1)
    line(123,-80,95,-55)
    line(-123,-80,-95,-55)
    line(0,-90,0,-80)
    
    pop()
    
    //PRISM
    push()
    stroke(255)
    strokeWeight(0.5)
    noFill()
    rotateY(120)
    cone(125,125,4,1)
    pop()
    //light
    push()
    strokeWeight(10)
    stroke(random(100,200))
    line(-1500,200,-47,0)
    pop()
    //rainbow
    push()
    stroke(255,random(0,77),random(0,77))
    strokeWeight(3)
    line(40,0,1000,200)
    stroke(255,255,random(0,77))
    line(40,3,1000,200)
    stroke(random(0,77),random(0,77),255)
    line(40,6,1000,200)
    stroke(random(0,77),255,random(0,77))
    line(40,9,1000,200)
    pop()
    
    //Skull
    push();
    translate(0,230,-300);
    scale(0.7);
    rotateX(-300);
    rotateZ(millis()/15);
    normalMaterial();
    head = model(skull);
    pop()
    
    //bottom
    push()
    texture(bottom)
    stroke(0,0,255)
    translate(-150,180)
    rotateY(60)
    box(50,200,50)
    pop()
    push()
    texture(bottom)
    stroke(0,0,255)
    translate(150,180)
    rotateY(120)
    box(50,200,50)
    pop()
  
    
  }
  function matryoshka(X,Y,x1,y1,x2,y2,x3,y3){
    stroke(0,0,255)
    strokeWeight(1.5)
    noFill()
    beginShape()
    vertex(X,Y)
    bezierVertex(x1,y1,x2,y2,x3,y3)
    endShape()
    
    beginShape()
    vertex(-X,Y)
    bezierVertex(-x1,y1,-x2,y2,-x3,y3)
    endShape()
  
  }
  function findPoint(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8){
    stroke(0,255,255)
    strokeWeight(2)
    P0 = point(x1,y1)
    P1 = point(x2,y2)
    P2 = point(x3,y3)
    P3 = point(x4,y4)
    P0r = point(-x1,y1)
    P1r = point(-x2,y2)
    P2r = point(-x3,y3)
    P3r = point(-x4,y4)
  
    
  
  }
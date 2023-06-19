function on(){
    preLeave=true;
    preCall=false;
    preOther=false;
  }
  
  function on2(){
    preCall=true;
    preLeave=false;
    preOther=false;
  }
  
  function on3(){
    preOther=true;
    preLeave=false;
    preCall=false;
  }
  
  function off(){
    preOther=false;
    preLeave=false;
    preCall=false;
  }
  
  
  
  
  function leaveMeAlone(){
      translate(width,0);
       scale(-1,1);
      //tint(255,tintValue);
    tint(220, 208, 255);
      imageMode(CENTER);
    image(capture,width/2,height/2,capture.width,capture.height);
  
  }
  
  function together(){
      push()
      translate(width,0);
       scale(-1,1);
      //tint(255,tintValue);
    tint(220, 208, 255,tintValue);
      imageMode(CENTER);
    image(capture,width/2,height/2,capture.width,capture.height);
      pop();
  
     push();
      //translate(width,0);
      //scale(1,1);
      //tint(255,tintValue);
    tint(220, 208, 255,tintValue);
      imageMode(CENTER);
     image(capture,width/2,height/2,capture.width,capture.height);
      pop();
    
  
  }
  
  function theOther(){
      //tint(255,tintValue);
    tint(220, 208, 255);
      imageMode(CENTER);
     image(capture,width/2,height/2,capture.width,capture.height);
  
  }
  
  function cover(){
    background(0);
    textSize(70);
    fill(0,255,255);
    textAlign(CENTER);
    translate(x/2,y/2);
    text('😴',0,0);
    
  }
  
  
  function keyPressed() {
    if (keyCode===76) {
      leaveMeAlone();
      on();
    } else if (keyCode===75) {
      together();
      on2();
    }
    else if (keyCode===188){
      theOther();
      on3();
    }
    else{
      cover();
      off();
    }
  }
let preCall;
let preLeave;
let preOther;
let tintValue;
let x;
let y;

function setup() {
  x = 660*1.4;
  y = 480*1.4;
  createCanvas(x,y);
  //background(255,0,102);
  //createCanvas(windowWidth, windowHeight*1.1);
  capture = createCapture(VIDEO);
  capture.size(width,height);
  pixelDensity(10);
  capture.hide();
  preCall=false;
  preLeave=false;
  preOther=false;
  tintValue=130;
}

function draw() {
  //fill(158, 163, 245,100);
  //rect(0,0,width,height);
  keyPressed();
}

var x = 364;
var y = 0;
var x1 = 0
var x2 = 728
var x3 = 0
var x4 = 365
var y1 = 0
var y2 = 300
var y3 = 400
var y4 = 700
var x5 = 1094
var y5 = 1000
var x6 = 729
var y6 = 700
var x7 = 1458
var y7 = 0
var x8 = 1095
var y8 = 1650
var y9 = 1350
var y10 = 600
var y11 = 900
var y12 = 1000
var y13 = 1300
var y14 = 500
var y15 = 200
var y16 = 1050
var y17 = 750
var x9 = 1822
var x10 = 1822
var y18 = 100
var x11 = 1459
var y19 = 1650
var y20 = 0
var dir = 1;
var vel = 6

function setup() {
  createCanvas(2550, 1650);
  background(220)
  textFont("Arial")
}

function draw() {
  background(250, 250, 250);
  frameRate(4);

  //zona blanca
  fill(0)
  stroke(1)
  line(x, 0, x, height)


  //cuadrados amarillos
  fill(0)
  stroke(4)
  if (frameCount > 3 && frameCount < 70) {
    line(x2, y1, x2, height)
  }
  if (frameCount > 6 && frameCount < 70) {
    fill(251, 237, 19)
    noStroke()
    rect(x4, y, 363, 363);
    y = y + vel
  }
  //if (x1 >= 364 && x1 < 728) {
  // vel = 4;
  //}
  if (frameCount > 14 && frameCount < 70) {
    fill(251, 237, 19)
    noStroke()
    rect(x4, y2, 363, 363);
    y2 = y2 + vel
  }
  if (frameCount > 21 && frameCount < 70) {
    fill(251, 237, 19)
    noStroke()
    rect(x4, y10, 363, 363);
    y10 = y10 + vel
  }
  if (frameCount > 28 && frameCount < 70) {
    fill(251, 237, 19)
    noStroke()
    rect(x4, y11, 363, 363);
    y11 = y11 + vel
  }
  //cuadrados celestes
  fill(0)
  stroke(4)
  if (frameCount > 7 && frameCount < 70) {
    line(x5, y1, x5, height)
  }

  if (frameCount > 10 && frameCount < 70) {
    fill(19, 233, 251)
    noStroke()
    rect(x6, y3, 363, 363);
    y3 = y3 + vel
    //}
    //if (x4 >= 364 && x4 < 728) {
    //vel = 4;
  }
  if (frameCount > 17 && frameCount < 70) {
    fill(19, 233, 251)
    noStroke()
    rect(x6, y4, 363, 363);
    y4 = y4 + vel
  }
  if (frameCount > 24 && frameCount < 70) {
    fill(19, 233, 251)
    noStroke()
    rect(x6, y12, 363, 363);
    y12 = y12 + vel
  }
  if (frameCount > 31 && frameCount < 70) {
    fill(19, 233, 251)
    noStroke()
    rect(x6, y13, 363, 363);
    y13 = y13 + vel
  }
  //cuadrados verdes
  fill(0)
  stroke(4)
  if (frameCount > 11 && frameCount < 70) {
    line(x7, y7, x7, height)
  }
  if (frameCount > 14 && frameCount < 70) {
    fill(72, 245, 29)
    noStroke()
    rect(x8, y5, 363, 363);
    y5 = y5 + vel * dir
  }
  if (y5 > 250) {
    dir = -1;
  }
  if (frameCount > 21 && frameCount < 70) {
    fill(72, 245, 29)
    noStroke()
    rect(x8, y6, 363, 363);
    y6 = y6 + vel * dir
  }
  if (y6 > 250) {
    dir = -1;
  }
  if (frameCount > 28 && frameCount < 70) {
    fill(72, 245, 29)
    noStroke()
    rect(x8, y14, 363, 363);
    y14 = y14 + vel * dir
  }
  if (y14 > 250) {
    dir = -1;
  }
  if (frameCount > 35 && frameCount < 70) {
    fill(72, 245, 29)
    noStroke()
    rect(x8, y15, 363, 363);
    y15 = y15 + vel * dir
  }
  if (y15 > 250) {
    dir = -1;
  }

  //cuadrados fucsias
  fill(0)
  stroke(4)
  if (frameCount > 15 && frameCount < 70) {
    line(x10, y20, x10, height)
  }
  if (frameCount > 18 && frameCount < 70) {
    fill(250, 50, 226)
    noStroke()
    rect(x11, y19, 363, 363);
    y19 = y19 + vel * dir
  }
  if (y19 > 500) {
    dir = -1;
  }
  if (frameCount > 24 && frameCount < 70) {
    fill(250, 50, 226)
    noStroke()
    rect(x11, y9, 363, 363);
    y9 = y9 + vel * dir
  }
  if (y9 > 250) {
    dir = -1;
  }
  if (frameCount > 31 && frameCount < 70) {
    fill(250, 50, 226)
    noStroke()
    rect(x11, y16, 363, 363);
    y16 = y16 + vel * dir
  }
  if (y16 > 250) {
    dir = -1;
  }
  if (frameCount > 38 && frameCount < 70) {
    fill(250, 50, 226)
    noStroke()
    rect(x11, y17, 363, 363);
    y17 = y17 + vel * dir
  }
  if (y17 > 250) {
    dir = -1;
  }
  //figuras adicionales
  if (frameCount > 1 && frameCount < 68) {
    fill(245)
    noStroke()
    ellipse(2186, 825, 300, 300)
  }
  if (frameCount > 1 && frameCount < 66) {
    fill(250, 50, 226)
    noStroke()
    rect(2136, 775, 100, 100)
  }

  if (frameCount > 67 && frameCount < 70) {
    fill(250, 50, 226)
    noStroke()
    ellipse(2186, 825, 300, 300)
  }
  if (frameCount > 67 && frameCount < 70) {
    fill(245)
    noStroke()
    triangle(2146, 785, 2146, 885, 2236, 835)
  }
  if (frameCount > 3 && frameCount < 13) {
    fill(175, 171, 171)
    textSize(100);
    text("Just Play", 2000, 300);
  }
  if (frameCount > 14 && frameCount < 24) {
    fill(175, 171, 171)
    textSize(100);
    text("Just Play", 2000, 400);
  }
  if (frameCount > 25 && frameCount < 35) {
    fill(175, 171, 171)
    textSize(100);
    text("Just Play", 2000, 500);
  }
  if (frameCount > 36 && frameCount < 46) {
    fill(175, 171, 171)
    textSize(100);
    text("Just Play", 2000, 1200);
  }
  if (frameCount > 47 && frameCount < 57) {
    fill(175, 171, 171)
    textSize(100);
    text("Just Play", 2000, 1300);
  }
  if (frameCount > 58 && frameCount < 67) {
    fill(175, 171, 171)
    textSize(100);
    text("Just Play", 2000, 1400);
  }

  }
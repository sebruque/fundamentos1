//variables para botones de herramientas
var posXbot1 = 30;
var posYbot1 = 40;
var tambot1 = 40;
var posXbot2 = 30;
var posYbot2 = 80;
var tambot2 = 40;
var posXbot3 = 30;
var posYbot3 = 120;
var tambot3 = 40;
var posXbot4 = 30;
var posYbot4 = 160;
var tambot4 = 40;
var posXbot5 = 30;
var posYbot5 = 200;
var tambot5 = 40;
var posXbot6 = 30;
var posYbot6 = 240;
var tambot6 = 40;
var posXbot7 = 30;
var posYbot7 = 280;
var tambot7 = 40;
var posXbot8 = 30;
var posYbot8 = 320;
var tambot8 = 40;
var posXbot9 = 30;
var posYbot9 = 360;
var tambot9 = 40;
var posXbot10 = 30;
var posYbot10 = 400;
var tambot10 = 40;
var posXbot11 = 30;
var posYbot11 = 440;
var tambot11 = 40;

//variables para botones de colores
var posXbot12 = 500;
var posYbot12 = 40;
var tambot12 = 40;
var posXbot13 = 540;
var posYbot13 = 40;
var tambot13 = 40;
var posXbot14 = 580;
var posYbot14 = 40;
var tambot14 = 40;
var posXbot15 = 620;
var posYbot15 = 40;
var tambot15 = 40;
var posXbot16 = 660;
var posYbot16 = 40;
var tambot16 = 40;
var posXbot17 = 700;
var posYbot17 = 40;
var tambot17 = 40;
var posXbot18 = 740;
var posYbot18 = 40;
var tambot18 = 40;
var posXbot19 = 780;
var posYbot19 = 40;
var tambot19 = 40;
var posXbot20 = 820;
var posYbot20 = 40;
var tambot20 = 40;
var posXbot21 = 860;
var posYbot21 = 40;
var tambot21 = 40;

//variables herramientas y colores
var herramienta = 1;
var colores = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  //textFont("Arial")
}

function draw() {
  //botones herramientas
  stroke(0, 0, 0);
  fill(65);
  rect(posXbot1, posYbot1, tambot1, tambot1);
  //fill(65)
  //ellipse(posXbot1 + 20, posYbot1 + 20, tambot1 / 2, tambot1 / 2)
  fill(175, 171, 171);
  rect(posXbot2, posYbot2, tambot2, tambot2);
  fill(265);
  textSize(40);
  text("L", posXbot3+4, posYbot3);
    textSize(25);
  text("1", posXbot3+25, posYbot3);
  fill(175, 171, 171);
  rect(posXbot3, posYbot3, tambot3, tambot3);
  fill(265);
  textSize(40);
  text("L", posXbot4+4, posYbot4);
    textSize(25);
  text("2", posXbot4+25, posYbot4);
  fill(175, 171, 171);
  rect(posXbot4, posYbot4, tambot4, tambot4);
  fill(265);
  textSize(40);
  text("A", posXbot5+2, posYbot5);
    textSize(25);
  text("1", posXbot5+27, posYbot5);
  fill(175, 171, 171);
  rect(posXbot5, posYbot5, tambot5, tambot5);
   fill(265);
  textSize(40);
  text("A", posXbot6, posYbot6);
    textSize(25);
  text("2", posXbot6+27, posYbot6);
  fill(175, 171, 171);
  rect(posXbot6, posYbot6, tambot6, tambot6);
   fill(265);
  textSize(40);
  text("E", posXbot7+1, posYbot7);
    textSize(25);
  text("1", posXbot7+26, posYbot7);
  fill(175, 171, 171);
  rect(posXbot7, posYbot7, tambot7, tambot7);
     fill(265);
  textSize(40);
  text("E", posXbot8+1, posYbot8);
    textSize(25);
  text("2", posXbot8+26, posYbot8);
  fill(175, 171, 171);
  rect(posXbot8, posYbot8, tambot8, tambot8);
      fill(265);
  textSize(40);
  text("R", posXbot9+1, posYbot9);
    textSize(25);
  text("1", posXbot9+27, posYbot9);
  fill(175, 171, 171);
  rect(posXbot9, posYbot9, tambot9, tambot9);
      fill(265);
  textSize(40);
  text("R", posXbot10+1, posYbot10);
    textSize(25);
  text("2", posXbot10+27, posYbot10);
  fill(175, 171, 171);
  rect(posXbot10, posYbot10, tambot10, tambot10);
        fill(265);
  textSize(40);
  text("T", posXbot11+5, posYbot11);
    textSize(25);
  text("1", posXbot11+25, posYbot11);
  fill(175, 171, 171);
  rect(posXbot11, posYbot11, tambot11, tambot11);
  fill(265)
  noStroke()
 rect(posXbot11+11, posYbot11+20, tambot11/2, tambot11/2);
triangle(posXbot11+6, posYbot11+28, posXbot11+36, posYbot11+28, 
         posXbot11+20, posYbot11-0,1);
  stroke(175,171,171)
   rect(posXbot11+12, posYbot11+25, tambot11/6, tambot11/6);
  rect(posXbot11+22, posYbot11+25, tambot11/6, tambot11/6);
  rect(posXbot11+18, posYbot11+33, tambot11/7, tambot11/7);
  
  
  
  //botones colores
  stroke(0, 0, 0);
  fill(255, 51, 51);
  ellipse(posXbot12, posYbot12, tambot12, tambot12);
  fill(255, 175, 51);
  ellipse(posXbot13, posYbot13, tambot13, tambot13);
  //line(posXbot2, posYbot2, posXbot2+tambot2, posYbot2+tambot2);
  fill(255, 246, 51);
  ellipse(posXbot14, posYbot14, tambot14, tambot14);
  fill(54, 255, 51);
  ellipse(posXbot15, posYbot15, tambot15, tambot15);
  fill(51, 255, 199);
  ellipse(posXbot16, posYbot16, tambot16, tambot16);
  fill(51, 181, 255);
  ellipse(posXbot17, posYbot17, tambot17, tambot17);
  fill(150, 51, 255)
  ellipse(posXbot18, posYbot18, tambot18, tambot18);
  fill(199, 51, 255);
  ellipse(posXbot19, posYbot19, tambot19, tambot19);
  fill(255, 51, 168);
  ellipse(posXbot20, posYbot20, tambot20, tambot20);
  fill(51, 70, 255);
  ellipse(posXbot21, posYbot21, tambot21, tambot21);

  if (mouseIsPressed == true) {
    
    //colores

      if (colores == 1) {
        stroke(255, 51, 51);
      }
      if (colores == 2) {
        stroke(255, 175, 51);
      }
      if (colores == 3) {
        stroke(255, 246, 51);
      }
      if (colores == 4) {
        stroke(54, 255, 51);
      }
      if (colores == 5) {
        stroke(51, 255, 199);
      }
      if (colores == 6) {
        stroke(51, 181, 255);
      }
      if (colores == 7) {
        stroke(150, 51, 255);
      }
      if (colores == 8) {
        stroke(199, 51, 255);
      }
      if (colores == 9) {
        stroke(255, 51, 168);
      }
      if (colores == 10) {
        stroke(51, 70, 255);
      }

    //herramientas
    if (herramienta == 1) {
      noFill ();
        //strokeWeight(10.0);
        //strokeJoin(MITER);
        beginShape();
        vertex(pmouseX, pmouseY);
        vertex(pmouseX * 5, pmouseY * 5);
        vertex(pmouseX+6, pmouseY+6);
        endShape()
    }

      if (herramienta == 2) {
        noFill ();
        //stroke(255, 102, 0);
        line(pmouseX, pmouseY, pmouseX, pmouseY);
        line(pmouseX + 10, pmouseY + 10, pmouseX +25,  pmouseY + 80);
        //stroke(0, 0, 0);
        bezier(pmouseX + 10, pmouseY + 10, pmouseX +25, pmouseY+25, pmouseX + 10,
               pmouseX + 10, pmouseY + 10, 80);
  
      }
      if (herramienta == 3) {
        noFill ();
        arc(mouseX * 2, mouseY * 2, 500, 500, 0, PI + QUARTER_PI, OPEN);
        
      }
      if (herramienta == 4) {
        noFill ();
           arc(mouseX * 2, mouseY * 2, 500, 500, 0, HALF_PI, PI);
        arc(mouseX * 2, mouseY * 2, 300, 300, 0, HALF_PI, PI);
       
      }
      if (herramienta == 5) {
        noFill ();
        ellipse(mouseX, mouseY, mouseX + 40, mouseY + 40);
        ellipse(mouseX - 5, mouseY - 5, mouseX / 2, mouseY / 2);
    
      }
      if (herramienta == 6) {
        noFill ();
            line(pmouseX, pmouseY, mouseX, mouseY);
        ellipse(mouseX, mouseY, 100, 100);
       
      }
      if (herramienta == 7) {
        noFill();
         rect(pmouseX, pmouseY, 60, 100);
        rect(pmouseX*2, pmouseY*2, 60, 100);
         rect(pmouseX*3, pmouseY*3, 60, 100);
    
      }
      if (herramienta == 8) {
        noFill ();
            line(pmouseX, pmouseY, pmouseX*2, pmouseY*2 );
        rect(pmouseX*2, pmouseY*2, pmouseX*2, pmouseY*2);
     
        
      }
      if (herramienta == 9) {
        noFill ();
              triangle(mouseX, mouseY, mouseX*2, mouseY, mouseX*2, mouseY*2)
      }
      if (herramienta == 10) {
        noFill ();
        rect(pmouseX, pmouseY, pmouseX, pmouseY);
        rect(pmouseX+30, pmouseY+30, pmouseX/4, pmouseY/4);
        rect(pmouseX+30, pmouseY+90, pmouseX/4, pmouseY/4);
        rect(pmouseX+150, pmouseY+30, pmouseX/4, pmouseY/4);
        rect(pmouseX+150, pmouseY+90, pmouseX/4, pmouseY/4);
        rect(pmouseX+100, pmouseY+134, pmouseX/6, pmouseY/6);
        triangle(mouseX, mouseY, mouseX*2, mouseY, mouseX+124, mouseY/2)
        
      }
      
    }



    //herramientas
    if (mouseX > posXbot1 && mouseX < posXbot1 + tambot1 &&
      mouseY > posYbot1 && mouseY < posYbot1 + tambot1) {
      background(220);
    }
    if (mouseX > posXbot2 && mouseX < posXbot2 + tambot2 &&
      mouseY > posYbot2 && mouseY < posYbot2 + tambot2) {
      herramienta = 1;
    }
    if (mouseX > posXbot3 && mouseX < posXbot3 + tambot3 &&
      mouseY > posYbot3 && mouseY < posYbot3 + tambot3) {
      herramienta = 2;
    }
    if (mouseX > posXbot4 && mouseX < posXbot4 + tambot4 &&
      mouseY > posYbot4 && mouseY < posYbot4 + tambot4) {
      herramienta = 3;
    }
    if (mouseX > posXbot5 && mouseX < posXbot5 + tambot5 &&
      mouseY > posYbot5 && mouseY < posYbot5 + tambot5) {
      herramienta = 4;
    }
    if (mouseX > posXbot6 && mouseX < posXbot6 + tambot6 &&
      mouseY > posYbot6 && mouseY < posYbot6 + tambot6) {
      herramienta = 5;
    }
    if (mouseX > posXbot7 && mouseX < posXbot7 + tambot7 &&
      mouseY > posYbot7 && mouseY < posYbot7 + tambot7) {
      herramienta = 6;
    }
    if (mouseX > posXbot8 && mouseX < posXbot8 + tambot8 &&
      mouseY > posYbot8 && mouseY < posYbot8 + tambot8) {
      herramienta = 7;
    }
    if (mouseX > posXbot9 && mouseX < posXbot9 + tambot9 &&
      mouseY > posYbot9 && mouseY < posYbot9 + tambot9) {
      herramienta = 8;
    }
    if (mouseX > posXbot10 && mouseX < posXbot10 + tambot10 &&
      mouseY > posYbot10 && mouseY < posYbot10 + tambot10) {
      herramienta = 9;
    }
    if (mouseX > posXbot11 && mouseX < posXbot11 + tambot11 &&
      mouseY > posYbot11 && mouseY < posYbot11 + tambot11) {
      herramienta = 10;
    }

  //colores
  if (mouseX > posXbot11 && mouseX < posXbot11 + tambot11 &&
    mouseY > posYbot11 && mouseY < posYbot11 + tambot11) {
    colores = 1;
  }
  if (mouseX > posXbot12 && mouseX < posXbot12 + tambot12 &&
    mouseY > posYbot12 && mouseY < posYbot12 + tambot12) {
    colores = 2;
  }
  if (mouseX > posXbot13 && mouseX < posXbot13 + tambot13 &&
    mouseY > posYbot13 && mouseY < posYbot13 + tambot13) {
    colores = 3;
  }
  if (mouseX > posXbot14 && mouseX < posXbot14 + tambot14 &&
    mouseY > posYbot14 && mouseY < posYbot14 + tambot14) {
    colores = 4;
  }
  if (mouseX > posXbot15 && mouseX < posXbot15 + tambot15 &&
    mouseY > posYbot15 && mouseY < posYbot15 + tambot15) {
    colores = 5;
  }
  if (mouseX > posXbot16 && mouseX < posXbot16 + tambot16 &&
    mouseY > posYbot16 && mouseY < posYbot16 + tambot16) {
    colores = 6;
  }
  if (mouseX > posXbot17 && mouseX < posXbot17 + tambot17 &&
    mouseY > posYbot17 && mouseY < posYbot17 + tambot17) {
    colores = 7;
  }
  if (mouseX > posXbot18 && mouseX < posXbot18 + tambot18 &&
    mouseY > posYbot18 && mouseY < posYbot18 + tambot18) {
    colores = 8;
  }
  if (mouseX > posXbot19 && mouseX < posXbot19 + tambot19 &&
    mouseY > posYbot19 && mouseY < posYbot19 + tambot19) {
    colores = 9;
  }
  if (mouseX > posXbot20 && mouseX < posXbot20 + tambot20 &&
    mouseY > posYbot20 && mouseY < posYbot20 + tambot20) {
    colores = 10;
  }
}

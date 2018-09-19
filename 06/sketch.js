var imagenFondo;
var imagenLateral;
var miCancion;
var miAmplitud;
var sonido1;
var sonido2;
var chavo;
var estrellas;

function preload() {
  imagenFondo = loadImage('VideoInter/planeta.jpg');
  imagenLateral = loadImage('VideoInter/extraterrestre.png');
  chavo = loadImage('VideoInter/el-chavo.png');
  estrellas = loadImage('VideoInter/estrellas.png');
  miCancion = loadSound('VideoInter/simiolo.mp3');
  sonido1 = loadSound('VideoInter/chavo.mp3');
  sonido2 = loadSound('VideoInter/chapulin.mp3');
sonido3 = loadSound('VideoInter/homero.mp3');
}

function setup() {
  createCanvas(1300, 1000);
  miAmplitud = new p5.Amplitude();
  miAmplitud.setInput(miCancion);

}

function draw() {
  background(0, 0, 0);
  image(imagenFondo, 0, 0, width, height - 150);

  //suena canción
  if (miCancion.isPlaying() == false) {
    var tTotal = miCancion.duration();
    miCancion.play();
  }
//amplitud canción (círculos verdes)
  var miTamano = map(miAmplitud.getLevel(), 0, 1, 0, 800);
  noFill();
  stroke(87, 249, 51);
  ellipse(width / 2, height / 2 - 50, miTamano + 250, miTamano + 250);
  ellipse(width / 2, height / 2 - 50, miTamano + 200, miTamano + 200);
  ellipse(width / 2, height / 2 - 50, miTamano + 100, miTamano + 100);
  ellipse(width / 2, height / 2 - 50, miTamano + 50, miTamano + 50);
  ellipse(width / 2, height / 2 - 50, miTamano, miTamano);
  ellipse(width / 2, height / 2 - 50, miTamano / 2, miTamano / 2);
  ellipse(width / 2, height / 2 - 50, miTamano / 2 - 50, miTamano / 2 - 50);

//estereo canción 
    var miPan = map(mouseX, 0, width, -1, 1);
    miCancion.pan(miPan);
  if(miPan >0){
    fill(250)
    ellipse(width / 2 +500, height / 4+50, 200, 100)
    ellipse(width / 2 +500, height / 4+120, 40, 20)
    ellipse(width / 2 +500, height / 4+150, 20, 10)
          textFont('Poor Story');
    textSize(40)
    fill(0)
    stroke(0, 0, 0);
    text('%&*/#!!!', width / 2 +425, height / 4+60);
  }

  //imagen extraterreste
  if (miCancion.currentTime() > 12) {
    image(imagenLateral, width - 370, height / 3 + 80, 310, 400);
  }
  
  //boca extraterrestre
  if (miTamano > 100) {
    for (var i = 0; i < width; i = i + 1) {
      noStroke()
      fill(0, 0, 0);
      ellipse(width - 215, height / 2 + 255, 59, 59);
    }
  }
  //posición 1 ovnis
      if(miCancion.currentTime() > 35 ){
             fill (127, 130, 125);
       ellipse(width/2-220, height/2-230,53, 50);
                 fill (147, 150, 145);
        ellipse(width/2-220, height/2-220, 105, 33); 
        fill (127, 130, 125);
       ellipse(width/2-310, height/2-420,53, 50);
        fill (147, 150, 145);
        ellipse(width/2-310, height/2-410, 105, 33); 
        fill (127, 130, 125);
       ellipse(width/2-180, height/2-350,53, 50);
        fill (147, 150, 145);
        ellipse(width/2-180, height/2-340, 105, 33); 
    }
  //posición 2 ovnis
        if(miCancion.currentTime() > 65 ){
             fill (74, 73, 70);
       ellipse(width/2-10, height/2-60,33, 30);
              fill (103, 101, 98);
        ellipse(width/2-10, height/2-50, 80, 23); 
       fill (74, 73, 70);
       ellipse(width/2-150, height/2-120,33, 30);
        fill (103, 101, 98);
        ellipse(width/2-150, height/2-110, 80, 23); 
        fill (74, 73, 70);
      ellipse(width/2-40, height/2-190,33, 30);
        fill (103, 101, 98);
       ellipse(width/2-40, height/2-180, 80, 23); 
   }
  //TEXTOS
  //nombre autor y canción
         textFont('Poor Story');
  textSize(40)
  fill(255)
  stroke(87, 249, 51);
  text('Dengue, Dengue, Dengue', width / 2 + 250, height - 90)
  text('Simiolo', width / 2 + 490, height - 40)
      //nomenclatura para stereo
           textFont('Poor Story');
  textSize(40)
  fill(255)
  stroke(87, 249, 51);
  text('+L', width/ 2-620, height/4 -200)
  text('+R', width / 2+560, height/4 -200)


  //variables botones
  var posXbot1 = width / 2 - 300;
  var posYbot1 = height - 60;
var posXbot2 = width / 2 - 380;
      var posYbot2 = height - 60;
  var posXbot3 = width / 2 - 460;
      var posYbot3 = height - 60;
   // var posXbot4 = width / 2 - 540;
     // var posYbot4 = height - 60;
     var tambot1 = 50;
      var tambot2 = 50;
 var tambot3 = 50;
 //  var tambot4 = 50;
  
  var sonido = 1;
  var herramienta = 1

//botones  
  fill(249, 51, 125);
  ellipse(posXbot1, posYbot1, tambot1, tambot1);
          fill(87, 249, 51);
  ellipse(posXbot2, posYbot2, tambot2, tambot2);
          fill(245, 160, 28);
  ellipse(posXbot3, posYbot3, tambot3, tambot3);
            //fill(245, 160, 28);
 // ellipse(posXbot4, posYbot4, tambot4, tambot4);


  if (mouseIsPressed == true) {

//ovni al hacer click con mouse
     if (herramienta == 1) {
            noStroke ();
       fill (127, 130, 125);
       ellipse(mouseX, mouseY-10,53, 50);
                 fill (147, 150, 145);
        ellipse(mouseX, mouseY, 105, 33);      
     }
 //sonidos botones   
       if (mouseX > posXbot1 && mouseX < posXbot1 + tambot1 &&
      mouseY > posYbot1 && mouseY < posYbot1 + tambot1) {
      sonido1.play();
        }
    
      if (mouseX > posXbot2 && mouseX < posXbot2 + tambot2 &&
      mouseY > posYbot2 && mouseY < posYbot2 + tambot2) {
      sonido2.play();
        }
     if (mouseX > posXbot3&& mouseX < posXbot3 + tambot3 &&
      mouseY > posYbot3 && mouseY < posYbot3 + tambot3) {
      sonido3.play();
        }
         //if (mouseX > posXbot4&& mouseX < posXbot4 + tambot4 &&
      //mouseY > posYbot4 && mouseY < posYbot4 + tambot4) {
          //tint(255,0,150);
    //image(imagenLateral, width - 370, height / 3 + 80, 310, 400);
        }
          
     if (mouseIsPressed == false) {      
       
      if (imagenFondo<1300){
    }

     }
  }

var mosquito;
var sapo;
var serpiente;
var pajaro;
var hormiga;
var hierba;
var misMosquitos = [];
var misSapos = [];
var misSerpientes = [];
var misPajaros = [];
var misHormigas = [];


function preload() {
  mosquito = loadImage('ecosistema/mosquito.png');
  sapo = loadImage('ecosistema/sapo.png');
  serpiente = loadImage('ecosistema/serpiente.png');
  pajaro = loadImage('ecosistema/pajaro.png');
  hormiga = loadImage('ecosistema/hormiga.png');
hierba = loadImage('ecosistema/hierba.png');
}

function setup() {
  createCanvas(1000, 1000);



}

function draw() {
    fill(11, 195, 240);
  noStroke();
  rect(0, 0, 1000, 1000);
  fill(98, 240, 11);
  noStroke();
  rect(0, 500, 1000, 1000);
  
   image(hierba, 0, 400, 300, 100);
  image(hierba, 300, 400, 300, 100);
  image(hierba, 600, 400, 300, 100);
  image(hierba, 100, 800, 300, 80);
  image(hierba, 680, 600, 300, 80);
  image(hierba, 500, 930, 300, 80);

  if (frameCount % 80 == 0) {
    misMosquitos[misMosquitos.length] = new animal1(random(0, width),
      random(200, height/2+200));
  }
  if (frameCount % 90 == 0) {
   misSapos[misSapos.length] = new animal2 (random(0, width),
  random(500, height));
  }
  if (frameCount % 500== 0) {
  misSerpientes[misSerpientes.length] = new animal3 (random(0, width),
   random(700, height));
  }
    if (frameCount % 80 == 0) {
  misPajaros[misPajaros.length] = new animal4 (random(0, width),
    random(200, height/3));
  }
  if (frameCount % 30 == 0) {
   misHormigas[misHormigas.length] = new animal5 (random(0, width),
  random(500, height));
  }

  for (var i = 0; i < misMosquitos.length; i = i + 1) {
    misMosquitos[i].dibujarse();
    misMosquitos[i].moverse();
  
   if (misMosquitos[i].edad > 300) {
    misMosquitos[i].morirse();
  }
          if(mouseIsPressed==true){
   if (dist(mouseX, mouseY, misMosquitos[i].x, misMosquitos[i].y) <40){
     misMosquitos[i].morirse();
  }
              }
  }

  
  for (var i = 0; i < misSapos.length; i = i + 1) {
  misSapos[i].dibujarse();
  misSapos[i].moverse();
     if (misSapos[i].edad > 600) {
    misSapos[i].morirse();
  }
  }

    for (var i = 0; i < misSerpientes.length; i = i + 1) {
  misSerpientes[i].dibujarse();
  misSerpientes[i].moverse();
      if (misSerpientes[i].edad > 800) {
    misSerpientes[i].morirse();
        
//if (mouseIsPressed == true) {
  //image(serpiente, mouseX/2, mouseY, 150, 150)
  //if (dist(mouseX, mouseY, misSapos[i].x, misSapos[i].y) <10){
   //  misSapos[i].morirse();
//}
//}
  }
  }
   for (var i = 0; i < misPajaros.length; i = i + 1) {
  misPajaros[i].dibujarse();
   misPajaros[i].moverse();
     if (misPajaros[i].edad > 600) {
    misPajaros[i].morirse();
  }
  }
       for (var i = 0; i < misHormigas.length; i = i + 1) {
  misHormigas[i].dibujarse();
  misHormigas[i].moverse();
       if (misHormigas[i].edad > 100) {
    misHormigas[i].morirse();
  }
  }
}

  
function animal1(miX, miY) {
  // caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 1;
  this.edad = 0;
  this.estaViva = true;
  //habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(mosquito, this.x, this.y, 50,50)
    }
  };
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random (-1,1);
    this.edad = this.edad + 1;
  };
  this.morirse = function() {
    this.estaViva = false;
  };
}

function animal2(miX, miY) {
  // caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 20;
  this.edad = 0;
  this.estaViva = true;
  //habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(sapo, this.x, this.y, 100, 100)
    }
  };
  this.moverse = function() {
    //this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.edad = this.edad + 1;
  };
  this.morirse = function() {
    this.estaViva = false;
  };
}

function animal3(miX, miY) {
  // caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 20;
  this.edad = 0;
  this.estaViva = true;
  //habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(serpiente, this.x, this.y, 150, 150)
    }
  };
  this.moverse = function() {
    this.x = this.x + random(-1);
    //this.y = this.y + random(-1, 1);
    this.edad = this.edad + 1;
  };
  this.morirse = function() {
    this.estaViva = false;
  };
}

function animal4(miX, miY) {
  // caracteristicas
  this.x = miX;
  this.y = miY/2;
  this.tam = 20;
  this.edad = 0;
  this.estaViva = true;
  //habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(pajaro, this.x, this.y, 90, 60)
    }
  };
  this.moverse = function() {
    this.x = this.x + random(-1);
    //this.y = this.y + random(-1, 1);
    this.edad = this.edad + 1;
  };
  this.morirse = function() {
    this.estaViva = false;
  };
}

function animal5(miX, miY) {
  // caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 20;
  this.edad = 0;
  this.estaViva = true;
  //habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(hormiga, this.x, this.y, 50, 50)
    }
  };
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1);
    this.edad = this.edad + 1;
  };
  this.morirse = function() {
    this.estaViva = false;
  };
}


//function serpienteComeHormiga (){
  //for(var t = 0; t <misSerpientes.length; t = t +1){
   // for(var j = 0; j<misHormigas.length; j = j +1){
     // if(dist(misSerpientes[t].x + 20, misSerpientes[t].y + 30,misHormigas[j].x, misHormigas[j].y) <30){
       // misSerpientes[t].morirse()
      //}
   // }
 // }
//}
     
     
     
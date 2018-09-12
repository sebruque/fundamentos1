var X_AXIS = 1;
var b1, b2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //colores
  b1 = color(49, 108, 198);
  b2 = color(248, 249, 111);
  c1 = color(250, 250, 250);
  c2 = color(248, 249, 111);

}

function draw() {

  miHora = hour();
  misMinutos = minute();
  miSegundo = second();

  // Fondo
  setGradient(0, 0, windowWidth / 2, windowHeight, b1, b2, X_AXIS);
  setGradient(windowWidth / 2, 0, windowWidth / 2, windowHeight, b2, b1, X_AXIS);
  
  // Visualizar Hora
  var miNuevaHora = map(miHora, 1, 23, 0, windowWidth)
  stroke(226, 155, 246)
  line(miNuevaHora, windowHeight, miNuevaHora, 0);
}

function setGradient(x, y, w, h, b1, b2, axis) {

  // Gradiente
  noFill();
  if (axis == X_AXIS) { 
    for (var i = x; i <= x + w; i++) {
      var inter = map(i, x, x + w, 0, 1);
      var c = lerpColor(b1, b2, inter);
      stroke(c);
      line(i, y, i, y + h);

//Visualizar Minutos
      noStroke();
      ellipse(windowWidth / 2, windowHeight / 2, 80, 80);
      var inter = map(miSegundo, 0, 59, 0, windowWidth / 2)
      var miNuevoSegundo1 = lerpColor(c1, c2, inter);
      fill(miNuevoSegundo1)

      //Visualizar Segundos
      push();
      translate(width / 2, height / 2);
      var miNuevoSegundo = map(miSegundo, 0, 59, 0, 359);
      var anguloRadianesSeg = radians(miNuevoSegundo)
      rotate(anguloRadianesSeg)
      noStroke()
      //ellipse(0,-60, 20, 20);
      //ellipse(0,-70, 30, 30);
      ellipse(0, -110, 40, 40);
      pop();

    }
  }

}
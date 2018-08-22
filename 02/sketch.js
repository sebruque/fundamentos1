var x = 10
var y = 10
var a = 10
var b = 10

function setup() {
  createCanvas(340, 340);
  background(254, 254, 246);
  
  fill(0)
  noStroke()
  triangle(x, y, x, y + a, x + a, y + a)

  //primera línea figura 1
  for (var o = 0; o <= 7; o = o + 4) {
    triangle(x + 10, y + (o * a), x + 10, y + a + (o * a),
      x + 10 + b, y + a + (o * a))
  }
  //primera línea figura 2
    for (var i = 2; i <= 8; i = i + 4) {
      triangle(x + (i * a), y, x + ((i + 1) * a), y,
        x + ((i + 1) * a), y + a); 
    }
  //primera línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 10, x + (i * a), y + 10 + a,
       x + (i * a) + b, y + 10 + a) 
  }
  //primera línea figura 2
for (var i = 3; i <= 8; i = i + 4) {
      triangle(x + (i * a), y, x + ((i + 1) * a), y,
        x + ((i + 1) * a), y + a); 
     }
  //segunda línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + 30 + (i * a), y + 20, x + 30 + (i * a),
        y + 20 + a, x + 30 + (i * a) + b, y + 20 + a)  
  }
  //segunda línea figura 2
  for (var i = 1; i <= 8; i = i + 4) {
      triangle(x + (i * a), y + a, x + ((i + 1) * a), y + a,
        x + ((i + 1) * a), y + 2*a); 
    }
  //segunda línea figura 1 
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x + 30, y + 10 + (i * a), x + 30,
      y + 10 + a + (i * a), x + 30 + b,
      y + 10 + a + (i * a))
    }
  //segunda línea figura 2
   for (var i = 2; i <= 8; i = i + 4) {
      triangle(x + (i * a), y + a, x + ((i + 1) * a), y + a,
        x + ((i + 1) * a), y + 2*a);
     }
  //tercera línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + 10 + (i * a), y + 30, x + 10 + (i * a),
        y + 30 + a, x + 10 + (i * a) + b,
        y + 30 + a)
    }
  //tercera línea figura 2
     for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 2*a, x + ((i + 1) * a), y + 2*a,
        x + ((i + 1) * a), y + 3*a);
       }
  //tercera línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x + (i * a), y + 40, x + (i * a), y + 40 + a,
      x + (i * a) + b, y + 40 + a)
     }
       for (var i = 0; i <= 1; i = i + 2) {
        triangle(x + 20, y + 20 + (i * a), x + 20,
          y + 20 + a + (i * a), x + 20 + b,
          y + 20 + a + (i * a))
           }
  //tercera línea figura 2
     for (var i = 1; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 2*a, x + ((i + 1) * a), y + 2*a,
        x + ((i + 1) * a), y + 3*a);
        }
  //cuarta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 50, x + (i * a), y + 50 + a,
        x + (i * a) + b, y + 50 + a)
    }
  //cuarta línea figura 2
       for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 3*a, x + ((i + 1) * a), y + 3*a,
        x + ((i + 1) * a), y + 4*a);
        }  
  //cuarta línea figura 1
  for (var i = 0; i <= 3; i = i + 4) {
    triangle(x + 10, y + 70 + (i * a), x + 10,
      y + 70 + a + (i * a), x + 10 + b,
      y + 70 + a + (i * a))
      }
  //cuarta línea figura 2
      for (var i = 3; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 3*a, x + ((i + 1) * a), y + 3*a,
        x + ((i + 1) * a), y + 4*a);
        }  
  //quinta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + 20, y + 30 + (i * a), x + 20,
        y + 30 + a + (i * a), x + 20 + b,
        y + 30 + a + (i * a))
    }
  //quinta línea figura 2
       for (var i = 2; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 4*a, x + ((i + 1) * a), y + 4*a,
        x + ((i + 1) * a), y + 5*a);
        }  
  //quinta línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x + 30 + (i * a), y + 60,
      x + 30 + (i * a), y + 60 + a,
      x + 30 + (i * a) + b, y + 60 + a)
      }
  //quinta línea figura 2
      for (var i = 3; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 4*a, x + ((i + 1) * a), y + 4*a,
        x + ((i + 1) * a), y + 5*a);
        }  
  //sexta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + 50, y + (i * a), x + 50,
        y + a + (i * a), x + 50 + b,
        y + a + (i * a))
    }
  //sexta línea figura 2
        for (var i = 1; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 5*a, x + ((i + 1) * a), y + 5*a,
        x + ((i + 1) * a), y + 6*a);
        } 
  //sexta línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x + 60, y + 30 + (i * a), x + 60,
      y + 30 + a + (i * a), x + 60 + b,
      y + 30 + a + (i * a))
      }
  //sexta línea figura 2
          for (var i = 2; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 5*a, x + ((i + 1) * a), y + 5*a,
        x + ((i + 1) * a), y + 6*a);
        } 
  //séptima línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + 60, y + 20 + (i * a), x + 60,
        y + 20 + a + (i * a), x + 60 + b,
        y + 20 + a + (i * a))
        }
  //séptima línea figura 2
         for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 6*a, x + ((i + 1) * a), y + 6*a,
        x + ((i + 1) * a), y + 7*a);
        } 
  //séptima línea figura 1
      for (var i = 0; i <= 7; i = i + 4) {
        triangle(x + 70, y + 10 + (i * a), x + 70,
          y + 10 + a + (i * a), x + 70 + b,
          y + 10 + a + (i * a))
      }
      for (var i = 0; i <= 1; i = i + 2) {
        triangle(x + 20, y + 60 + (i * a), x + 20,
          y + 60 + a + (i * a), x + 20 + b,
          y + 60 + a + (i * a))
         }
  //séptima línea figura 2
      for (var i = 1; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 6*a, x + ((i + 1) * a), y + 6*a,
        x + ((i + 1) * a), y + 7*a);
        } 
  //octava línea figura 1
  for (var i = 0; i <= 3; i = i + 4) {
    triangle(x + 50 + (i * a), y + 70,
      x + 50 + (i * a), y + 70 + a,
      x + 50 + (i * a) + b, y + 70 + a)
      }
  //octava línea figura 2
     for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 7*a, x + ((i + 1) * a), y + 7*a,
        x + ((i + 1) * a), y + 8*a);
        } 
  //octava línea figura 1
    for (var i = 0; i <= 3; i = i + 4) {
      triangle(x + 40 + (i * a), y,
        x + 40 + (i * a), y + a,
        x + 40 + (i * a) + b, y + a)
    }
  //octava línea figura 2
    for (var i = 3; i <= 7; i = i + 4) {
      triangle(x + (i * a), y + 7*a, x + ((i + 1) * a), y + 7*a,
        x + ((i + 1) * a), y + 8*a);
        } 
//SEGUNDA FIGURA

  triangle(17*x, y, 17*x, y + a, 17*x + a, y + a)

  //primera línea figura 1
  for (var o = 0; o <= 7; o = o + 4) {
    triangle(x*17 + 10, y + (o * a), x*17 + 10, y + a + (o * a),
      x*17 + 10 + b, y + a + (o * a))
  }
  //primera línea figura 2
    for (var i = 2; i <= 8; i = i + 4) {
      triangle(x*17 + (i * a), y, x*17 + ((i + 1) * a), y,
        x*17 + ((i + 1) * a), y + a); 
    }
  //primera línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 10, x*17 + (i * a), y + 10 + a,
       x*17 + (i * a) + b, y + 10 + a) 
  }
  //primera línea figura 2
for (var i = 3; i <= 8; i = i + 4) {
      triangle(x*17 + (i * a), y, x*17 + ((i + 1) * a), y,
        x*17 + ((i + 1) * a), y + a); 
     }
  //segunda línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + 30 + (i * a), y + 20, x*17 + 30 + (i * a),
        y + 20 + a, x*17 + 30 + (i * a) + b, y + 20 + a)  
  }
  //segunda línea figura 2
  for (var i = 1; i <= 8; i = i + 4) {
      triangle(x*17 + (i * a), y + a, x*17 + ((i + 1) * a), y + a,
        x*17 + ((i + 1) * a), y + 2*a); 
    }
  //segunda línea figura 1 
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x*17 + 30, y + 10 + (i * a), x*17 + 30,
      y + 10 + a + (i * a), x*17 + 30 + b,
      y + 10 + a + (i * a))
    }
  //segunda línea figura 2
   for (var i = 2; i <= 8; i = i + 4) {
      triangle(x*17 + (i * a), y + a, x*17 + ((i + 1) * a), y + a,
        x*17 + ((i + 1) * a), y + 2*a);
     }
  //tercera línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + 10 + (i * a), y + 30, x*17 + 10 + (i * a),
        y + 30 + a, x*17 + 10 + (i * a) + b,
        y + 30 + a)
  }
  //tercera línea figura 2
     for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 2*a, x*17 + ((i + 1) * a), y + 2*a,
        x*17 + ((i + 1) * a), y + 3*a);
       }
  //tercera línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x*17 + (i * a), y + 40, x*17 + (i * a), y + 40 + a,
      x*17 + (i * a) + b, y + 40 + a)
     }
       for (var i = 0; i <= 1; i = i + 2) {
        triangle(x*17 + 20, y + 20 + (i * a), x*17 + 20,
          y + 20 + a + (i * a), x*17 + 20 + b,
          y + 20 + a + (i * a))
           }
  //tercera línea figura 2
     for (var i = 1; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 2*a, x*17 + ((i + 1) * a), y + 2*a,
        x*17 + ((i + 1) * a), y + 3*a);
        }
  //cuarta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 50, x*17 + (i * a), y + 50 + a,
        x*17 + (i * a) + b, y + 50 + a)
    }
  //cuarta línea figura 2
       for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 3*a, x*17 + ((i + 1) * a), y + 3*a,
        x*17 + ((i + 1) * a), y + 4*a);
        }  
  //cuarta línea figura 1
  for (var i = 0; i <= 3; i = i + 4) {
    triangle(x*17 + 10, y + 70 + (i * a), x*17 + 10,
      y + 70 + a + (i * a), x*17 + 10 + b,
      y + 70 + a + (i * a))
      }
  //cuarta línea figura 2
      for (var i = 3; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 3*a, x*17 + ((i + 1) * a), y + 3*a,
       x*17 + ((i + 1) * a), y + 4*a);
        }  
  //quinta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + 20, y + 30 + (i * a), x*17 + 20,
        y + 30 + a + (i * a), x*17 + 20 + b,
        y + 30 + a + (i * a))
    }
  //quinta línea figura 2
       for (var i = 2; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 4*a, x*17 + ((i + 1) * a), y + 4*a,
        x*17 + ((i + 1) * a), y + 5*a);
        }  
  //quinta línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x*17 + 30 + (i * a), y + 60,
      x*17 + 30 + (i * a), y + 60 + a,
     x*17 + 30 + (i * a) + b, y + 60 + a)
      }
  //quinta línea figura 2
      for (var i = 3; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 4*a, x*17 + ((i + 1) * a), y + 4*a,
       x*17 + ((i + 1) * a), y + 5*a);
        }  
  //sexta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
    triangle(x*17 + 50, y + (i * a), x*17 + 50,
      y + a + (i * a), x*17 + 50 + b,
      y + a + (i * a))
    }
  //sexta línea figura 2
        for (var i = 1; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 5*a, x*17 + ((i + 1) * a), y + 5*a,
       x*17 + ((i + 1) * a), y + 6*a);
        } 
  //sexta línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
   triangle(x*17 + 60, y + 30 + (i * a), x*17 + 60,
     y + 30 + a + (i * a), x*17 + 60 + b,
      y + 30 + a + (i * a))
      }
  //sexta línea figura 2
      for (var i = 2; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 5*a, x*17 + ((i + 1) * a), y + 5*a,
       x*17 + ((i + 1) * a), y + 6*a);
       } 
  //séptima línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
     triangle(x*17 + 60, y + 20 + (i * a), x*17 + 60,
        y + 20 + a + (i * a), x*17 + 60 + b,
        y + 20 + a + (i * a))
        }
  //séptima línea figura 2
        for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 6*a, x*17 + ((i + 1) * a), y + 6*a,
       x*17 + ((i + 1) * a), y + 7*a);
        } 
  //séptima línea figura 1
      for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + 70, y + 10 + (i * a), x*17 + 70,
        y + 10 + a + (i * a), x*17 + 70 + b,
        y + 10 + a + (i * a))
      }
    for (var i = 0; i <= 1; i = i + 2) {
      triangle(x*17 + 20, y + 60 + (i * a), x*17 + 20,
        y + 60 + a + (i * a), x*17 + 20 + b,
        y + 60 + a + (i * a))
         }
  //séptima línea figura 2
    for (var i = 1; i <= 7; i = i + 4) {
    triangle(x*17 + (i * a), y + 6*a, x*17 + ((i + 1) * a), y + 6*a,
      x*17 + ((i + 1) * a), y + 7*a);
      } 
  //octava línea figura 1
  for (var i = 0; i <= 3; i = i + 4) {
  triangle(x*17 + 50 + (i * a), y + 70,
  x*17 + 50 + (i * a), y + 70 + a,
  x*17 + 50 + (i * a) + b, y + 70 + a)
    }
  //octava línea figura 2
     for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 7*a, x*17 + ((i + 1) * a), y + 7*a,
       x*17 + ((i + 1) * a), y + 8*a);
        } 
  //octava línea figura 1
  for (var i = 0; i <= 3; i = i + 4) {
    triangle(x*17 + 40 + (i * a), y,
        x*17 + 40 + (i * a), y + a,
        x*17 + 40 + (i * a) + b, y + a)
    }
  //octava línea figura 2
    for (var i = 3; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y + 7*a, x*17 + ((i + 1) * a), y + 7*a,
        x*17 + ((i + 1) * a), y + 8*a);
        } 
  
  //TERCERA FIGURA
    fill(242, 222, 96)
  noStroke()
  triangle(x*17, y*17, x*17, y*17 + a, x*17 + a, y*17 + a)

  //primera línea figura 1
  for (var o = 0; o <= 7; o = o + 4) {
    triangle(x*17 + 10, y*17 + (o * a), x*17 + 10, 
             y*17 + a + (o * a),
      x*17 + 10 + b, y*17 + a + (o * a))
  }
  //primera línea figura 2
    for (var i = 2; i <= 8; i = i + 4) {
      triangle(x*17 + (i * a), y*17, x*17 + ((i + 1) * a), 
               y*17, x*17 + ((i + 1) * a), y*17 + a); 
    }
  //primera línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 10, x*17 + (i * a), 
               y*17 + 10 + a,
       x*17 + (i * a) + b, y*17 + 10 + a) 
  }
  //primera línea figura 2
for (var i = 3; i <= 8; i = i + 4) {
      triangle(x*17 + (i * a), y*17, x*17 + ((i + 1) * a), y*17,
        x*17 + ((i + 1) * a), y*17 + a); 
     }
  //segunda línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + 30 + (i * a), 
               y*17 + 20, x*17 + 30 + (i * a),
        y*17 + 20 + a, x*17 + 30 + (i * a) + b, y*17 + 20 + a)  
  }
  //segunda línea figura 2
  for (var i = 1; i <= 8; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + a, 
               x*17 + ((i + 1) * a), y*17 + a,
        x*17 + ((i + 1) * a), y*17 + 2*a); 
    }
  //segunda línea figura 1 
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x*17 + 30, y*17 + 10 + (i * a), x*17 + 30,
      y*17 + 10 + a + (i * a), x*17 + 30 + b,
      y*17 + 10 + a + (i * a))
    }
  //segunda línea figura 2
   for (var i = 2; i <= 8; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + a, 
               x*17 + ((i + 1) * a), y*17 + a,
        x*17 + ((i + 1) * a), y*17 + 2*a);
     }
  //tercera línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + 10 + (i * a), y*17 + 30, x*17 + 10 + (i * a),
        y*17 + 30 + a, x*17 + 10 + (i * a) + b,
        y*17 + 30 + a)
    }
  //tercera línea figura 2
     for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 2*a, x*17 + ((i + 1) * a), 
               y*17 + 2*a, x*17 + ((i + 1) * a), y*17 + 3*a);
       }
  //tercera línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x*17 + (i * a), y*17 + 40, x*17 + (i * a), y*17 + 40 + a,
      x*17 + (i * a) + b, y*17 + 40 + a)
     }
       for (var i = 0; i <= 1; i = i + 2) {
        triangle(x*17 + 20, y*17 + 20 + (i * a), x*17 + 20,
          y*17 + 20 + a + (i * a), x*17 + 20 + b,
          y*17 + 20 + a + (i * a))
           }
  //tercera línea figura 2
     for (var i = 1; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 2*a, x*17 + ((i + 1) * a), 
               y*17 + 2*a, x*17 + ((i + 1) * a), y*17 + 3*a);
        }
  //cuarta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 50, x*17 + (i * a), 
               y*17 + 50 + a, x*17 + (i * a) + b, y*17 + 50 + a)
    }
  //cuarta línea figura 2
       for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 3*a, x*17 + ((i + 1) * a), 
               y*17 + 3*a, x*17 + ((i + 1) * a), y*17 + 4*a);
        }  
  //cuarta línea figura 1
  for (var i = 0; i <= 3; i = i + 4) {
    triangle(x*17 + 10, y*17 + 70 + (i * a), x*17 + 10,
      y*17 + 70 + a + (i * a), x*17 + 10 + b,
      y*17 + 70 + a + (i * a))
      }
  //cuarta línea figura 2
      for (var i = 3; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 3*a, x*17 + ((i + 1) * a),
               y*17 + 3*a, x*17 + ((i + 1) * a), y*17 + 4*a);
        }  
  //quinta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + 20, y*17 + 30 + (i * a), x*17 + 20,
        y*17 + 30 + a + (i * a), x*17 + 20 + b,
        y*17 + 30 + a + (i * a))
    }
  //quinta línea figura 2
       for (var i = 2; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 4*a, x*17 + ((i + 1) * a), 
               y*17 + 4*a, x*17 + ((i + 1) * a), y*17 + 5*a);
        }  
  //quinta línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x*17 + 30 + (i * a), y*17 + 60,
      x*17 + 30 + (i * a), y*17 + 60 + a,
      x*17 + 30 + (i * a) + b, y*17 + 60 + a)
      }
  //quinta línea figura 2
      for (var i = 3; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 4*a, x*17 + ((i + 1) * a), 
               y*17 + 4*a, x*17 + ((i + 1) * a), y*17 + 5*a);
        }  
  //sexta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + 50, y*17 + (i * a), x*17 + 50,
        y*17 + a + (i * a), x*17 + 50 + b,
        y*17 + a + (i * a))
    }
  //sexta línea figura 2
        for (var i = 1; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 5*a, x*17 + ((i + 1) * a), 
               y*17 + 5*a, x*17 + ((i + 1) * a), y*17 + 6*a);
        } 
  //sexta línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x*17 + 60, y*17 + 30 + (i * a), x*17 + 60,
      y*17 + 30 + a + (i * a), x*17 + 60 + b,
      y*17 + 30 + a + (i * a))
      }
  //sexta línea figura 2
          for (var i = 2; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 5*a, x*17 + ((i + 1) * a), 
               y*17 + 5*a, x*17 + ((i + 1) * a), y*17 + 6*a);
        } 
  //séptima línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + 60, y*17 + 20 + (i * a), x*17 + 60,
        y*17 + 20 + a + (i * a), x*17 + 60 + b,
        y*17 + 20 + a + (i * a))
        }
  //séptima línea figura 2
         for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 6*a, x*17 + ((i + 1) * a), 
               y*17 + 6*a, x*17 + ((i + 1) * a), y*17 + 7*a);
        } 
  //séptima línea figura 1
      for (var i = 0; i <= 7; i = i + 4) {
        triangle(x*17 + 70, y*17 + 10 + (i * a), x*17 + 70,
          y*17 + 10 + a + (i * a), x*17 + 70 + b,
          y*17 + 10 + a + (i * a))
      }
      for (var i = 0; i <= 1; i = i + 2) {
        triangle(x*17 + 20, y*17 + 60 + (i * a), x*17 + 20,
          y*17 + 60 + a + (i * a), x*17 + 20 + b,
          y*17 + 60 + a + (i * a))
         }
  //séptima línea figura 2
      for (var i = 1; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 6*a, x*17 + ((i + 1) * a), 
               y*17 + 6*a, x*17 + ((i + 1) * a), y*17 + 7*a);
        } 
  //octava línea figura 1
  for (var i = 0; i <= 3; i = i + 4) {
    triangle(x*17 + 50 + (i * a), y*17 + 70,
      x*17 + 50 + (i * a), y*17 + 70 + a,
      x*17 + 50 + (i * a) + b, y*17 + 70 + a)
      }
  //octava línea figura 2
     for (var i = 0; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 7*a, 
               x*17 + ((i + 1) * a), 
               y*17 + 7*a, x*17 + ((i + 1) * a), y*17 + 8*a);
        } 
  //octava línea figura 1
    for (var i = 0; i <= 3; i = i + 4) {
      triangle(x*17 + 40 + (i * a), y*17,
        x*17 + 40 + (i * a), y*17 + a,
        x*17 + 40 + (i * a) + b, y*17 + a)
    }
  //octava línea figura 2
    for (var i = 3; i <= 7; i = i + 4) {
      triangle(x*17 + (i * a), y*17 + 7*a, 
               x*17 + ((i + 1) * a), 
               y*17 + 7*a, x*17 + ((i + 1) * a), y*17 + 8*a);
        } 
  
  //CUARTA FIGURA
  
    fill(0)
  noStroke()
  triangle(x, y*17, x, y*17 + a, x + a, y*17 + a)

  //primera línea figura 1
  for (var o = 0; o <= 7; o = o + 4) {
    triangle(x + 10, y*17 + (o * a), x + 10, y*17 + a + (o * a),
      x + 10 + b, y*17 + a + (o * a))
  }
  //primera línea figura 2
    for (var i = 2; i <= 8; i = i + 4) {
      triangle(x + (i * a), y*17, x + ((i + 1) * a), y*17,
        x + ((i + 1) * a), y*17 + a); 
    }
  //primera línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 10, x + (i * a), y*17 + 10 + a,
       x + (i * a) + b, y*17 + 10 + a) 
  }
  //primera línea figura 2
for (var i = 3; i <= 8; i = i + 4) {
      triangle(x + (i * a), y*17, x + ((i + 1) * a), y*17,
        x + ((i + 1) * a), y*17 + a); 
     }
  //segunda línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + 30 + (i * a), y*17 + 20, x + 30 + (i * a),
        y*17 + 20 + a, x + 30 + (i * a) + b, y*17 + 20 + a)  
  }
  //segunda línea figura 2
  for (var i = 1; i <= 8; i = i + 4) {
      triangle(x + (i * a), y*17 + a, x + ((i + 1) * a), y*17 + a,
        x + ((i + 1) * a), y*17 + 2*a); 
    }
  //segunda línea figura 1 
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x + 30, y*17 + 10 + (i * a), x + 30,
      y*17 + 10 + a + (i * a), x + 30 + b,
      y*17 + 10 + a + (i * a))
    }
  //segunda línea figura 2
   for (var i = 2; i <= 8; i = i + 4) {
      triangle(x + (i * a), y*17 + a, x + ((i + 1) * a), y*17 + a,
        x + ((i + 1) * a), y*17 + 2*a);
     }
  //tercera línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + 10 + (i * a), y*17 + 30, x + 10 + (i * a),
        y*17 + 30 + a, x + 10 + (i * a) + b,
        y*17 + 30 + a)
    }
  //tercera línea figura 2
     for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 2*a, x + ((i + 1) * a), 
               y*17 + 2*a, x + ((i + 1) * a), y*17 + 3*a);
       }
  //tercera línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x + (i * a), y*17 + 40, x + (i * a), y*17 + 40 + a,
      x + (i * a) + b, y*17 + 40 + a)
     }
       for (var i = 0; i <= 1; i = i + 2) {
        triangle(x + 20, y*17 + 20 + (i * a), x + 20,
          y*17 + 20 + a + (i * a), x + 20 + b,
          y*17 + 20 + a + (i * a))
           }
  //tercera línea figura 2
     for (var i = 1; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 2*a, x + ((i + 1) * a), 
               y*17 + 2*a, x + ((i + 1) * a), y*17 + 3*a);
        }
  //cuarta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 50, x + (i * a), 
               y*17 + 50 + a, x + (i * a) + b, y*17 + 50 + a)
    }
  //cuarta línea figura 2
       for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 3*a, x + ((i + 1) * a), 
               y*17 + 3*a, x + ((i + 1) * a), y*17 + 4*a);
        }  
  //cuarta línea figura 1
  for (var i = 0; i <= 3; i = i + 4) {
    triangle(x + 10, y*17 + 70 + (i * a), x + 10,
      y*17 + 70 + a + (i * a), x + 10 + b,
      y*17 + 70 + a + (i * a))
      }
  //cuarta línea figura 2
      for (var i = 3; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 3*a, x + ((i + 1) * a), 
               y*17 + 3*a, x + ((i + 1) * a), y*17 + 4*a);
        }  
  //quinta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + 20, y*17 + 30 + (i * a), x + 20,
        y*17 + 30 + a + (i * a), x + 20 + b,
        y*17 + 30 + a + (i * a))
    }
  //quinta línea figura 2
       for (var i = 2; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 4*a, x + ((i + 1) * a), 
               y*17 + 4*a, x + ((i + 1) * a), y*17 + 5*a);
        }  
  //quinta línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x + 30 + (i * a), y*17 + 60,
      x + 30 + (i * a), y*17 + 60 + a,
      x + 30 + (i * a) + b, y*17 + 60 + a)
      }
  //quinta línea figura 2
      for (var i = 3; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 4*a, x + ((i + 1) * a), 
               y*17 + 4*a, x + ((i + 1) * a), y*17 + 5*a);
        }  
  //sexta línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + 50, y*17 + (i * a), x + 50,
        y*17 + a + (i * a), x + 50 + b,
        y*17 + a + (i * a))
    }
  //sexta línea figura 2
        for (var i = 1; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 5*a, x + ((i + 1) * a), 
               y*17 + 5*a, x + ((i + 1) * a), y*17 + 6*a);
        } 
  //sexta línea figura 1
  for (var i = 0; i <= 7; i = i + 4) {
    triangle(x + 60, y*17 + 30 + (i * a), x + 60,
      y*17 + 30 + a + (i * a), x + 60 + b,
      y*17 + 30 + a + (i * a))
      }
  //sexta línea figura 2
          for (var i = 2; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 5*a, x + ((i + 1) * a), 
               y*17 + 5*a, x + ((i + 1) * a), y*17 + 6*a);
        } 
  //séptima línea figura 1
    for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + 60, y*17 + 20 + (i * a), x + 60,
        y*17 + 20 + a + (i * a), x + 60 + b,
        y*17 + 20 + a + (i * a))
        }
  //séptima línea figura 2
         for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 6*a, x + ((i + 1) * a), 
               y*17 + 6*a, x + ((i + 1) * a), y*17 + 7*a);
        } 
  //séptima línea figura 1
      for (var i = 0; i <= 7; i = i + 4) {
        triangle(x + 70, y*17 + 10 + (i * a), x + 70,
          y*17 + 10 + a + (i * a), x + 70 + b,
          y*17 + 10 + a + (i * a))
      }
      for (var i = 0; i <= 1; i = i + 2) {
        triangle(x + 20, y*17 + 60 + (i * a), x + 20,
          y*17 + 60 + a + (i * a), x + 20 + b,
          y*17 + 60 + a + (i * a))
         }
  //séptima línea figura 2
      for (var i = 1; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 6*a, x + ((i + 1) * a), 
               y*17 + 6*a, x + ((i + 1) * a), y*17 + 7*a);
        } 
  //octava línea figura 1
  for (var i = 0; i <= 3; i = i + 4) {
    triangle(x + 50 + (i * a), y*17 + 70,
      x + 50 + (i * a), y*17 + 70 + a,
      x + 50 + (i * a) + b, y*17 + 70 + a)
      }
  //octava línea figura 2
     for (var i = 0; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 7*a, x + ((i + 1) * a), 
               y*17 + 7*a, x + ((i + 1) * a), y*17 + 8*a);
        } 
  //octava línea figura 1
    for (var i = 0; i <= 3; i = i + 4) {
      triangle(x + 40 + (i * a), y*17,
        x + 40 + (i * a), y*17 + a,
        x + 40 + (i * a) + b, y*17 + a)
    }
  //octava línea figura 2
    for (var i = 3; i <= 7; i = i + 4) {
      triangle(x + (i * a), y*17 + 7*a, x + ((i + 1) * a), 
               y*17 + 7*a, x + ((i + 1) * a), y*17 + 8*a);
        } 
    } 
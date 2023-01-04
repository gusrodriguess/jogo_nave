let screen = 0;
var xr, yr; // POSIÇÃO DAS RESPOSTAS
var vi, vj; // VELOCIDADE DOS INIMIGOS E DO JOGADOR 
var numeroR = 0; 
var vXo = [];
var vYo = [];
var qnt_inimigos = 3;
var valores = [];
var disparoAtivo = false;
var operadores = ['+', '-', '*', '/'];
var cor1 = '#ffff00';
var cor2 = '#ffff00';
var cor3 = '#ffff00';
var num1, num2;
var recorde = 0;
var acertos = 0;
var buff = 0;
var pontos = 0;
var vidas = 3;

function reseta_status () {
    pontos = 0;
    vidas = 3;
    buff = 0;
    vi = 2;
} // REINICIA AS VARIÁVEIS: PONTOS, VIDAS, BUFF E A VELOCIDADE DO INIMIGO

function inimigo (xo, yo, valor) {
    fill("#FF0000");
    image(img_enemy, xo, yo, 40, 40)
    fill('#FFF000');
    textSize(25);
    text(valor, xo + 11, yo + 30);
} // CRIA OS INIMIGOS

function reinicia_inimigo (indice) {
    vXo[indice] = random(0, 450);
    vYo[indice] = - random(100, 400);
} // REINICIA A POSIÇÃO DOS INIMIGOS

function reinicia_resposta () {
    xr = random(450);
    yr = - random(100, 400);
} // REINICIA A POSIÇÃO DAS RESPOSTAS

function calculo_resposta() {
  num1 = parseInt(random(10));
  num2 = parseInt(random(10));
}  // SORTEIA OS NÚMEROS DA OPERAÇÃO MATEMÁTICA

function preload() {
  font_title = loadFont('fonts/Starjhol.ttf');
  font_subtitle = loadFont('fonts/upheavtt.ttf');
  font_text = loadFont('fonts/ARIAL.TTF');
  img_background = loadImage('sprites/space.png');
  button_back = loadImage('sprites/button_back.png');
  arrows_keys = loadImage('sprites/arrows_keys.png');
  spacebar = loadImage('sprites/spacebar.png');
  millenium_falcon = loadImage('sprites/millenium_falcon.png');
  heart = loadImage('sprites/heart.png');
  r2d2 = loadImage('sprites/r2d2.png');
  boba_fett = loadImage('sprites/boba_fett.png');
  han_solo = loadImage('sprites/han_solo.png')
  img_shoot = loadImage('sprites/laser_bullet.png');
  img_enemy = loadImage('sprites/star_of_death.png');
  img_darth_vader = loadImage('sprites/darth_vader.png');
  r2d2_sound = loadSound('sounds/r2d2_sound.mp3');
  button_pressed = loadSound('sounds/button_pressed.wav');
  shoot_sound = loadSound('sounds/space_ship_shooting.mp3');
}

function setup() {
  createCanvas(500, 400);
  xr = random(450);
  yr = - random(100, 400);
  for (i = 0; i < qnt_inimigos; i++) {
    vXo[i] = random(450);
    vYo[i] = - random(100, 400);
    valorO = parseInt(random(15));
      while (valorO == numeroR) {
        valorO = parseInt(random(15));
      }
    valores[i] = valorO;
  } // SORTEIA A POSIÇÃO DE X, Y E O VALOR PARA CADA INIMIGO
  posX = 210;
  posY = 280;
  vi = 2;
  vj = 4;
  sorteia_operador = random(operadores);
  calculo_resposta();

}

function draw() {
  if(screen == 0) {
    tela_inicial();
  } // TELA DE MENU
  if(screen == 1) {
    tela_jogo();
    if (keyIsDown(LEFT_ARROW)) {
      posX -= vj + buff;
        if (posX < 0) {
        posX = 0
        }
    }  // MOVIMENTO DO JOGADOR PARA ESQUERDA
    if (keyIsDown(RIGHT_ARROW)) {
      posX += vj + buff;
        if (posX > 455) {
        posX = 455;
        }
    } // MOVIMENTO DO JOGADOR PARA DIREITA
    if (keyIsDown(UP_ARROW)) {
      posY -= vj + buff;
        if (posY < 0) {
        posY = 0
        }
    }    // MOVIMENTO DO JOGADOR PARA CIMA
    if (keyIsDown(DOWN_ARROW)) {
      posY += vj + buff;
        if (posY > 352) {
        posY = 352;
        }
    }  // MOVIMENTO DO JOGADOR PARA BAIXO
    if (keyIsDown(32) && ! disparoAtivo) {
      xd = posX + 15;
      yd = posY;
      disparoAtivo = true;
      shoot_sound.play();
      image(img_shoot, xd, yd, 20, 40);
    }
    if (disparoAtivo) {
      image(img_shoot, xd, yd, 20, 40);
      yd -= 7;
      if (yd < 0) {
        disparoAtivo = false;
      }
    }
    
    for (i = 0; i < qnt_inimigos; i++) {
      inimigo(vXo[i], vYo[i], valores[i]);
      vYo[i] = vYo[i] + vi;
      if (dist(vXo[i], vYo[i], posX, posY) < 45) {
          for (j = 0; j < qnt_inimigos; j++) {
            vYo[j] = - random(100, 400);
            yr = - random(100, 400);
          }
        vidas = vidas - 1;
        posX = 210;
        posY = 280;
        if (vidas <= 0) {
          screen = 4;
        }    
      }
      if (vYo[i] > 400) {
        vXo[i] = random(0, 450);
        vYo[i] = - random(100, 400);
        valorO = parseInt(random(15));
          while (valorO == numeroR) {
            valorO = parseInt(random(15));
          }
        valores[i] = valorO;
      }
      if (disparoAtivo) {
        if (dist(vXo[i], vYo[i], xd, yd) < 30) {
          reinicia_inimigo(i);
          disparoAtivo = false;
          pontos = pontos - 5;
          acertos = 0;
          buff = 0;
        }
      }
    } // MOVIMENTO E COLISÃO DOS INIMIGOS
    
    // MOVIMENTO E COLISÃO DAS RESPOSTAS
    inimigo(xr, yr, numeroR);
    yr = yr + vi;
    if (yr > 400) {
      xr = random(450);
      yr = - random(100, 400);
    }
    if(disparoAtivo) {
      if (dist(xr, yr, xd, yd) < 30) {
      disparoAtivo = false;
      reinicia_resposta();
      calculo_resposta();
      sorteia_operador = random(operadores)
      pontos = pontos + 10;
      acertos = acertos + 1;
      }
    } 
    
    // CALCULA A RESPOSTA DE ACORDO COM O OPERADOR SORTEADO
    if (sorteia_operador == "+") {
      numeroR = num1 + num2;
    }
    if (sorteia_operador == "-") {
      numeroR = num1 - num2;
      if(numeroR < 0) {
        calculo_resposta();
      }
    }
    if (sorteia_operador == "*") {
      numeroR = num1 * num2;
    }
    if (sorteia_operador == "/") {
      numeroR = num1 / num2;
      if(num1 % num2 !== 0) {
        calculo_resposta();
      }
    } 
    
    // AUMENTA A VELOCIDADE DOS INIMIGOS CONFORME OS PONTOS VÃO AUMENTANDO
    if(pontos > 50) {
    vi = 3;
  }
    if(pontos > 100) {
    vi = 4;
  }
    if(pontos > 150) {
    vi = 5;
  }
    if(pontos > 200) {
    vi = 6;
  }
    
    // CALCULA O RECORDE
    if(pontos > recorde) {
      recorde = pontos;
    }
    
    // SE TIVER 3 ACERTOS CONSECUTIVOS O JOGADOR GANHA UM AUMENTO DE VELOCIDADE
    if(acertos == 3) {
      buff = 3;
    }
  
  } // TELA DO JOGO
  if(screen == 2) {
    tela_instrucoes();
  } // TELA DE INSTRUÇÕES
  if(screen == 3) {
    tela_creditos();
  } // TELA DOS CRÉDITOS
  if(screen == 4) {
    tela_derrota();
  } // TELA DE DERROTA
}

function mouseMoved() {
  if(screen == 0) { 
    if(mouseX >= 170 && mouseX <= 350 && mouseY >= 160 && mouseY <= 215) {
      cor1 = '#008000';
    } else {
      cor1 = '#ffff00';
    }
    
    if(mouseX >= 140 && mouseX <= 380 && mouseY >= 230 && mouseY <= 285) {
      cor2 = '#0000ff';
    } else {
      cor2 = '#ffff00';
    }
    
    if(mouseX >= 140 && mouseX <= 380 && mouseY >= 300 && mouseY <= 355) {
      cor3 = '#FF0000';
    } else {
      cor3 = '#ffff00';
    }
  }
  if(screen == 4) { // TELA DE DERROTA
    if(mouseX >= 100 && mouseX <= 230 && mouseY >= 260 && mouseY <= 315) {
      cor1 = '#008000';
    } else {
      cor1 = '#ffff00';
    }
    
    if(mouseX >= 280 && mouseX <= 410 && mouseY >= 260 && mouseY <= 315) {
      cor2 = '#FF0000';
    } else {
      cor2 = '#ffff00';
    }
  }
} // ALTERA A COR DOS BOTÕES AO PASSAR O MOUSE POR CIMA

function mouseClicked() {
  if(screen == 0) {
    if(mouseX >= 170 && mouseX <= 350 && mouseY >= 160 && mouseY <= 215) {
      button_pressed.play();
      screen = 1;
      reseta_status();
      calculo_resposta();
      sorteia_operador = random(operadores)
    } // TROCA PARA A TELA DO JOGO
    if(mouseX >= 140 && mouseX <= 380 && mouseY >= 230 && mouseY <= 285) {
      button_pressed.play();
      screen = 2;
    } // TROCA PARA A TELA DE INSTRUÇÕES
    if(mouseX >= 140 && mouseX <= 380 && mouseY >= 300 && mouseY <= 355) {
      button_pressed.play();
      screen = 3;
    } // TROCA PARA A TELA DE CRÉDITOS
    if(mouseX >= 354 && mouseX <= 383 && mouseY >= 47 && mouseY <= 90) {
      r2d2_sound.play();
    }   // EASTER EGG
  } // BOTÕES DA TELA DE MENU
  if(screen == 2) { 
    if(mouseX >= 33 && mouseX <= 94 && mouseY >= 18 && mouseY <= 61) {
      button_pressed.play();
      screen = 0;
    } // TROCA PARA A TELA DE MENU
  } // BOTÕES DA TELA DE INSTRUÇÕES
  if(screen == 3) { 
    if(mouseX >= 33 && mouseX <= 94 && mouseY >= 18 && mouseY <= 61) {
      button_pressed.play();
      screen = 0;
    } // TROCA PARA A TELA DE MENU
  } // BOTÕES DA TELA DE CRÉDITOS
  if(screen == 4) { 
    if(mouseX >= 100 && mouseX <= 230 && mouseY >= 260 && mouseY <= 315) {
      screen = 1;
      reseta_status();
      calculo_resposta();
      sorteia_operador = random(operadores)
    } // TROCA PARA A TELA DO JOGO
    if(mouseX >= 280 && mouseX <= 410 && mouseY >= 260 && mouseY <= 315) {
      screen = 0;
    } // TROCA PARA A TELA DE MENU
  } // BOTÕES DA TELA DE DERROTA
} // TROCA A TELA AO CLICAR COM O MOUSE NO BOTÃO
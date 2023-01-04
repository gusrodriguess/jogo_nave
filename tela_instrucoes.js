function tela_instrucoes() {
  background(img_background);
  textFont(font_subtitle, 35);
  text('instruções', 160, 50);
  text('controles:', 29, 100);
  text('objetivo:', 29, 280);
  image(button_back, 33, 18);
  image(arrows_keys, 99, 170, 130, 70);
  image(spacebar, 280, 190, 100, 30);
  image(han_solo, 350, 156, 23, 36);
  textFont(font_text, 19)
  text('Use as setas para mover a nave e a barra de espaço\npara atirar!', 29, 130);
  text('Encontre o resultado da expressão matemática.', 29, 310)
  text('Atire na nave que possui o número de tribulantes que \ncorresponde ao resultado encontrado!', 29, 345)
}
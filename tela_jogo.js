function tela_jogo() {
  noStroke();
  background(img_background);
  image(millenium_falcon, posX, posY, 50, 50);
  textFont(font_subtitle);
  fill("#FFFF00")
  textSize(22)
  text(num1 + ' ' + sorteia_operador + ' ' + num2 + '?', 20, 35);
  text('Pontos: ' + pontos, 370, 35);
  text('Vidas: ' + vidas, 20, 370);
}
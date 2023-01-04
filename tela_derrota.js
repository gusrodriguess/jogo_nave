function tela_derrota() {
  stroke('#FFFF00')
  strokeWeight(1);
  background(img_background);
  textFont(font_subtitle);
  fill("#FFFF00")
  textSize(35)
  text('VOCÊ PERDEU!!', 140, 80);
  textSize(28)
  text('PONTUAÇÃO: ' + pontos + ' PONTOS', 110, 150);
  text('MAIOR PONTUAÇÃO: ' + recorde + ' PONTOS', 60, 190);
  text('JOGAR NOVAMENTE?', 130, 250);
  noStroke();
  fill(cor1);
  text('SIM', 140, 305);
  fill(cor2);
  text('NÃO', 320, 305);
  textFont(font_subtitle);
  textSize(35)
  strokeWeight(5);
  noFill();
  stroke(cor1);
  rect(100, 270, 130, 55, 20);
  stroke(cor2);
  rect(280, 270, 130, 55, 20);
  strokeWeight(1);
}
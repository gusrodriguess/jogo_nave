function tela_inicial(){
  background(img_background, 0);
  image(r2d2, 353,49);
  fill('#FFFF00')
  strokeWeight(1);
  stroke('#FFFF00')
  textFont(font_title);
  textSize(40);
  text('star', 200, 80);
  text('calculus', 150, 120);
  textFont(font_subtitle);
  textSize(35)
  strokeWeight(5);
  noFill();
  stroke(cor1);
  rect(170, 160, 180, 55, 20);
  stroke(cor2);
  rect(140, 230, 240, 55, 20);
  stroke(cor3);
  rect(140, 300, 240, 55, 20);
  noStroke()
  fill(cor1);
  text('jogar', 205, 198);
  fill(cor2)
  text('instruções', 160, 270);
  fill(cor3)
  text('créditos', 180, 338);
}




function tela_creditos() {
  background(img_background);
  fill('#ffff00');
  textFont(font_subtitle, 35);
  text('créditos', 192, 50);
  textFont(font_text, 20);
  text('Star Calculus é um jogo matemático desenvolvido\npara o projeto final de Lógica de Programação.', 20, 120);
  text('Desenvolvedor: Luiz Gustavo Bezerra Rodrigues', 20, 190)
  text('Turma: 02D', 20, 220)
  text('Curso: Ciências e Tecnologia - UFRN', 20, 250)
  text('Orientador: Orivaldo Vieira De Santana Junior.', 20, 290)
  textFont(font_title, 25);
  text('star', 238, 337);
  text('calculus', 200, 360);
  image(button_back, 33, 18);
  image(boba_fett, 385, 315, 60, 53);
}
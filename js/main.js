const iconMoon = document.querySelector(".tema-moon");
const iconSun = document.querySelector(".tema-sun");
const titulosHtml = document.querySelectorAll("h1 , h2 , h3 , a");
const btnNavCategoriaCardapio = document
  .querySelector(".navegacao-categoria-cardapio")
  .querySelectorAll("button");
const menuNavBars = document.querySelector(".bars");
const menuNav = document.querySelector(".navbar-col ul");
const btnClose = document.querySelector(".close");




/* Função que alterna as cores para tema dark ao clica (li moon) */
function temaDark() {
  iconMoon.style.display = "none";
  iconSun.style.display = "block";
  btnClose.style.color = "var(--color-white)";
  document.body.style.backgroundColor = "var(--color-dark)";
  menuNavBars.style.backgroundColor = "var(--color-backgruond)";

  titulosHtml.forEach((element) => {
    element.style.color = "var(--color-white)";
  });

  btnNavCategoriaCardapio.forEach((button) => {
    button.style.backgroundColor = "var(--color-secondary)";
  });
} iconMoon.addEventListener("click", temaDark);

function temaLigth() {
  iconMoon.style.display = "block";
  iconSun.style.display = "none";
  document.body.style.backgroundColor = "var(--color-backgound)";

  titulosHtml.forEach((element) => {
    element.style.color = "var(--color-dark)";
  });

  btnNavCategoriaCardapio.forEach((button) => {
    button.style.backgroundColor = "var(--color-white)";
  });
}
iconSun.addEventListener("click", temaLigth);
/* *******************FIM*************************** */



/*FUNÇÃO DE ABRE E FECHA O MENU DE NAVEGAÇÃO TAMANHO DE TELA MOBLIE */
function openNavBars() {
  menuNav.style.display = "block";
  menuNavBars.style.display = "none";
  btnClose.style.display = "block";
}
menuNavBars.addEventListener("click", openNavBars);

function closeNavBars() {
  menuNav.style.display = "none";
  menuNavBars.style.display = "block";
  btnClose.style.display = "none";
}
btnClose.addEventListener("click", closeNavBars);
/* *******************FIM************************** */



/*FUNÇÃO QUE ALTERNA OS TEMAS DO MENU DE NAVEGACAO TAMANHO DE TELA MOBLIE*/
function temaDarkBars() {
  menuNav.style.backgroundColor = "black";
  btnClose.style.backgroundColor = "black";
  document.querySelector(".tema-moon-bars").style.display = "none"
  document.querySelector(".tema-sun-bars").style.display = "block"

  temaDark();
}document.querySelector(".tema-moon-bars").addEventListener("click", temaDarkBars);


function temaLightBars() {
document.querySelector(".tema-moon-bars").style.display = "block"
  document.querySelector(".tema-sun-bars").style.display = "none"
  menuNav.style.backgroundColor = "var(--color-white)";
  menuNav.style.zIndex = "1"
  btnClose.style.backgroundColor = "var(--color-backgroud)";
  btnClose.style.color = "var(--color-text)";
  
   temaLigth();
  
}document.querySelector(".tema-sun-bars").addEventListener("click", temaLightBars);
  /* *******************FIM************************* */

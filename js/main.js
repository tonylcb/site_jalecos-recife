//                    Animação nos subtitulos

function initAnimacaoTitulos() {
  const titulos = document.querySelectorAll(".js-titulos");
  if (titulos.length) {
    const windowSessenta = window.innerHeight * 0.7;

    function animaScroll() {
      titulos.forEach((titulo) => {
        const tituloTop = titulo.getBoundingClientRect().top;
        const tituloVisivel = tituloTop - windowSessenta < 0;
        if (tituloVisivel) {
          titulo.classList.add("ativo");
        }
      });
    }
  }

  // animaScroll();
  window.addEventListener("scroll", animaScroll);
}
initAnimacaoTitulos();

function initAnimacaoBolinhas() {
  const bolinhas = document.querySelectorAll(".js-bolinhas");
  if (bolinhas.length) {
    const windowSessenta = window.innerHeight * 0.75;

    function animaScroll() {
      bolinhas.forEach((bolinha) => {
        const bolinhaTop = bolinha.getBoundingClientRect().top;
        const bolinhaVisivel = bolinhaTop - windowSessenta < 0;
        if (bolinhaVisivel) {
          bolinha.classList.add("ativo");
        }
      });
    }
  }

  // animaScroll();
  window.addEventListener("scroll", animaScroll);
}
initAnimacaoBolinhas();

//                    Animação nos Cards de Destaques

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-destaques");

  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion() {
      this.querySelector(".js-destaques .card-info").classList.add("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

// const accordionList = document.querySelectorAll(".js-destaques");

// accordionList.forEach((item) => {
//   item.addEventListener("click", activeAccordion);
// });

// function activeAccordion() {
//   // this.nextElementSibling.classList.add("ativo");
//   console.log(this.querySelector(".js-destaques .card-info"));
// }

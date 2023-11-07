const html = document.querySelector("html");
html.classList.add("js");

// Ativar Links menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens orçamento

const parametro = new URLSearchParams(location.search);

function ativarP(parametro1) {
  const elemento = document.getElementById(parametro1);

  elemento.checked = true;
}

parametro.forEach(ativarP);

// slide perguntas

const botao = document.querySelectorAll("button");

function mostrar(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("slide");
  const ativa = resposta.classList.contains("slide");
  pergunta.setAttribute("aria-expanded", ativa);
}

function mostrarRespostas(btn) {
  btn.addEventListener("click", mostrar);
}

botao.forEach(mostrarRespostas);

// Galeria

const cliqueGaleria = document.querySelectorAll(
  "#bicicleta .bicicleta-imagens img"
);
const galeriaContainer = document.querySelector(".bicicleta-imagens");
const galeriaPrincipal = document.querySelector("#principal1");

function clique(src) {
  const img = src.currentTarget;

  galeriaContainer.prepend(img);
}

function alterarImg(event) {
  event.addEventListener("click", clique);
}

cliqueGaleria.forEach(alterarImg);

// Animação

new SimpleAnime();

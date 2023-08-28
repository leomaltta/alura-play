import { conectaAPI } from "./conectaAPI.js";

const form = document.querySelector("[data-form]");

async function createVideo(e) {
  e.preventDefault();
  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const descricao = Math.floor(Math.random() * 10).toString();

  try {
    await conectaAPI.POSTVideos(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
  } catch (e) {
    alert(e);
  }
}

form.addEventListener("submit", (e) => createVideo(e));

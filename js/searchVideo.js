import { conectaAPI } from "./conectaAPI.js";
import createCard from "./mostrarVIdeos.js";

async function searchVideo(e) {
  e.preventDefault();
  const searchData = document.querySelector("[data-search]").value;
  const search = await conectaAPI.searchVideos(searchData);

  const list = document.querySelector("[data-list]");

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  search.forEach((e) =>
    list.appendChild(createCard(e.titulo, e.descricao, e.url, e.imagem))
  );

  if (search.length == 0) {
    list.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
  }
}

const searchBtn = document.querySelector("[data-search-btn]");
searchBtn.addEventListener("click", (e) => searchVideo(e));

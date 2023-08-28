async function GETVideos() {
  const res = await fetch("http://localhost:3000/videos");
  const resConverted = await res.json();
  return resConverted;
}

async function POSTVideos(titulo, descricao, url, imagem) {
  const res = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  });
  if (!res.ok) {
    throw new Error("Não foi possível enviar o vídeo");
  }

  const resConverted = await res.json();
  return resConverted;
}

async function searchVideos(termoDeBusca) {
  const res = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
  const resConverted = res.json();

  return resConverted;
}

export const conectaAPI = {
  GETVideos,
  POSTVideos,
  searchVideos,
};

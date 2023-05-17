let audioAtual;

function tocaSom(idElementoAudio, idBotao) {
  const audioElemento = document.querySelector(idElementoAudio);

  if (audioAtual && audioAtual !== audioElemento) {
    audioAtual.pause();
  }

  if (audioAtual === audioElemento && !audioElemento.paused) {
    audioElemento.pause();
  } else {
    audioElemento.play();
  }

  audioAtual = audioElemento;

  audioElemento.addEventListener("timeupdate", function() {
    const elementoBotao = document.getElementById(idBotao);
    const duracaoTotal = audioElemento.duration;
    const tempoAtual = audioElemento.currentTime;
    const porcentagemCompleta = (tempoAtual / duracaoTotal) * 100;

    elementoBotao.style.backgroundImage = "linear-gradient(to right, #97DEFF " + audioElemento.currentTime / audioElemento.duration * 100 + "%, #C9EEFF " + audioElemento.currentTime / audioElemento.duration * 100 + "%)";
  });
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idBotao = listaDeTeclas[contador].id;
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function() {
    tocaSom(idAudio, idBotao);
    console.log(idBotao)
  };
}






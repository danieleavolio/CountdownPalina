var animalCrossing = new Audio("animalcrossing.mp3");


function playMusic() {
  animalCrossing.play();
}

var compleanno = "18 Aug 2021";

var differenza = 0;

function countdown() {
  var compleannoDate = new Date(compleanno);
  var oggiDate = new Date();

  differenza = compleannoDate - oggiDate;

  const giorni = Math.floor(differenza / 1000 / 3600 / 24);
  const ore = Math.floor(differenza / 1000 / 3600) % 24;
  const minuti = Math.floor(differenza / 1000 / 60) % 60;
  const secondi = Math.floor(differenza / 1000) % 60;

  document.getElementById("giorni").innerHTML = giorni;
  document.getElementById("ore").innerHTML = ore;
  document.getElementById("minuti").innerHTML = minuti;
  document.getElementById("secondi").innerHTML = secondi;
}

function musicClick(){
    document.getElementById("bottone").onclick = playMusic;
}
document.getElementById

document.addEventListener(
  "DOMContentLoaded",
  function () {
      musicClick()
    countdown();
    setInterval(countdown, 1000);
  },
  false
);


const d = document,
  n = navigator,
  w = window;

export default function sorteoDigital(ul, btn) {
  const $ul = d.querySelector(ul),
    $btn = d.querySelector(btn);
  let listaDepurada = $ul.textContent,
    listaSorteo;
  listaDepurada = listaDepurada.replace(/(\r\n|\n|\r)/gm, "");
  listaDepurada = listaDepurada.split(" ");

  function cleanArray(actual) {
    let newArray = new Array();
    for (let i = 0, j = actual.length; i < j; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }

    return (listaSorteo = newArray);
  }
  cleanArray(listaDepurada);
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let ganador = listaSorteo[Math.floor(Math.random() * listaSorteo.length)];
      alert(`El ganador es: ${ganador}`);
      console.log(`El ganador es: ${ganador}`);
    }
  });

  /*const getWinnerComment = (ul) => {
        const $players = document.querySelectorAll(ul),
        random = Math.floor(Math.random()*$players.lenght),
        winner = $players[random];

        return `El ganador es: ${winner.textContent}`;
    } */
}

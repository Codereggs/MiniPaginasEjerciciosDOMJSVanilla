export default function lectorDeVoz(form, texto, seleccion, idiomas) {
  // Reproducción de voz

  let sintesis = speechSynthesis;

  const $form = document.querySelector(form),
    $texto = document.querySelector(texto),
    $selectorVoz = document.querySelector(seleccion),
    $idioma = document.querySelector(idiomas);

  let voices;

  const listaDeVoces = () => {
    voices = sintesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement("option");
      option.textContent = voices[i].name + " (" + voices[i].lang + ")";

      if (voices[i].default) {
        option.textContent += " -- DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      $selectorVoz.appendChild(option);
    }
  };

  listaDeVoces();

  if (speechSynthesis.onvoiceschanged !== undefined)
    speechSynthesis.onvoiceschanged = listaDeVoces;

  $form.onsubmit = (e) => {
    e.preventDefault();

    let utterThis = new SpeechSynthesisUtterance($texto.value);
    let selectedOption =
      $selectorVoz.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    sintesis.speak(utterThis);
    $texto.blur();
  };

  //De acuerdo al tamaño de la pantalla que aparezca la opción de idiomas o no, ya que para moviles no está disponible aún.

  if (screen.width < 940) {
    $selectorVoz.remove();
    $idioma.remove();
  }
}

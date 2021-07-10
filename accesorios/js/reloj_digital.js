//Constantes
const d = document,
  $reloj = d.createElement("h2"),
  $error = d.createElement("p"),
  $agenda = d.createElement("p"),
  $alarmaActual = d.createElement("p"),
  HRS = "hrs.";

//Variables
let audioElement = new Audio(
    "http://www.sonidosmp3gratis.com/sounds/alarm-loud.mp3"
  ),
  despues = undefined,
  ahora = undefined,
  regexNum = /[0-9]/g,
  format = "LTS",
  on = true,
  alarmaAgendada = false;

//Funciones
const tiempo = () => {
  ahora = moment().format(format);
  $reloj.innerHTML = ahora;
  if (ahora === despues) {
    alarmaAgendada = false;
    $alarmaActual.remove();
    audioElement.play();
  }
  setTimeout(function () {
    tiempo();
  }, 1000);
};

export default function relojDigital(relojBtn, stopBtn) {
  tiempo();
  d.addEventListener("click", (e) => {
    if (e.target.matches(relojBtn)) {
      $reloj;
      $reloj.classList.add("relojDigital");
      d.querySelector(relojBtn).style.pointerEvents = "none";
      d.querySelector(relojBtn).classList.toggle("desactivated");
      d.querySelector(relojBtn).insertAdjacentElement("beforebegin", $reloj);
    }
    if (e.target.matches(stopBtn)) {
      $reloj.remove();
      d.querySelector(relojBtn).style.pointerEvents = "auto";
      d.querySelector(relojBtn).classList.remove("desactivated");
    }
  });
}

export function alarmaDigital(alarmaBtn, stopABTN) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(alarmaBtn)) {
      audioElement.loop = true;
      audioElement.play();
      d.querySelector(alarmaBtn).style.pointerEvents = "none";
      d.querySelector(alarmaBtn).classList.toggle("desactivated");
    }

    if (e.target.matches(stopABTN)) {
      audioElement.pause();
      audioElement.currentTime = 0;
      d.querySelector(alarmaBtn).style.pointerEvents = "auto";
      d.querySelector(alarmaBtn).classList.remove("desactivated");
    }
  });
}

export function alarmaTiempo(hora, minutos, segundos, boton, btnFormato) {
  d.addEventListener("click", (e) => {
    //Variables
    let hora1 = d.querySelector(hora).value,
      minutos1 = d.querySelector(minutos).value,
      segundos1 = d.querySelector(segundos).value;
    //Metodos
    const errorAlarma = () => {
      $error;
      $error.innerHTML = "Error, introduce una hora para iniciar la alarma.";
      $error.style.setProperty("color", "red");
      $error.style.setProperty("font-size", "0.9rem");
      setTimeout(function () {
        $error.remove();
      }, 5000);
      return d.querySelector(boton).insertAdjacentElement("afterend", $error);
    };
    const agendaAlarma = () => {
      $agenda;
      $agenda.innerHTML = "Excelente has iniciado una alarma";
      $agenda.style.setProperty("color", "green");
      $agenda.style.setProperty("font-size", "0.9rem");
      setTimeout(function () {
        $agenda.remove();
      }, 5000);
      alarmaAgendada = true;
      return d.querySelector(boton).insertAdjacentElement("afterend", $agenda);
    };

    const alarmaActual = () => {
      if (d.querySelector(".alarmaActual")) {
        $alarmaActual.remove();
      }
      $alarmaActual;
      $alarmaActual.innerHTML = `La alarma actual es la siguiente: ${despues}.`;
      $alarmaActual.classList.add("alarmaActual");
      d.querySelector(boton).insertAdjacentElement("afterend", $alarmaActual);
    };

    if (e.target.matches(boton)) {
      //Validacion

      if (
        !regexNum.test(segundos1) ||
        !regexNum.test(hora1) ||
        regexNum.test(minutos1)
      ) {
        console.log(
          !regexNum.test(hora1),
          !regexNum.test(minutos1),
          !regexNum.test(segundos1)
        );
        return errorAlarma();
      }

      //Ejecución

      agendaAlarma();
      despues = moment()
        .set({ hour: hora1, minutes: minutos1, seconds: segundos1 })
        .format(format);
      alarmaActual();
    }

    //Boton hora militar

    if (e.target.matches(btnFormato)) {
      if (on) {
        format = "HH:mm:ss";
        if (alarmaAgendada) {
          despues = moment()
            .set({ hour: hora1, minutes: minutos1, seconds: segundos1 })
            .format(format);
          alarmaActual();
        }

        return (on = false);
      } else {
        format = "LTS";
        if (alarmaAgendada) {
          despues = moment()
            .set({ hour: hora1, minutes: minutos1, seconds: segundos1 })
            .format(format);
          alarmaActual();
        }
        return (on = true);
      }
    }
  });
}

const d = document;

export function temporizador(
  year = undefined,
  month = undefined,
  day = undefined,
  hours = undefined,
  minutes = undefined,
  seconds = undefined
) {
  if (year === undefined || year === "") year = new Date().getUTCFullYear();
  if (month === undefined || month === "") month = new Date().getUTCMonth();
  if (day === undefined || day === "") day = new Date().getUTCDate();

  let countDownDate = new Date(
    year,
    month,
    day,
    hours,
    minutes,
    seconds
  ).getTime();
  const $countDownElement = d.createElement("p"),
    avisoError = () => {
      $countDownElement;
      $countDownElement.innerHTML = `Define las horas, minutos y segundos para empezar.`;
      $countDownElement.setAttribute("id", "countDown");
      d.querySelector(".count").insertAdjacentElement(
        "afterend",
        $countDownElement
      );
    };

  //Validación

  if (hours === "" || minutes === "" || seconds === "") return avisoError();

  if (hours === undefined || minutes === undefined || seconds === undefined)
    return avisoError();

  const countDown = () => {
    //Definición de todos los parámetros
    let nowTime = new Date().getTime(),
      distance = countDownDate - nowTime,
      yearCountDown = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 30.41 * 12 * 10)) /
          (1000 * 60 * 60 * 24 * 30.41 * 12)
      ),
      monthCountDown = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 30.41 * 12)) /
          (1000 * 60 * 60 * 24 * 30.41)
      ),
      daysCountDown = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 30.41)) / (1000 * 60 * 60 * 24)
      ),
      hoursCountDown = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutesCountDown = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      ),
      secondsCountDown = Math.floor((distance % (1000 * 60)) / 1000);
    $countDownElement;
    $countDownElement.innerHTML = `Faltan ${yearCountDown} años, ${monthCountDown} meses, ${daysCountDown} dias, ${hoursCountDown} horas, ${minutesCountDown} minutos y ${secondsCountDown} segundos será el año nuevo.`;
    $countDownElement.setAttribute("id", "countDown");
    d.querySelector(".count").insertAdjacentElement(
      "afterend",
      $countDownElement
    );

    //Cuando se acabe el tiempo que suceda el evento
    if (distance < 0) {
      clearInterval(countDownInterval);
      $countDownElement.innerHTML = `¡FELIZ AÑO ${year}!`;
      alert("¡Es año nuevo!");
      setTimeout(function () {
        $countDownElement.remove();
      }, 10000);
    }
  };

  //Inicio
  let countDownInterval = setInterval(countDown, 1000);
  countDownInterval;
}

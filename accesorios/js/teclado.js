const d = document;

let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  //console.log(e.keyCode);
  //console.log(limitsBall,limitsStage);

  //Movimiento de la pelota

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }

      break;
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }

      break;
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }

      break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }

      break;
    default:
      break;
  }
  //Translación de la pelota
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function shortcuts(e) {
  /*console.log(e);
    console.log(e.key);
    console.log(e.keyCode);*/

  if (e.key === "a" && e.altKey) {
    alert("páramo en la playa");
  }
  if (e.key === "c" && e.altKey) {
    confirm("páramo en la playa");
  }
  if (e.key === "p" && e.altKey) {
    prompt("páramo en la playa");
  }
}

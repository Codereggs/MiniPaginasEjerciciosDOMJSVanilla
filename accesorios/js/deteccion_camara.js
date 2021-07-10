const d = document,
  n = navigator,
  w = window;

export default function cameraDetection(id, button) {
  let switche = true;

  d.addEventListener("click", (e) => {
    if (e.target.matches(button)) {
      let valores = { video: { width: 700, height: 420 }, audio: false };
      const $botonVideo = d.querySelector(button),
        $video = d.getElementById(id),
        c = n.mediaDevices.getUserMedia(valores),
        detenerVideo = () => {
          n.mediaDevices
            .getUserMedia(valores)
            .then((cameraStream) => {
              $video.srcObject = cameraStream;
              $video.srcObject.getTracks().forEach((i) => {
                i.stop();
              });
              $botonVideo.innerText = "Encender Cámara";
            })
            .catch((err) => {
              console.log(`Se produjo el siguiente error ${err}`);
            });
        },
        iniciarVideo = () => {
          c.then((stream) => {
            $video.srcObject = stream;
            $video.play();
            $botonVideo.innerText = "Detener Cámara";
            switche = false;
          }).catch((err) => {
            $video.insertAdjacentHTML(
              "beforebegin",
              `<p>Sucedió el siguiente error: <mark>${err}</mark></p><br>`
            );
            console.log(`Sucedió el siguiente error ${err}`);
          });
        };

      if (switche === false) {
        detenerVideo();
        return (switche = true);
      }

      if (switche === true) {
        iniciarVideo();
        return (switche = false);
      }
    }
  });
}

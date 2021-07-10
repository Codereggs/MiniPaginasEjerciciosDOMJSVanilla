const d = document,
  w = window;

export default function slider() {
  //Variables
  let autoPlay,
    repetir,
    i = 0;

  const $nextBtn = d.querySelector(".slider-btn .next"),
    $prevBtn = d.querySelector(".slider-btn .prev"),
    $slides = d.querySelectorAll(".slider-slide");
  //Solo añadir estas etiquetas en el html y listo.
  //Funciones
  const autoClick = () => {
      nextSlide();
    },
    stopPlay = () => {
      clearInterval(autoPlay);
      clearTimeout(repetir);
    },
    reanudar = () => {
      autoPlay = setInterval(autoClick, 3500);
    },
    prevSlide = () => {
      $slides[i].classList.remove("active");
      i--;
      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    },
    nextSlide = () => {
      $slides[i].classList.remove("active");
      i++;
      if (i > $slides.length - 1) {
        i = 0;
      }
      $slides[i].classList.add("active");
    };

  //Ejecución

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      prevSlide();
      stopPlay();
      repetir = setTimeout(reanudar, 4000);
    }

    if (e.target === $nextBtn) {
      e.preventDefault();
      nextSlide();
      stopPlay();
      repetir = setTimeout(reanudar, 4000);
    }
  });

  autoPlay = setInterval(autoClick, 3500);
}

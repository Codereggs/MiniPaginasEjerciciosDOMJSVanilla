//Comienza el documento menu hamburguesa

//Variables
let activo = true;
//Constantes
const $botonHamburguesa = document.querySelector(".hamburger"),
  $nav = document.querySelector("nav");
  
//Funciones Expresadas
const animacionNav = () => {
  if (!activo) {
    $nav.animate(
      [
        // keyframes
        { left: "0" },
        { left: "-100%" },
      ],
      {
        // timing options
        duration: 500,
      }
    );
    $nav.style.setProperty("left", "-100%");
    activo = true;
  } else {
    $nav.animate(
      [
        // keyframes
        { left: "-100%" },
        { left: "0" },
      ],
      {
        // timing options
        duration: 500,
      }
    );
    $nav.style.setProperty("left", "0");
    activo = false;
  }
};
//Eventos

document.addEventListener("click", (e) => {
  if (e.target.matches(".hamburger-box, .hamburger-inner, .hamburger")) {
    if ($botonHamburguesa.classList.toggle("is-active")) {
      $botonHamburguesa.classList.add("is-active");
      animacionNav();
    } else {
      $botonHamburguesa.classList.remove("is-active");
      animacionNav();
    }
  }
  if (e.target.matches(".nav-seccion")) {
    $botonHamburguesa.classList.remove("is-active");
    animacionNav();
  }
});

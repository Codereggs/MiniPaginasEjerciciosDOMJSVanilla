//Menú hamburguesa
import hamburgerMenu from "./menu_hamburguesa.js";
import relojDigital, { alarmaDigital, alarmaTiempo } from "./reloj_digital.js";
import { moveBall, shortcuts } from "./teclado.js";
import { temporizador } from "./temporizador.js";
import scrollTop from "./scrollTop.js";
import darkMode from "./modo_oscuro.js";
import responsiveMedia from "./obj_reponsive.js";
import openWindow from "./responsive_tester.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import cameraDetection from "./deteccion_camara.js";
import getGeoLocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import sorteoDigital from "./sorteo_digital.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validando_formularios.js";
import lectorDeVoz from "./lector_de_voz.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //boton hamburguesa, panel a esconder, seccion del nav
  hamburgerMenu(".hamburger", ".panel", ".nav-seccion");
  //boton del reloj para iniciar, boton del reloj para parar
  relojDigital(".relojBtn", ".stopBtn");
  //boton de la alarma para iniciar, boton de la alamar para parar
  alarmaDigital(".alarmaBtn", ".stopAbtn");
  //select de horas, minutos y segundos, boton de alarma
  alarmaTiempo("#horas", "#minutos", "#segundos", ".setAlarm", ".btnMilitar");
  //Temporizador inserta, año, mes, dia, hora, minutos y segundos.
  temporizador("2022", "01", "01", "00", "00", "00");
  //Flecha hacia arriba
  scrollTop("#scrollTopButton");
  //Responsive
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" alt="VideoJonMircha" target="_blank">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://g.page/SeaWorldOrlandoThemePark?share" alt="MapaOrlando" target="_blank">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112298.12378293996!2d-81.51069315386381!3d28.409709234170712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x997f9e39a3d62bd5!2sSeaWorld%20Orlando!5e0!3m2!1ses-419!2sar!4v1616020626608!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  //Ventana responsive tester
  openWindow("responsiveT");
  //Informacion del dispositivo usado por los visitantes
  userDeviceInfo("user-device");
  //Detección de la cámara
  cameraDetection("webcam", "#videocam");
  //Geolocalizacion
  getGeoLocation("geolocation", "geobtn");
  //Filtrar en una búsqueda
  searchFilters(".card-filter", ".card");
  //Sorteo Digital
  sorteoDigital(".sorteoDigital", ".botonSorteo");
  //Carrusel
  slider();
  //Scrollspy
  scrollSpy();
  //Video inteligente
  smartVideo();
  //Validando formularios
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

//Boton modo oscuro
darkMode("#darkModeButton");
//Estado de red
networkStatus();
//Narrador
lectorDeVoz("#formularioVoz", "#texto", "#voiceSelect", "#idiomas");

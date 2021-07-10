const d = document,
  w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakPoint = w.matchMedia(mq);
  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  //Invoco la función para que aparezca el resultado en lo que cargue la página.
  responsive(breakPoint);
  //Invoco el evento cuando cambie el media query para que cambie el resultado en la pantalla.
  breakPoint.addEventListener("change", responsive);
}

/*
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112298.12378293996!2d-81.51069315386381!3d28.409709234170712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x997f9e39a3d62bd5!2sSeaWorld%20Orlando!5e0!3m2!1ses-419!2sar!4v1616020626608!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>*/

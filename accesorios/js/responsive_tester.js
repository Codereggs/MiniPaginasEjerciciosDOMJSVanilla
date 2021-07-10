export default function openWindow(form) {
  const w = window,
    d = document;

  let $form = d.getElementById(form),
    ventana;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      let url = $form.elements[0].value,
        width = $form.elements[1].value,
        height = $form.elements[2].value,
        wConfig = `innerWidth=${width},innerHeight=${height}`;
      ventana = open(`${url}`, "_blank", wConfig);
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.closeTester) {
      if (ventana === undefined) return true;
      ventana.close();
    }
  });
}

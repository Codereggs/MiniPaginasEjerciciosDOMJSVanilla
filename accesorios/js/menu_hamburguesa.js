export default function hamburgerMenu(panelBtn, panel, seccion) {
  const d = document,
    w = window;
  d.addEventListener("click", (e) => {
    if (window.innerWidth < 1024) {
      if (
        e.target.matches(panelBtn) ||
        e.target.matches(`${panelBtn} *`) ||
        e.target.matches(seccion)
      ) {
        d.querySelector(panel).classList.toggle("is-active");
        d.querySelector(panelBtn).classList.toggle("is-active");
      }
    }
  });
}

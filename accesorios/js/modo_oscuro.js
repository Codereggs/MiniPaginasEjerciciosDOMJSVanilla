export default function darkMode(btn) {
  const d = document,
    ls = localStorage,
    $darkModeBtn = d.querySelector(btn);

  let day = true;

  const dayMode = () => {
      d.body.style.setProperty("background-color", "var(--nav-color)");
      d.body.style.setProperty("color", "var(--secondary-color)");
      $darkModeBtn.style.setProperty(
        "border",
        "1px solid var(--secondary-color)"
      );
      d.documentElement.style.setProperty(
        "--darkMode-color",
        "rgb(255, 255, 255)"
      );
      $darkModeBtn.style.setProperty(
        "background-image",
        `url("/MinipaginaDOM/accesorios/img/Sol.png")`
      );
      ls.setItem("theme", "light");
      return (day = false);
    },
    nightMode = () => {
      d.body.style.setProperty("background-color", "var(--secondary-color)");
      d.body.style.setProperty("color", "var(--nav-color)");
      $darkModeBtn.style.setProperty("border", "1px solid var(--nav-color)");
      d.documentElement.style.setProperty(
        "--darkMode-color",
        "rgb(0, 0, 0, 0.7)"
      );
      $darkModeBtn.style.setProperty(
        "background-image",
        `url("/MinipaginaDOM/accesorios/img/Luna.png")`
      );
      ls.setItem("theme", "dark");
      return (day = true);
    };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      if (day) {
        dayMode();
      } else {
        nightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") dayMode();
    if (ls.getItem("theme") === "dark") nightMode();
  });
}

const d = document,
  n = navigator,
  ua = n.userAgent,
  w = window;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    //Método exclusivo para validar el tipo de teléfono
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    //Método exclusivo para validar el tipo de computador
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    //Método exclusivo para validar el tipo de navegador
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };

  $id.innerHTML = `
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${
          isMobile.any() ? isMobile.any() : isDesktop.any()
        }</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    `;

  //Contenido Exclusivo:

  if (isDesktop.windows()) {
    $id.innerHTML +=
      "<br><p><mark>Este contenido solo se ve en Windows<mark></p>";
  }

  //*Redirecciones*
  if (isMobile.android()) {
    w.location.href = "https://codereggs.tech/wordpress";
  }
}

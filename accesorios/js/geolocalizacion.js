const d = document,
  n = navigator;

export default function getGeoLocation(id, button) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    },
    $button = d.getElementById(button);

  const success = (position) => {
    console.log(position);
    $id.innerHTML = `<br><ul>
     <li>Precisión: ${position.coords.accuracy}</li>
     <li>Latitud: ${position.coords.latitude}</li>
     <li>Longitud: ${position.coords.longitude}</li><br>
     <li><a id="geoGmaps" target="_blank" href="https://www.google.com.ar/maps/@${position.coords.latitude},${position.coords.longitude}z">Haz click aquí para verlo en Gmaps</a></li>
     <li><p><b>Importante</b>, <mark>la información obtenida dependerá de la presición que tenga el GPS o tarjeta de red.</mark></p></li>
     </ul>`;
  };

  const error = (err) => {
    console.log(`Error: ${err.code} ${err.message}`);
    $id.innerHTML = `<br><p><mark>Se ha producido el siguiente error: Codigo N° ${err.code}, ${err.message}</mark></p>`;
  };

  $button.addEventListener("click", () => {
    if ($button.textContent === "Desactivar Geolocalización.") {
      alert("Desactivando geolocalización.");
      $id.innerText = "";
      return ($button.innerText = "Activar Geolocalización.");
    }
    alert("Activando Geolocalización.");
    n.geolocation.getCurrentPosition(success, error, options);
    $button.innerText = "Desactivar Geolocalización.";
  });
}

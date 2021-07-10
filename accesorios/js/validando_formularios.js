const d = document;
export default function contactFormValidations() {
  //Buscar el selector del formulario (HTML: form)
  const $form = d.querySelector("#vFormulario"),
    //Buscar todos los hijos de ese formulario que sean "required"
    $inputs = d.querySelectorAll(`#vFormulario>*[required]`);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches("#vFormulario>*[required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");
      //Aparecemos el loader y eliminamos el formulario
      $loader.classList.remove("none");
      $form.classList.add("none");
      //Colocamos tiempo para desaparecer el loader, aparecer la respuesta y blanquear formulario
      let trespuesta = setTimeout((e) => {
        $loader.classList.add("none");
        $response.classList.remove("none");
        $inputs.forEach((input) => {
          input.value = "";
        });
        //Establecemos tiempo para quitar la respuesta.
        let tfinal = setTimeout((e) => {
          $response.classList.add("none");
          $form.classList.remove("none");
        }, 6000);
      }, 4000);
    }
  });
}

let buscador = document.getElementById("buscador");

buscador.addEventListener("input", function() {

  let textoBuscado = buscador.value.toLowerCase();

  let labels = document.querySelectorAll("label[for^='iphone-']");

  for (let i = 0; i < labels.length; i++) {

    let nombreIphone = labels[i].querySelector(".celular p").innerText.toLowerCase();

    // Obtenemos el id del label (ej: "iphone-13")
    let forId = labels[i].getAttribute("for");

    // Con ese id buscamos el checkbox correspondiente
    let checkbox = document.getElementById(forId);

    // Buscamos el bloque de info que sigue al label
    let bloqueInfo = document.querySelector(".bloque-info-" + forId.replace("iphone-", ""));

    if (nombreIphone.includes(textoBuscado)) {

      // Si coincide mostramos el label
      labels[i].style.display = "flex";

    } else {

      // Si no coincide ocultamos el label
      labels[i].style.display = "none";

      // Cerramos el bloque de características desmarcando el checkbox
      checkbox.checked = false;

      // Ocultamos el bloque de info por las dudas
      if (bloqueInfo) {
        bloqueInfo.style.display = "none";
      }

    }
  }

});
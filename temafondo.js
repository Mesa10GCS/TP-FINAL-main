// Seleccionamos el botón que va a activar el cambio de tema
// document.getElementById busca en el HTML el elemento con id="btnTema"
const btnTema = document.getElementById("btnTema");

// Seleccionamos el body, que es donde vamos a cambiar el fondo y colores
const body = document.body;

// Agregamos un "escucha de evento" al botón
// Cada vez que el usuario haga click, se ejecuta la función de adentro
btnTema.addEventListener("click", function() {

  // classList.toggle agrega la clase si no está, o la saca si ya está
  // Es decir: si el body NO tiene la clase "oscuro", la agrega
  // Si YA la tiene, la saca — así alternamos entre claro y oscuro
  body.classList.toggle("oscuro");

  // Verificamos si el body tiene la clase "oscuro" en este momento
  // classList.contains devuelve true o false
  if (body.classList.contains("oscuro")) {

    // Si está en modo oscuro, cambiamos el texto del botón
    btnTema.innerText = "☀️ Modo Claro";

  } else {

    // Si está en modo claro, volvemos al texto original
    btnTema.innerText = "🌙 Modo Oscuro";

  }

});
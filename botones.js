// Seleccionamos el botón de página principal
let btnPrincipal = document.querySelector(".boton-paginaprincipal p");

// Seleccionamos el botón de comprar
let btnComprar = document.querySelector(".boton-comprar p");

let btnCatalogo = document.querySelector(".boton-catalogo p");
// Si existe el botón principal en esta página, le agregamos el evento
if (btnPrincipal) {

  btnPrincipal.addEventListener("mouseover", function() {
    btnPrincipal.style.color = "#7162ff";
  });

  btnPrincipal.addEventListener("mouseout", function() {
    btnPrincipal.style.color = "";
  });

}

// Si existe el botón comprar en esta página, le agregamos el evento
if (btnComprar) {

  btnComprar.addEventListener("mouseover", function() {
    btnComprar.style.color = "#7162ff";
  });

  btnComprar.addEventListener("mouseout", function() {
    btnComprar.style.color = "";
  });
}

  if (btnCatalogo) {

  btnCatalogo.addEventListener("mouseover", function() {
    btnCatalogo.style.color = "#7162ff";
  });

  btnCatalogo.addEventListener("mouseout", function() {
    btnCatalogo.style.color = "";
  });
  }

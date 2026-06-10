// Seleccionamos todos los párrafos con el nombre de cada iPhone
let nombres = document.querySelectorAll(".celular p");

// for para recorrer cada nombre
for (let i = 0; i < nombres.length; i++) {

  // Evento mouseover: cuando el mouse entra al texto
  nombres[i].addEventListener("mouseover", function() {

    // Cambiamos el color del texto con style.color, como dice el apunte
    nombres[i].style.color = "#7162ff";

  });

  // Evento mouseout: cuando el mouse sale
  nombres[i].addEventListener("mouseout", function() {

    // Volvemos al color original
    nombres[i].style.color = "";

  });

}
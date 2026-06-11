// setTimeout del apunte: ejecuta la función una sola vez después del tiempo indicado
// 1000 = 1 segundo, así le da tiempo a la página a cargar antes de mostrar el cartel
setTimeout(function() {

  // Verificamos si ya fue mostrado antes
  if (!localStorage.getItem("popupMostrado")) {

    // alert muestra el cartel emergente
    alert("👋 ¡Bienvenido al catálogo! Encontrá tu iPhone ideal 📱");

    // Guardamos que ya fue mostrado para no repetirlo
    localStorage.setItem("popupMostrado", "true");
  }

}, 1000)

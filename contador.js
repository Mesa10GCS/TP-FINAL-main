
let fechaFin = new Date("2026-08-31T23:59:59");

setInterval(function() {
    let ahora = new Date();
    let diferencia = fechaFin - ahora;

    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = 
        dias + "d " + horas + "h " + minutos + "m " + segundos + "s";
}, 1000);
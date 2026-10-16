const formularioContacto = document.getElementById("formContacto");

formularioContacto.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;

    alert("Gracias, " + nombre + ". El mensaje se registró como demostración.");

    formularioContacto.reset();
});
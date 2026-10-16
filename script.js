const botonTema = document.getElementById("cambiarTema");

botonTema.addEventListener("click", function () {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        botonTema.textContent = "Tema claro";
    } else {
        botonTema.textContent = "Cambiar tema";
    }
});

const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;

    alert("¡Gracias, " + nombre + "! Tu formulario se envió correctamente como demostración.");

    formulario.reset();
});
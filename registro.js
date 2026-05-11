
function validar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var clave = document.getElementById("clave").value;
    var clave2 = document.getElementById("clave2").value;

    if (nombre == "") {
        alert("Por favor ingrese su nombre");
    }

    if (apellido == "") {
        alert("Por favor ingrese su apellido");
    }

    if (email == "") {
        alert("Por favor ingrese su email");
    }

    if (clave == "") {
        alert("Por favor ingrese una contraseña");
    }

    if (clave != clave2) {
        alert("Las contraseñas no coinciden");
    }

    if (nombre != "" && apellido != "" && email != "" && clave != "" && clave == clave2) {
        window.location.href = "./seleccion.html";
    }
}

function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("clave").value = "";
    document.getElementById("clave2").value = "";
    document.getElementById("resultado-login").textContent = "";
}

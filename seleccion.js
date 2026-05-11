
function mostrar() {
    var tipo = document.getElementById("tipo").value;
    var marca = document.getElementById("marca").value;
    var talle = document.getElementById("talle").value;
    var estilo = document.getElementById("estilo").value;

    var textoTipo = "";
    if (tipo == "1") { textoTipo = "Running"; }
    if (tipo == "2") { textoTipo = "Futbol"; }
    if (tipo == "3") { textoTipo = "Basketball"; }
    if (tipo == "4") { textoTipo = "Training"; }
    if (tipo == "5") { textoTipo = "Tennis"; }
    if (tipo == "6") { textoTipo = "Lifestyle"; }

    var textoMarca = "";
    if (marca == "1") { textoMarca = "Nike"; }
    if (marca == "2") { textoMarca = "Adidas"; }
    if (marca == "3") { textoMarca = "Puma"; }
    if (marca == "4") { textoMarca = "New Balance"; }
    if (marca == "5") { textoMarca = "Reebok"; }
    if (marca == "6") { textoMarca = "Asics"; }

    var textoTalle = "";
    if (talle == "1") { textoTalle = "38"; }
    if (talle == "2") { textoTalle = "39"; }
    if (talle == "3") { textoTalle = "40"; }
    if (talle == "4") { textoTalle = "41"; }
    if (talle == "5") { textoTalle = "42"; }
    if (talle == "6") { textoTalle = "43"; }
    if (talle == "7") { textoTalle = "44"; }
    if (talle == "8") { textoTalle = "45"; }

    var textoEstilo = "";
    if (estilo == "1") { textoEstilo = "Classic"; }
    if (estilo == "2") { textoEstilo = "Retro"; }
    if (estilo == "3") { textoEstilo = "Modern"; }
    if (estilo == "4") { textoEstilo = "Futurista"; }
    if (estilo == "5") { textoEstilo = "Low-Top"; }
    if (estilo == "6") { textoEstilo = "High-Top"; }

    document.getElementById("preview-texto").textContent =
        "Marca: " + textoMarca +
        " | Tipo: " + textoTipo +
        " | Talle: " + textoTalle +
        " | Estilo: " + textoEstilo;
}

function continuar() {
    var tipo = document.getElementById("tipo").value;
    var marca = document.getElementById("marca").value;
    var talle = document.getElementById("talle").value;
    var estilo = document.getElementById("estilo").value;

    if (tipo == "0") {
        alert("Por favor seleccione el tipo de zapatilla");
    }

    if (marca == "0") {
        alert("Por favor seleccione una marca");
    }

    if (talle == "0") {
        alert("Por favor seleccione un talle");
    }

    if (estilo == "0") {
        alert("Por favor seleccione un estilo");
    }

    if (tipo != "0" && marca != "0" && talle != "0" && estilo != "0") {
        window.location.href = "./pago.html?tipo=" + tipo + "&marca=" + marca + "&talle=" + talle + "&estilo=" + estilo;
    }
}

function limpiar() {
    document.getElementById("tipo").value = "0";
    document.getElementById("marca").value = "0";
    document.getElementById("talle").value = "0";
    document.getElementById("estilo").value = "0";
    document.getElementById("preview-texto").textContent = "";
    document.getElementById("resultado-seleccion").textContent = "";
}

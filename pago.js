
function obtenerParametro(nombre) {
    var url = window.location.search;
    var inicio = url.indexOf(nombre + "=");
    if (inicio == -1) { return "0"; }
    inicio = inicio + nombre.length + 1;
    var fin = url.indexOf("&", inicio);
    if (fin == -1) { fin = url.length; }
    return url.substring(inicio, fin);
}

function mostrarResumen() {
    var tipo = obtenerParametro("tipo");
    var marca = obtenerParametro("marca");
    var talle = obtenerParametro("talle");
    var estilo = obtenerParametro("estilo");

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

    document.getElementById("res-marca").textContent = textoMarca;
    document.getElementById("res-tipo").textContent = textoTipo;
    document.getElementById("res-talle").textContent = textoTalle;
    document.getElementById("res-estilo").textContent = textoEstilo;
}


function calcularPrecio() {
    var marca = obtenerParametro("marca");
    var tipo = obtenerParametro("tipo");
    var estilo = obtenerParametro("estilo");

    var precio = 0;

    
    if (marca == "1") { precio = 95000; }
    if (marca == "2") { precio = 88000; }
    if (marca == "3") { precio = 72000; }
    if (marca == "4") { precio = 85000; }
    if (marca == "5") { precio = 68000; }
    if (marca == "6") { precio = 91000; }


    if (tipo == "1") { precio = precio + 15000; }
    if (tipo == "2") { precio = precio + 8000; }
    if (tipo == "3") { precio = precio + 22000; }
    if (tipo == "4") { precio = precio + 5000; }
    if (tipo == "5") { precio = precio + 12000; }
    if (tipo == "6") { precio = precio - 5000; }

    
    if (estilo == "2") { precio = precio + 8000; }
    if (estilo == "4") { precio = precio + 15000; }
    if (estilo == "6") { precio = precio + 6000; }

    var iva = parseInt(precio * 0.21);
    var envio = 4500;
    if (precio > 100000) { envio = 0; }
    var total = precio + iva + envio;

    document.getElementById("res-base").textContent = "$ " + precio.toLocaleString();
    document.getElementById("res-iva").textContent = "$ " + iva.toLocaleString();
    document.getElementById("res-envio").textContent = "$ " + envio.toLocaleString();
    document.getElementById("resultado-precio").textContent = "TOTAL: $ " + total.toLocaleString();
}


function confirmar() {
    var metodoPago = document.getElementById("metodo-pago").value;
    var cuotas = document.getElementById("cuotas").value;

    if (metodoPago == "0") {
        alert("Por favor seleccione un metodo de pago");
    }

    if (cuotas == "0") {
        alert("Por favor seleccione las cuotas");
    }

    if (metodoPago == "1" && cuotas != "0") {
        document.getElementById("resultado-confirmacion").textContent = "Compra confirmada! Pago con Tarjeta en " + cuotas + " cuotas.";
        document.getElementById("resultado-pago").textContent = "";
    }

    if (metodoPago == "2" && cuotas != "0") {
        document.getElementById("resultado-confirmacion").textContent = "Compra confirmada! Transferencia bancaria. Alias: NAKA.STORE.PAY";
        document.getElementById("resultado-pago").textContent = "";
    }

    if (metodoPago == "3" && cuotas != "0") {
        document.getElementById("resultado-confirmacion").textContent = "Compra confirmada! Pago en efectivo. Codigo: NAK" + parseInt(Math.random() * 9000000 + 1000000);
        document.getElementById("resultado-pago").textContent = "";
    }
}

mostrarResumen();
calcularPrecio();

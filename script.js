
function calcular() {
    // especialidad
    var esp = document.getElementById('especialidad').value;
    var precioBase = total;
    if (esp == 'clasica') {
        precioBase = total + 80;
    } else if (esp == 'bbq') {
        precioBase = total + 100;
    } else if (esp == 'tocino') {
        precioBase = total + 120;
    } else if (esp == 'doble') {
        precioBase = total + 150;
    } else if (esp == 'hawaiana') {
        precioBase = total + 180;
    }

    //tipo de pan
    var pan = document.getElementById("pan").value;
    if (pan == "clasico") {
        precioBase += 0;
    } else if (pan == "ajonjoli") {
        precioBase += 20;
    } else if (pan == "integral") {
        precioBase += 20;
    } else if (pan == "brioche") {
        precioBase += 50;
    }
    //ingredientes extras
    var ingredientes = document.getElementsByName("checkbox");
    for (var i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].checked) {
            precioBase += 5;
        }
    }
//Cantidad de baguets
    var cantidadBaguets = document.getElementById("cantidadBaguets").value;
    precioBase += cantidadBaguets * 30;

   //es a domicilio?
    var domicilio = document.getElementById("domicilio").checked;
    if (domicilio) {
        precioBase += 30;
    }
    //total
    document.getElementById("total").innerHTML = "Total: $" + precioBase.toFixed(2);
}
var registros = "<tr><th>Nombre</th><th>Correo</th><th>Género</th><th>Intereses</th><th>Hora</th><th>Color</th><th>Calificación</th></tr>";
var estilo = 0;

function validar() {
    var nombre = document.getElementById("Nombre").value.trim();
    var correo = document.getElementById("Correo").value.trim();
    var genero = document.querySelector('input[name="gender"]:checked');
    var hora = document.getElementById("Hora").value;
    var color = document.getElementById("Color").value;
    var calificacion = document.getElementById("Calificacion").value;

    if (nombre === "") {
        alert("El campo Nombre está vacío");
        return;
    } else if (correo === "") {
        alert("El campo Correo está vacío");
        return;
    } else if (!genero) {
        alert("Debe seleccionar un género");
        return;
    } else if (hora === "") {
        alert("Debe seleccionar la hora");
        return;
    } else if (color === "") {
        alert("Debe elegir un color");
        return;
    } else if (calificacion === "") {
        alert("Debe seleccionar la calificación");
        return;
    }

    var intereses = "";
    var z = document.querySelectorAll('input[name=interes]:checked');
    for (var v of z) {
        intereses += v.value + ", ";
    }
    if (intereses === "") {
        alert("Debe seleccionar al menos un interés");
        return;
    }
    intereses = intereses.slice(0, -2);


    if (estilo % 2 === 0) {
        registros += "<tr class='renglon1'>";
    } else {
        registros += "<tr class='renglon2'>";
    }
    estilo++;

    registros += "<td>" + nombre + "</td>";
    registros += "<td>" + correo + "</td>";
    registros += "<td>" + genero.value + "</td>";
    registros += "<td>" + intereses + "</td>";
    registros += "<td>" + hora + "</td>";
    registros += "<td><div style='width:20px; height:20px; background:" + color + "; border-radius:50%;'></div></td>";
    registros += "<td>" + calificacion + "</td>";
    registros += "</tr>";

    document.getElementById("tabla").innerHTML = registros;

    document.getElementById("registroForm").reset();
}

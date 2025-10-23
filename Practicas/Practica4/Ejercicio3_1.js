function info(){
    var Nombre= document.getElementById("Nombre").value;
    var Correo= document.getElementById("Correo").value;
    var Edad= document.getElementById("Edad").value;
    var Fecha= document.getElementById("Fecha").value;
    var Color= document.getElementById("Color").value;

    var Genero= "";
    var radios = document.getElementsByName("Genero");
    for(var i=0;i<radios.length; i++){
        if(radios[i].checked){
            Genero=radios[i].value;
            break;
        }
    }
    if (!Nombre||!Correo||!Edad||!Genero||!Fecha||!Color){
        document.getElementById("resultado").innerHTML = "Por favor, complete todos los campos.";
        return;
    }
    document.getElementById("Resultado").innerHTML = Nombre + ' cuyo correo es: '+
    Correo+ ' tiene '+ Edad + ' años de edad. Su genero es: '+Genero+ '. Nació el '+
    Fecha+' y su color favorito es ' +Color;
}
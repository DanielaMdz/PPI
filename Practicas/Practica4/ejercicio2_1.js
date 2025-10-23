function filtrado(){
    var valor = document.getElementById("numero").value;
    var x = parseInt(valor);

    var resultado = factorial(Math.abs(x));

    document.getElementById("resultado").innerHTML = 
        x + "! = " + resultado;
}
function factorial(x){
    if (x === 0 || x === 1) {  
        return 1;
    } else {                  
        return x * factorial(x - 1);
    }
}

function borrar(){
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("numero").value = null;
}
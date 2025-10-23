
        function calificacion(){
            var x = document.getElementById("numero").value;
            if(x<6 && x>=0){
                document.getElementById("resultado").innerHTML = 'NA';
            }else if (x<7.5){
                document.getElementById("resultado").innerHTML = 'S';
            }else if (x<9){
                document.getElementById("resultado").innerHTML = 'B';
            }else if (x<10){
                document.getElementById("resultado").innerHTML = 'MB';
            }else if (x==10){
                document.getElementById("resultado").innerHTML = 'LAP';
            }else{
                document.getElementById("resultado").innerHTML = 'Error';
            }
        }
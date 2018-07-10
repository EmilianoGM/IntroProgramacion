function mostrar()
{
//tomo la edad  
    var edad;

    edad = document.getElementById("edad").value;
    
    edad = parseInt(edad); 
    if (edad < 13) {
        alert("Es niño.");
    }
    else if (edad >= 13 && edad <= 17) {
        alert("Es adolescente.");
    }
    else {
        alert("Es adulto.");
    }


}//FIN DE LA FUNCIÓN
function mostrar()
{
//tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);
    if (edad < 13) {
        alert("Es niño.");
    }
    else if (edad >= 13 && edad <= 17) {
        alert("Es adolescente.");
    }
    else if (edad > 17){
        alert("Es adulto.");
    }


}//FIN DE LA FUNCIÓN
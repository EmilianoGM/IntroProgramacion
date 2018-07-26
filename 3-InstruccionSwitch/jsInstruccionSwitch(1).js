function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    switch (mesDelAño) {
        case "Enero":
            alert("Que comiences bien el año!");
            break;
        case "Marzo":
            alert("A clases!");
            break;
        case "Julio":
            alert("Se vienen las vacaciones!");
            break;
        case "Diciembre":
            alert("Felices fiestas!");
            break;
        default:
            alert("No se ingreso ningún mes enunciado.");
            break;
    }



}//FIN DE LA FUNCIÓN
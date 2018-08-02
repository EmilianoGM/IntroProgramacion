function mostrar()
{
    var dia;

    dia = prompt("Ingrese día de la semana:");
    dia = dia.toLowerCase();

    switch(dia){
        case "sabado":
        case "sábado":
        case "domingo":
            alert("Buen finde.");
            break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "miércoles":
        case "jueves":
        case "viernes":
            alert("A trabajar.");
            break;
        default:
            alert("No es un día de la semana.");
    }
}

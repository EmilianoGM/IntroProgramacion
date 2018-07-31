function mostrar()
{
    var numero;
    numero = prompt("Numero:");
    numero = parseInt(numero);
    for(var cont = 1; cont < numero; cont++){
        if(numero % cont == 0){
            alert("No es primo");
            break;
        } else {
            alert("Es primo");
            break;
        }
    }


}//FIN DE LA FUNCIÓN
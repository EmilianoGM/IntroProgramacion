function mostrar()
{
    var numero;
    numero = prompt("Numero:");
    numero = parseInt(numero);

    for(cont = 1; cont <= numero; cont++){
        if(cont % 2 == 0){
            alert(cont);
        }
    }

}//FIN DE LA FUNCIÓN
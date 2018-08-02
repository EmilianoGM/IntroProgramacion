function mostrar()
{
    var numero;
    var contPares = 0;

    numero = prompt("Ingrese número:");
    numero = parseInt(numero);
    
    for(var cont = 1; cont <= numero; cont++){
        if(cont % 2 == 0){
            alert("Numero par: " + cont);
            contPares++;
        }
    }

    alert("Cantidad de pares: " + contPares);
}//FIN DE LA FUNCIÓN
function mostrar()
{
    var numero;
    var contDivisores = 0;

    numero = prompt("Ingrese número");
    numero = parseInt(numero);

    for(var cont = 1; cont <= numero; cont++){
        if(numero % cont == 0){
            contDivisores++;
            alert("Numero divisor: " + cont);
        }
    }

    alert("Cantidad de divisores: " + contDivisores);
}//FIN DE LA FUNCIÓN
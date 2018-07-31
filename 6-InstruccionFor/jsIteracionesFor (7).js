function mostrar()
{
    var numero;
    var contDivisores = 0;
    numero = prompt("Numero:");
    numero = parseInt(numero);
    for(var cont = 2; cont < numero; cont++){
        if(numero % cont == 0){
            contDivisores++;
            alert("Es divisor: " + cont);
        }
    }
    alert("Cantidad de divisores = " + contDivisores);


}//FIN DE LA FUNCIÓN
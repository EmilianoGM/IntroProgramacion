function mostrar()
{    
    var numero;
    var contPrimos = 0;
    
    numero = prompt("Ingrese número:");
    numero = parseInt(numero);

    for(var cont = 2; cont < numero; cont++){
        if(numero == 2) {
            contPrimos++;
            break;
        }
        var flag = true;
        for(var contDos = 2; contDos < numero; cont++){
            if(cont % contDos == 0){
                flag ==
            }
        }
    }
/*    for(var cont = 1; cont <= numero; cont++){
        var contDivisores = 0;
        for(var contDos = 1; contDos <= cont; contDos++){
            if(cont % contDos == 0){
                contDivisores++;
            }            
        }
        if(contDivisores == 2){
            contPrimos++;
        }
    }
    alert("Cantidad de primos = " + contPrimos);
*/






/*    for(var cont = 1; cont <= numero; cont++){
        if(numero % cont == 0){
            contDivisores++;
        }
    }

    if(contDivisores == 2){
        alert("Es primo.");
    } else {
        alert("No es primo.");
    }
*/  
}//FIN DE LA FUNCIÓN













































/*    var numero;
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

*/
function mostrar()
{
    var edad;
    var sexo;
    var nombre;
    var nombreMayor;
    var nombreMenor;
    var sexoMayor;
    var nombreMujerMayor;
    var minEdad = 101;
    var maxEdad = 0;
    var promedioEdadMujeres;
    var promedioEdadHombres;
    var promedioEdadTotal;
    var contador = 0;
    var edadMujeres = 0;
    var edadHombres = 0; 
    var contMujeres = 0;
    var contHombres = 0;
    var contMayores = 0;
    var contMenores = 0;
    var contMayoresHombres = 0;
    
    while(contador < 4) {
        contador++;

        nombre = prompt("Introduzca nombre:");
        
        edad = prompt("Ingrese edad (0 - 100):");
        edad = parseInt(edad);
        while(edad < 0 || edad > 100 || isNaN(edad)) {
            edad = prompt("Incorrecto. Ingrese edad (0-100):");
            edad = parseInt(edad);
        }
    
        sexo = prompt("Ingrese sexo (m = masculino / f = femenino):");
        sexo = sexo.toLowerCase();
        while(sexo != "f" && sexo != "m"){
            sexo = prompt("Incorrecto. Ingrese sexo (m / f):");
            sexo = sexo.toLowerCase();
        }

        if(sexo == "f") {
            contMujeres++;
            edadMujeres = edadMujeres + edad;        
        } else {
            contHombres++;
            edadHombres = edadHombres + edad;
        }

        if(edad >= 18) {
            contMayores++;
            if(sexo == "m") {
            contMayoresHombres++;
            }
        } else {
            contMenores++;
        }

        if(edad > maxEdad) {
            maxEdad = edad;
            nombreMayor = nombre;
            sexoMayor = sexo;
            if(sexo == "f"){
                nombreMujerMayor = nombre;
            }
        }

        if(edad < minEdad) {
            minEdad = edad;
            nombreMenor = nombre;
        }
    }

    promedioEdadMujeres = edadMujeres / contMujeres;
    promedioEdadHombres = edadHombres / contHombres;
    promedioEdadTotal = (edadMujeres + edadHombres) / (contMujeres + contHombres);

    switch(sexoMayor) {
        case "m":
            sexoMayor = "Masculino";
            break;        
        default:
            sexoMayor = "Femenino";
    }

    document.write("1. Cantidad mujeres = " + contMujeres + "<br>");
    document.write("2. Cantidad hombres = " + contHombres + "<br>");
    document.write("3. Cantidad mayores de edad = " + contMayores + "<br>");
    document.write("4. Cantidad menores de edad = " + contMenores + "<br>");
    document.write("4.1 Cantidad hombres mayores = " + contMayoresHombres + "<br>");
    document.write("5. Edad menor = " + minEdad + "<br>");
    document.write("6. Edad mayor = " + maxEdad + "<br>");
    document.write("7. Promedio de edad mujeres = " + promedioEdadMujeres + "<br>");
    document.write("8. Promedio de edad hombres = " + promedioEdadHombres + "<br>");
    document.write("9. Promedio de edad total = " + promedioEdadTotal + "<br>");
    document.write("10. Nombre del mayor = " + nombreMayor + "<br>");
    document.write("11. Nombre del menor = " + nombreMenor + "<br>");
    document.write("12. Sexo del mayor = " + sexoMayor + "<br>");
    document.write("13. Nombre de la mujer mayor = " + nombreMujerMayor + "<br>");

}
/* pedir datos y validar: edad y sexo. nombres

1 cantidad mujeres, 2cantidad hombres, 3 cantidad mayores de edad, 4menores de edad, 
4.1 cantidad hombres mayores de edad, 5 la edad mas baja, 6 la edad mas alta,
 7 promedio de edad mujeres, 8 promedio de edad hombres,
9 promedio de edad total, 10 nombre del mayor, 11 nombre del menor, 12 sexo del mas viejo, 
13 nombre de la mujer mas vieja.
*/
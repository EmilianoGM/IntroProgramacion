function mostrar()
{
    var nota;
    var sexo;
    var edad;
    var cont = 0;
    var sumNotas;
    var contNotas = 0;
    var minNota = 11;
    var sexoMinNota;
    var contMayoresMasDeSeis = 0;
    var minEdad = 101;
    var sexoJoven;
    var notaJoven;
    var contMujer = 0;
    var edadPrimerMujer;
    var notaPrimerMujer;
    var promedio;

    while(cont <= 5){
        cont++;

        edad = prompt("Ingrese edad:");
        edad = parseInt(edad);
        
        nota = prompt("Ingrese nota (0-10):");
        nota = parseInt(nota);
        while(nota < 0 || nota > 10){
            nota = prompt("Error, ingrese nota valida(0-10):");
            nota = parseInt(nota);
        }

        sexo = prompt("Ingrese sexo (f / m):");
        sexo = sexo.toLowerCase();
        while(sexo != "m" && sexo != "f"){
            sexo = prompt("Error, ingrese sexo válido(f / m):");
            sexo = sexo.toLowerCase();
        }
        sumNotas = sumNotas + nota;
        contNotas++;

        if(nota < minNota){
            minNota = nota;
            sexoMinNota = sexo;
        }

        if(nota >= 6 && sexo == "m" && edad > 18){
            contMayoresMasDeSeis++;
        }

        if(edad < minEdad){
            minEdad = edad;
            sexoJoven = sexo;
            notaJoven = nota;
        }

        if(sexo == "f"){
            contMujer++;
            if(contMujer == 1) {
                edadPrimerMujer = edad;
                notaPrimerMujer = nota;
            }
        }



    }

    promedio = sumNotas / contNotas;

    alert("Promedio de notas: " + promedio + ".Notas mas baja: " + minNota + ".Sexo de la nota más baja: "
    + sexoMinNota + "Cantidad de varones mayores a 18 y nota mayor o iual a 6: " + contMayoresMasDeSeis + 
    ".Sexo y nota del más joven: " + sexoJoven + ", " + notaJoven);
    
    if(contMujer > 0) {
        alert("Edad y nota de la primer mujer ingresada: "+ edadPrimerMujer + ", " + notaPrimerMujer);
    } else {
        alert("No hubo mujeres.");
    }


}

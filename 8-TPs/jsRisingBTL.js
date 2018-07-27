/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadoCivil;
    var sueldoBruto;
    var numeroLegajo;
    var nacionalidad;

    edad = prompt("Ingrese edad (18-90 años):");
    edad = parseInt(edad);
    while (edad < 18 || edad > 90 || isNaN(edad)) {
        edad = prompt("Valor incorrecto, ingrese edad (18-90 años):")
        edad = parseInt(edad);
    }

    sexo = prompt("Ingrese sexo (M para masculino / F para femenino):");
    sexo = sexo.toLowerCase();
    while(sexo != "m" && sexo != "f") {
        sexo = prompt("Valor incorrecto, ingrese F o M:");
        sexo = sexo.toLowerCase();
    }

    estadoCivil = prompt("Ingrese estado civil (1=Soltero, 2=Casado, 3=Divorciado, 4=Viudo):");
    estadoCivil = parseInt(estadoCivil);
    while(estadoCivil < 1 || estadoCivil > 4 || isNaN(estadoCivil)) {
        estadoCivil = prompt("Valor incorrecto, ingrese número del 1 al 4(1=Soltero, 2=Casado, 3=Divorciado, 4=Viudo):");
        estadoCivil = parseInt(estadoCivil);
    }

    sueldoBruto = prompt("Ingrese sueldo bruto(no menor a 8000):");
    sueldoBruto = parseInt(sueldoBruto);
    while (sueldoBruto < 8000 || isNaN(sueldoBruto)) {
        sueldoBruto = prompt("Valor incorrecto, ingrese numero no menor a 8 mil:");
        sueldoBruto = parseInt(sueldoBruto);
    }

    numeroLegajo = prompt("Ingrese número de legajo (4 cifras sin ceros a la izquierda):");
    numeroLegajo = parseInt(numeroLegajo);
    while (numeroLegajo < 1000 || numeroLegajo > 9999 || isNaN(numeroLegajo)) {
        numeroLegajo = prompt("Valor incorrecto, ingrese número de legajo (4 cifras sin ceros a la izquierda):");
        numeroLegajo = parseInt(numeroLegajo);
    }

    nacionalidad = prompt("Ingrese nacionalidad (A=argentino, E=extranjero, N=nacionalizado):");
    nacionalidad = nacionalidad.toLowerCase();
    while (nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n") {
        nacionalidad = prompt("Valor incorrecto, ingrese nacionalidad (A=argentino, E=extranjero, N=nacionalizado):");
        nacionalidad = nacionalidad.toLowerCase();
    }

    switch(sexo) {
        case "m":
            sexo = "Masculino";
            break;
        case "f":
            sexo = "Femenino";
    }

    switch(estadoCivil) {
        case 1:
            estadoCivil = "Soltero";
            break;
        case 2:
            estadoCivil = "Casado";
            break;
        case 3:
            estadoCivil = "Divorciado";
            break;
        case 4:
            estadoCivil = "Viudo";
    }

    switch(nacionalidad) {
        case "a":
            nacionalidad = "Argentino";
            break;
        case "e":
            nacionalidad = "Extranjero";
            break;
        case "n":
            nacionalidad = "Nacionalidad";
    }
    
    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = estadoCivil;
    document.getElementById("Sueldo").value = sueldoBruto;
    document.getElementById("Legajo").value = numeroLegajo;
    document.getElementById("Nacionalidad").value = nacionalidad;
}

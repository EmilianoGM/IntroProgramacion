function mostrar()
{
    var numeroUno;
    var numeroDos;
    var division;
    var suma;

    numeroUno = prompt("Ingrese el primer número:");
    numeroUno = parseInt(numeroUno);

    numeroDos = prompt("Ingrese el segundo número:");
    numeroDos = parseInt(numeroDos);

    if(numeroUno == numeroDos){
        alert("Los numeros son " + numeroUno + " y " + numeroDos);
    } else {
        if(numeroUno > numeroDos){
        division = numeroUno / numeroDos;
        alert(division);
        } else {
            suma = numeroUno + numeroDos;
            if(suma < 50) {
                alert("La suma es " + suma + " y es menor a 50.");
            } else {
                alert("La suma es " + suma);
            }
        }
    }
}

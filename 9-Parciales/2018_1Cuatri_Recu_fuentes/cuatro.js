function mostrar()
{
    var numero1;
    var numero2;
    var division;
    var suma;

    numero1 = prompt("Primer número:");
    numero2 = prompt("Segundo número:");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    if (numero1 == numero2) {
        alert("Son " + numero1 + " " + numero2);
    } else if (numero1 > numero2) {
        division = numero1 / numero2;
        alert("Resultado " + division);
    } else {
        suma = numero1 + numero2;
        if (suma < 50 ){
            alert("La suma es " + suma + " y es menor a 50.");
        } else {
            alert("Resultado " + suma);
        }
    }
}

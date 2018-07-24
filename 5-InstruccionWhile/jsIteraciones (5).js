function mostrar()
{

var sexo = prompt("ingrese f ó m .");
    while(sexo != "m" && sexo != "f") {
        sexo = prompt("Error. Ingrese f o m.");
    }


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
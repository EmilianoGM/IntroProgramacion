function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == "si") {
		acumulador += parseInt(prompt("Ingrese número: "));
		contador++;
		respuesta = prompt("Quiere continuar (si/no): ");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
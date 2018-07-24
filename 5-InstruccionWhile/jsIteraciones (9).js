function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var max;
	var min;
	var respuesta='si';

	while(respuesta!='no') {
		contador ++
		numero = prompt("Ingrese número: ");
		numero = parseInt(numero);
		if (contador == 1) {
			max = numero;
			min= numero;
		} else {
			if(numero >= max) {
				max = numero;
			}
			if(numero <= min) {
				min = numero;
			}
		}
		respuesta = prompt("¿Quiere continuar? (si/no): ");
	
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN
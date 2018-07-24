function mostrar()
{
	var contador=0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	//declarar contadores y variables 
	var positivos = 0;
	var negativos = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var numero;

	var respuesta="si";


	while(respuesta!="no")
	{
		numero = prompt("Ingrese número: ");
		numero = parseInt(numero);
		while(isNaN(numero)) {
			numero = prompt("Ingrese número: ");
			numero = parseInt(numero);
		}
		if (numero > 0) {
			positivos += numero;
			contadorPositivos++; 
		} else if (numero < 0) {
			negativos += numero;
			contadorNegativos++;			
		}
		if (numero == 0) {
			contadorCeros++;
		}
		if(numero % 2 == 0) {
			contadorPares++;
		}
		respuesta = prompt("¿Continuar? (si/no): ");
	}

	promedioPositivos = positivos / contadorPositivos;
	promedioNegativos = negativos / contadorNegativos;
	diferencia = contadorPositivos - contadorNegativos;

	document.write("Suma de negativos = " + negativos);
	document.write("<br>Suma de positivos = " + positivos); 
	document.write("<br>Cantidad de positivos = " + contadorPositivos);
	document.write("<br>Cantidad  de negativos = " + contadorNegativos); 
	document.write("<br>Cantidad de ceros = " + contadorCeros);
	document.write("<br>Cantidad de pares = " + contadorPares);
	document.write("<br> Promedio de positivos = " + promedioPositivos);
	document.write("<br> Promedio de negativos = " + promedioNegativos); 
	document.write("<br> Diferencia = " + diferencia);
}//FIN DE LA FUNCIÓN
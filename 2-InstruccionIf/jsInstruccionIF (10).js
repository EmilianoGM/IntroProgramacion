function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota = Math.ceil(Math.random() * 10);
	
	if (nota >= 9) {
		alert("Nota del examen: " + nota + ". EXCELENTE.");
	} else if (nota >= 4) {
		alert("Nota del examen: " + nota + ". APROBÓ.");	
	} else {
		alert("Nota del examen: " + nota + ". Vamos, la próxima se puede.");
	}


}//FIN DE LA FUNCIÓN
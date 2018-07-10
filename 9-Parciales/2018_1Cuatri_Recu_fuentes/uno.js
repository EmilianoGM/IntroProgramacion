
function mostrar()
{
    var base;
    var altura;
    var supeficie;
    var perimetro;
    
    base = prompt("Escribir base:");
    altura = prompt("Escribir altura");

    base = parseInt(base);
    altura = parseInt(altura);
    
    superficie = (base * altura) / 2;
    perimetro = base * 3;
    
    alert("La superficie del triángulo es " + superficie + " y el perímetro es " + perimetro + ".");
}

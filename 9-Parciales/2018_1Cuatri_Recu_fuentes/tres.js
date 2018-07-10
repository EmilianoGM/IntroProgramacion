function mostrar()
{
    var precio;
    var descuento;
    var descuentoEnDinero;
    var precioConDescuento;
    var iva;
    var precioFinal;

    precio = prompt("Precio:");
    descuento = prompt("Descuento (en porcentaje sin el signo %):");
    
    precio= parseInt(precio);
    descuento = parseInt(descuento);
    descuentoDinero = precio * (descuento / 100);
    precioDescuento = precio - descuentoDinero;
    iva = precioDescuento * 0.21;
    precioFinal = precioDescuento + iva;

    document.getElementById("elPrecioFinal").value = precioFinal;
    alert("El descuento es de $" + descuentoDinero + ". El precio con el descuento es de $" + precioDescuento + ". El IVA es de " + iva + ".");
}

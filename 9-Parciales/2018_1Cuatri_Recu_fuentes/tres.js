function mostrar()
{
    var precio;
    var descuento;
    var descuentoDinero;
    var precioDescuento;
    var iva;
    var precioFinal;

    precio = prompt("Precio:");
    precio = parseInt(precio);

    descuento = prompt("Descuento:");
    descuento = parseInt(descuento);

    descuentoDinero = precio * (descuento / 100);
    precioDescuento = precio - descuentoDinero;
    iva = precioDescuento * 0.21;
    precioFinal = precioDescuento + iva;

    alert("Descuento en dinero: " + descuentoDinero);
    alert("Precio con descuento: " + precioDescuento);
    alert("IVA: "+ iva);
    document.getElementById("elPrecioFinal").value = precioFinal;
}

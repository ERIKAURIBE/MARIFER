const carrito = [];

const precios = {
    "Camisa Casual": 299.99,
    "Vestido Elegante": 599.99,
    "Falda de Moda": 399.99
};

function agregarCarrito(producto) {
    carrito.push(producto);
    actualizarTabla();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarTabla();
}

function actualizarTabla() {
    const tabla = document.getElementById("tablaCarrito").getElementsByTagName('tbody')[0];
    const totalPrecioSpan = document.getElementById("totalPrecio");
    tabla.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {
        let fila = tabla.insertRow();

        let celdaProducto = fila.insertCell(0);
        celdaProducto.textContent = producto;

        let celdaPrecio = fila.insertCell(1);
        let precio = precios[producto] || 0; // Si no se encuentra el precio, usa 0
        celdaPrecio.textContent = `$${precio.toFixed(2)}`;

        total += precio;

        let celdaAccion = fila.insertCell(2);
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function() {
            eliminarProducto(index);
        };

        celdaAccion.appendChild(botonEliminar);
    });

    totalPrecioSpan.textContent = total.toFixed(2);
}

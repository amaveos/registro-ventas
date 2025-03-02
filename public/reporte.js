document.addEventListener('DOMContentLoaded', async () => {
    const tablaVentas = document.getElementById('tablaVentas');

    async function cargarInforme() {
        const res = await fetch('/api/ventas');
        const ventas = await res.json();       

        ventas.forEach(v => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${v.Producto.nombre}</td>
                <td>$${v.Producto.precio}</td>
                <td>${v.cantidad}</td>
                <td>$${v.subtotal}</td>
                <td>${new Date(v.Ventum.fecha).toLocaleDateString()}</td>
            `;
            tablaVentas.appendChild(row);
        });
    }

    await cargarInforme();
});
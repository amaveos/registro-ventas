document.addEventListener('DOMContentLoaded', async () => {
    const selectProducto = document.getElementById('producto');
    const tablaVentas = document.getElementById('tablaProductos');
    
    async function cargarProductos() {
        selectProducto.innerHTML = "";
        tablaVentas.innerHTML = "";

        const res = await fetch('/api/productos');
        const productos = await res.json();

        productos.forEach(p => {
            const option = document.createElement('option');
            option.value = p.id;
            option.textContent = `${p.nombre} - $${p.precio}`;
            selectProducto.appendChild(option);

            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${p.nombre}</td>
                <td>$${p.precio}</td>
                <td>${p.stock}</td>
            `;
            tablaVentas.appendChild(row);
        });
    }

    document.getElementById('ventaForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const producto_id = selectProducto.value;
        const cantidad = document.getElementById('cantidad').value;

        const res = await fetch('/api/ventas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ producto_id, cantidad })
        });

        if (res.ok) {
            alert('Venta registrada con éxito');
            document.getElementById('ventaForm').reset();
            await cargarProductos();
        } else {
            alert('Error al registrar la venta');
        }
    });

    await cargarProductos();
});
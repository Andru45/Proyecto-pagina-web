// Mock de productos (puedes reemplazar esto con un fetch a un archivo JSON o API)
const productos = [
    { id: 1, nombre: "Producto 1", precio: 19.99, img: "/img/productos/producto1.jpg" },
    { id: 2, nombre: "Producto 2", precio: 29.99, img: "/img/productos/producto2.jpg" },
    { id: 3, nombre: "Producto 3", precio: 39.99, img: "/img/productos/producto3.jpg" }
];

// Generar productos en el DOM
document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector(".product-list");
    productos.forEach(producto => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        productList.appendChild(productElement);
    });
});

// Carrito de compras
const carrito = [];

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    alert(`${producto.nombre} ha sido agregado al carrito.`);
}

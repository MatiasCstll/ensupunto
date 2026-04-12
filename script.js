function agregarProducto(nombre, elemento) {
  carrito.push(nombre);

  elemento.classList.toggle("seleccionado");
}
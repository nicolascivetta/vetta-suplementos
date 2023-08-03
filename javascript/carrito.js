let productosEnCarrito = []

if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}



function agregaAlCarrito (product){
    productosEnCarrito.push(product)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}


function cargarProductosCarrito (productoCarrito){
    modalBody.innerHTML=""

    array.forEach(productoCarrito => {
        modalBody.innerHTML += `<div class="card border-primary mb-3" id="productoCarrito${productoCarrito.id}" style="max-widht: 540px; ">
        <div class="card-body">
        <h4 class="card-title"> ${productoCarrito.id}</h4>

        <p class="card-text">$${productoCarrito.precio} </p>
        <button class="btn btn-danger" id="botonEliminar${productoCarrito.id}" <i class="fas fa-trash-alt"></i></button>
        </div>
        </div>
        `
    });

    array.forEach((productoCarrito , indice) => {
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click",() =>{
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            cardProducto.remove()
            productosEnCarrito.splice(indice,1)
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
        })
        
    });

}

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito)
}
)

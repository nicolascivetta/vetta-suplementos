function contadorsito() {
    let precioTotal = 0
    let totalPrecio = document.getElementById("totalPrecio")
    const carritoAux = JSON.parse(localStorage.getItem("compra")) || []
    if (carritoAux.length !== 0) {
        for (const numeritos of carritoAux) {
            precioTotal += numeritos.precio * numeritos.cantidad
        }
        totalPrecio.innerHTML =` Total: $${precioTotal}`
    } else {
        totalPrecio.innerHTML =`Total: $0`
    }
}



//verifico que el localstorage esta vacio
const verifico = JSON.parse(localStorage.getItem("compra"))
if (!verifico) {
    let contenedorVerificacion = document.getElementById("contenedorDeTodo")
    let remplazaHTML = document.createElement("div")
    remplazaHTML.innerHTML =  `<p id="vacio" class="estilo">No hay productos en su carrito por el momento</p>`
    contenedorVerificacion.appendChild(remplazaHTML)
} else {
    for (const muestro of verifico) {
        let contenedorVerificacionTrue = document.getElementById("contenedorDeTodo")
        let htmlRemplazo = document.createElement("div")
        htmlRemplazo.id = `${muestro.id}-div`
        htmlRemplazo.classList.add("contenedorProductosCarrito")
        htmlRemplazo.innerHTML = `<p class="estilo" id="cantidad-${muestro.id}">Producto: ${muestro.nombre} x${muestro.cantidad} <br> Precio x unidad: $${muestro.precio}</p>
        <button id="${muestro.id}" class="boton-elimino bg-dark fa-solid fa-x"></button>
        <div class="linea2"></div>`
        
        contenedorVerificacionTrue.appendChild(htmlRemplazo)
        eliminarElementos()
        contadorsito()
    }
}


//funcion para agregar productos al html
function agregarProducto() {
    fetch("main.json")
    .then((response) => response.json())
    .then(productoss => {
        let container = document.getElementById('productosindex')
        for (const product of productoss) {
            let card = document.createElement('div')
            card.innerHTML = `
                    <img src="images/${product.img}" alt="${product.nombre}">
                    <h3>${product.nombre}</h3>
                    <h4>$${product.precio}</h4>
                    <button id="${product.id}" class="boton botonCarrito">COMPRAR</button>
                    `
    
            container.appendChild(card)
        }

    })

}

agregarProducto()


let compruebo2 = []

function agregaCarrito() {
    fetch("main.json")
    .then((response) => response.json())
    .then(productoss =>{
        let carro = []
        let botones = document.getElementsByClassName('botonCarrito')
        for (const boton of botones) {
            boton.onclick = (e) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Producto agregado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
    
                let compraProductos = productoss.find((el) => el.id === parseInt(e.target.id))
                let compruebo = JSON.parse(localStorage.getItem("compra"))
                if (compruebo) {
                    const compruebo2 = JSON.parse(localStorage.getItem("compra"))
                    let indice = compruebo2.findIndex((el) => el.id === parseInt(e.target.id))
                    if (indice !== -1) {
                        compruebo2[indice].cantidad++
                        localStorage.setItem("compra", JSON.stringify(compruebo2))
                        let muestroCarrito =document.getElementById(`cantidad-${compruebo2[indice].id}`)
                        muestroCarrito.innerText = `Producto:${compruebo2[indice].nombre}x${compruebo2[indice].cantidad}\n Precio Por Unidad: $${ compruebo2[indice].precio} \n Precio Total: $${ compruebo2[indice].precio  * compruebo2[indice].cantidad} `
                        eliminarElementos()
                        contadorsito() 
                    } else {
                        compruebo2.push(compraProductos)
                        localStorage.setItem("compra", JSON.stringify(compruebo2))
                        let indice2 = compruebo2.findIndex((el) => el.id === parseInt(e.target.id))
                        let muestroCarrito = document.getElementById("contenedorDeTodo")
                        let carritoMostrado = document.createElement("div")
                        carritoMostrado.id =`${compruebo2[indice2].id}-div`
                        carritoMostrado.innerHTML =`<p class="estilo" id="cantidad-${compruebo2[indice2].id}">Producto: ${compruebo2[indice2].nombre} x${compruebo2[indice2].cantidad} <br> Precio Por Unidad: $${ compruebo2[indice2].precio}  <br> Precio Total: $${compruebo2[indice2].precio * compruebo2[indice2].cantidad}</p>
                        <button id="${compruebo2[indice2].id}" class="boton-elimino bg-danger fa-solid fa-x"></button>
                        <br>
                        <div class="linea2"></div>`
                        muestroCarrito.appendChild(carritoMostrado)
                        eliminarElementos()
                        contadorsito() 
                    }
                } else {
                    carro.push(compraProductos)
                    localStorage.setItem("compra", JSON.stringify(carro))
                    let muestroCarrito = document.getElementById("contenedorDeTodo")
                    let carritoMostrado = document.createElement("div")
                    carritoMostrado.id = `${carro[0].id}-div` 
                    muestroCarrito.innerHTML = ``
                    carritoMostrado.innerHTML = ` <p class="estilo" id="cantidad-${carro[0].id}">Producto: ${carro[0].nombre} x${carro[0].cantidad} <br> Precio Por Unidad: $${ carro[0].precio}  <br> Precio total: $${carro[0].precio * carro[0].cantidad}</p>
                    <button id="${carro[0].id}" class="boton-elimino bg-danger fa-solid fa-x"></button>
                    <br>
                    <div class="linea2"></div>
                    `
                    muestroCarrito.appendChild(carritoMostrado)
                    carro = []
                    eliminarElementos()
                    contadorsito()
                }
                const carritoGuardado = JSON.parse(localStorage.getItem("compra")) || []
                if (carritoGuardado.length > 0) {
                    let vacio = document.getElementById("vacio")
                    let vacioS = document.getElementById("contenedorDeTodo")
                    if (vacio) {
                        vacioS.removeChild(vacio)
                    }
                } 
            }
        }

    })

}
//funcion para limpiar el carrito y el local storage
let botonLimpiarCarrito = document.getElementById('finalCompra')
botonLimpiarCarrito.onclick = () => {
    const carritoCompruebo = JSON.parse(localStorage.getItem("compra"))
    if (carritoCompruebo) {
        localStorage.clear()    
        let vaciar = document.getElementById("contenedorDeTodo")
        vaciar.innerHTML =` 
            <p class="estilo" id="vacio">No hay productos en su carrito por el momento</p>`
    } else {
        alert("No hay productos para comprar")
    }
}

//funcion de boton para eliminar elementos del carrito
function eliminarElementos() {
    let botoncito = document.getElementsByClassName("boton-elimino")
    for (const boton of botoncito) {
        boton.onclick = (e) => {
            let carritoEliminar = JSON.parse(localStorage.getItem("compra"))
            let index = carritoEliminar.findIndex((el) => el.id === parseInt(e.target.id))
            let cantidadElimino = carritoEliminar[index].cantidad
            if (carritoEliminar.length === 1 && cantidadElimino === 1) {
                localStorage.clear()
                carritoEliminar = []
                let vaciar = document.getElementById("contenedorDeTodo")
                vaciar.classList.add('removing'); 
                vaciar.innerHTML =` 
                <p class="estilo" id="vacio">No hay productos en su carrito por el momento</p>`
                vaciar.classList.remove('removing')
                contadorsito()
            } else if (cantidadElimino > 1) {
                let animacionDescontar = document.getElementById(`${e.target.id}-div`)
                animacionDescontar.classList.add('descontar');
                carritoEliminar[index].cantidad--
                localStorage.setItem("compra", JSON.stringify(carritoEliminar))
                contadorsito()
                let modificarCantidad = document.getElementById(`cantidad-${carritoEliminar[index].id}`)
                modificarCantidad.innerText = `Producto: ${carritoEliminar[index].nombre} x${carritoEliminar[index].cantidad}\n  Precio Por unidad: $${carritoEliminar[index].precio}\n Precio Total: $${carritoEliminar[index].precio * carritoEliminar[index].cantidad} `
                animacionDescontar.classList.remove('descontar');
            } else {
                carritoEliminar.splice(index, 1)
                localStorage.setItem("compra", JSON.stringify(carritoEliminar))
                let divProducto = document.getElementById(`${e.target.id}-div`)
                divProducto.classList.add('removing');
                if (divProducto) {
                        divProducto.remove();
                        contadorsito() 
                    }
                }
            }
        }
    }



agregaCarrito()


/* Swal. fire({
    title: 'Está seguro de eliminar el producto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, seguro',
    cancelButtonText: 'No, no quiero'
}).then((result) => {

    if (result. isConfirmed) {
        Swal.fire({
        title: 'Borrado!',
        icon: 'success',
        text: 'El archivo ha sido borrado'
        })
    }
}) */
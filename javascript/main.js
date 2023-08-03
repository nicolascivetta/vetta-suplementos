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

//creo la funcion y el array para cargar los productos en el html
function cargarProductosIndex() {
    const productos = [];
    class productoinicio {
        constructor(nombre, precio, stock, id, marca, img, cantidad) {
            this.nombre = nombre;
            this.precio = precio;
            this.stock = stock;
            this.id = id;
            this.marca = marca;
            this.img = img;
            this.cantidad = cantidad;
        }
    }

    let whey3kg = new productoinicio("WHEY 3KG", 20000, 20, 1, "STAR", "whey-3gk.png", 1)
    let creatine = new productoinicio("CREATINE", 8000, 15, 2, "XTRENGHT", "Creatine-250-500.png", 1)
    let bestwhey = new productoinicio("BEST WHEY", 7000, 15, 3, "XTRENGHT", "best-whey.png", 1)
    let snacks = new productoinicio("SNACKS", 1000, 50, 4, "STAR", "protein_snack.png", 1)
    let glutamina = new productoinicio("GLUTAMINA", 6000, 20, 5, "XTRENGHT", "Glutamine.500.png", 1)
    let bcaa = new productoinicio("BCAA", 4500, 20, 6, "XTRENGHT", "Pro-bcaa.500.png", 1)
    let cutter = new productoinicio("CUTTER", 2000, 10, 7, "XTRENGHT", "Cutter.500.png", 1)
    let beta = new productoinicio("BETA", 4000, 10, 8, "XTRENGT", "Beta-alanine500.png", 1)
    let creatinastar = new productoinicio("CREATINE", 8500, 20, 9, "STAR", "creatine_monohydrate_300.png", 1)
    let shakerx = new productoinicio("SHAKER", 3000, 20, 10, "XTRENGHT", "shaker-NEGRO-500.png", 1)
    let advanced = new productoinicio("ADVANCED", 8000, 20, 11, "XTRENGHT", "Advanced-Banana.png", 1)
    let tnt = new productoinicio("TNT", 6000, 8, 12, "STAR", "tnt.png", 1)

    productos.push(whey3kg, creatine, bestwhey, snacks, glutamina, bcaa, cutter, beta, creatinastar, shakerx, advanced, tnt)
    return productos
}


//funcion para agregar productos al html
function agregarProducto() {
    let productoss = cargarProductosIndex()
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
}

//funcion agregar productos al carro
function agregar(){
    let elementos = cargarProductosIndex()
    let carro = []
    console.log(elementos)
    let botones = document.getElementsByClassName('botonCarrito')
    for (const boton of botones) 
        boton.onclick = (e) => { 
            let holaProductos = elementos.find((el) => el.id === parseInt(e.target.id))
            carro.push(holaProductos)
            localStorage.setItem("compra", JSON.stringify(carro))
        }}
        



cargarProductosIndex()
agregarProducto()
agregar()

//
let compruebo2 = []

function agregaCarrito() {
    let elementos = cargarProductosIndex()
    let carro = []
    let botones = document.getElementsByClassName('botonCarrito')
    for (const boton of botones) {
        boton.onclick = (e) => {

            let compraProductos = elementos.find((el) => el.id === parseInt(e.target.id))
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
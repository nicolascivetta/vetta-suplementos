/*---------------------------------------------------- STAR ----------------------------------------------------*/
function cargarProductosStar() {
    const productos = [];
    class productostar {
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

    let whey3kgstar = new productostar("WHEY 3KG", 20000, 20, 1, "STAR", "whey-3gk.png", 1)
    let creatinastar = new productostar("CREATINE", 8500, 20, 9, "STAR", "creatine_monohydrate_300.png", 1)
    let bestwheystar = new productostar("BEST WHEY", 7000, 15, 13, "STAR", "whey-star.png", 1)
    let snacks = new productostar("SNACKS", 1000, 50, 14, "STAR", "protein_snack.png", 1)
    let glutaminastar = new productostar("GLUTAMINA", 6000, 20, 15, "STAR", "l_glutamine.png", 1)
    let bcaastar = new productostar("BCAA", 4500, 20, 16, "STAR", "bcaa-star.png", 1)
    let dinamitestar = new productostar("DYNAMITE", 2000, 10, 17, "STAR", "tnt.png", 1)
    let pumpstar = new productostar("PUMP 3D", 4000, 10, 18,"STAR", "pump_3d_ripped.png", 1)
    let wheyisolatestar = new productostar("ISO WHEY", 8500, 20, 19, "STAR", "p_whey_isolate.png", 1)
    let shakerstar = new productostar("SHAKER", 3000, 20, 20, "STAR", "shaker-star.png", 1)
    let thermofuelstar = new productostar("THERMO FUEL", 8000, 20, 21, "STAR", "thermo_fuel_max.png", 1)
    let isowheystar = new productostar("ISO WHEY", 6000, 8, 22, "STAR", "iso-whey.png", 1)

    productos.push(whey3kgstar, creatinastar, bestwheystar, snacks, glutaminastar, bcaastar, dinamitestar, pumpstar, wheyisolatestar, shakerstar, thermofuelstar, isowheystar)
    return productos
}

function agregarProductoStar() {
    let productoss = cargarProductosStar()
    let container = document.getElementById('productosstar')
    for (const product of productoss) {
        let card = document.createElement('div')
        card.innerHTML =`
                <img src="../images/${product.img}" alt="${product.nombre}">
                <h3>${product.nombre}</h3>
                <h4>$${product.precio}</h4>
                <a href="" class="boton">COMPRAR</a>
                `

        container.appendChild(card)
    }
}


cargarProductosStar()
agregarProductoStar()

/*---------------------------------------------------- ENA ----------------------------------------------------*/

function cargarProductosEna() {
    const productos = [];
    class productoena {
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

    let whey3kgena = new productoena("WHEY 3KG", 20000, 20, 23, "Ena", "ena-whey3kg.png", 1)
    let creatinaena = new productoena("CREATINE", 8500, 20, 24, "Ena", "ena-creatina.png", 1)
    let wheyena = new productoena("WHEY", 7000, 15, 25, "Ena", "ena-whey.png", 1)
    let aminoena = new productoena("SNACKS", 1000, 50, 26, "Ena", "amino.png", 1)
    let glutaminaena = new productoena("GLUTAMINA", 6000, 20, 27, "Ena", "ena-glutamina.png", 1)
    let bcaaena = new productoena("BCAA", 4500, 20, 28, "Ena", "ena-bcaa.png", 1)
    let shakerena = new productoena("SHAKER", 2000, 10, 29, "Ena", "shaker-ena.png", 1)
    let energyena = new productoena("ENERGY", 4000, 10, 30,"Ena", "ena-energy.png", 1)
    let wheyxena = new productoena("WHEY X", 8500, 20, 31, "Ena", "ena-wheyx.png", 1)
    let betaena = new productoena("BETA", 3000, 20, 32, "Ena", "ena-beta.png", 1)
    let preena = new productoena("PRE WAR", 8000, 20, 33, "Ena", "ena-pre.png", 1)
    let ultraena = new productoena("ULTRA MASS", 6000, 8, 34, "Ena", "ena-ultra.png", 1)

    productos.push(whey3kgena, creatinaena, wheyena, aminoena, glutaminaena, bcaaena, shakerena, energyena, wheyxena, betaena, preena, ultraena)
    return productos
}

function agregarProductoEna() {
    let productoss = cargarProductosEna()
    let container = document.getElementById('productosena')
    for (const product of productoss) {
        let card = document.createElement('div')
        card.innerHTML =`
                <img src="../images/${product.img}" alt="${product.nombre}">
                <h3>${product.nombre}</h3>
                <h4>$${product.precio}</h4>
                <a href="" class="boton">COMPRAR</a>
                `

        container.appendChild(card)
    }
}


cargarProductosEna()
agregarProductoEna()

/*---------------------------------------------------- XTRENGHT ----------------------------------------------------*/

function cargarProductosXtrenght() {
    const productos = [];
    class productoxtrenght {
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

    let whey3kgxtrenght = new productoxtrenght("WHEY 3KG", 20000, 20, 35, "xtrenght", "whey-3kg.png", 1)
    let creatinaxtrenght = new productoxtrenght("CREATINE", 8500, 20, 2, "xtrenght", "Creatine-250-500.png", 1)
    let bestwheyxtrenght = new productoxtrenght("BEST WHEY", 7000, 15, 3, "xtrenght", "best-whey.png", 1)
    let nitro3kgxtrenght = new productoxtrenght("NITRO 3KG", 1000, 50, 36, "xtrenght", "nitrogain-3kg.png", 1)
    let glutaminaxtrnght = new productoxtrenght("GLUTAMINA", 6000, 20, 5, "Ena", "Glutamine.500.png", 1)
    let bcaaxtrenght = new productoxtrenght("BCAA", 4500, 20, 6, "xtrenght", "Pro-bcaa.500.png", 1)
    let cutterxtrenght = new productoxtrenght("CUTTER", 2000, 10, 7, "xtrenght", "Cutter.500.png", 1)
    let betaxtrenght = new productoxtrenght("BETA", 4000, 10, 8,"xtrenght", "Beta-alanine500.png", 1)
    let nitrogainxtrenght = new productoxtrenght("NITROGAIN", 8500, 20, 37, "xtrenght", "xtrenght-nitrogain2.png", 1)
    let shakerxtrenght = new productoxtrenght("SHAKER", 3000, 20,10, "xtrenght", "shaker-NEGRO-500.png", 1)
    let advancedxtrenght = new productoxtrenght("ADVANCED", 8000, 20, 11, "Ena", "Advanced-Banana.png", 1)
    let nitroxxtrenght = new productoxtrenght("NITRO X", 6000, 8, 38, "xtrenght", "Nitrox.500.png", 1)

    productos.push(whey3kgxtrenght, creatinaxtrenght, bestwheyxtrenght, nitro3kgxtrenght, glutaminaxtrnght, bcaaxtrenght, cutterxtrenght, betaxtrenght, nitrogainxtrenght, shakerxtrenght, advancedxtrenght, nitroxxtrenght)
    return productos
}

function agregarProductoXtrenght() {
    let productoss = cargarProductosXtrenght()
    let container = document.getElementById('productosxtrenght')
    for (const product of productoss) {
        let card = document.createElement('div')
        card.innerHTML =`
                <img src="../images/${product.img}" alt="${product.nombre}">
                <h3>${product.nombre}</h3>
                <h4>$${product.precio}</h4>
                <a href="" class="boton">COMPRAR</a>
                `

        container.appendChild(card)
    }
}


cargarProductosXtrenght()
agregarProductoXtrenght()
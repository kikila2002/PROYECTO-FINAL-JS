let carrito = []


const divProductos = document.getElementById("divProductos")
fetch(`./json/productos.json`)
.then( response => response.json())
.then(productos => {
    productos.forEach((producto) => {
        divProductos.innerHTML += `
            <div class="carta col-12 card col-md-6 m-2 text-center">
                <h3 class="card-header">${producto.nombre}</h3>
                <div class="card-body">
                    <h5 class="card-title">Modelo: ${producto.modelo}</h5>
                </div>
                <img src="./img/${producto.img}" class="mx-auto d-block ">
                </img>
                <div class="card-body">
                    <h6 class="card-text">Precio: ${producto.precio}</h6>
                    <p class="card-text">stock: ${producto.stock}</p>
                   
                <div class="card-footer ">
                    <button class = "text-center btn btn-dark" id = "agregar${producto.id}" >Agregar al Carrito</button>
                </div>
            </div>
        
        `
        

       
    })
})

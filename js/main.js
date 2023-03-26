class Servicio {
    constructor (id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const workshop = new Servicio [1, "Talleres", 20, "./img/workshops.jpg"];
const kids = new Servicio [2, "Kids", 30, "./img/paraweb_kids.jpg"];
const team = new Servicio [3, "Team Building", 15, "./img/team_b.jpg"];
const otros =new Servicio [4, "Otros", 25, "./img/paraweb_recreo_00.jpg"];

const servicios = [workshop, kids, team, otros];

console.log(servicios);

let carrito = [];

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
    
}

const contenedorServicios = document.getElementById("contenedorServicios");

const mostrarServicios = () => {
    servicios.forEach(servicio => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-ad-6", "col-sm-12");
        card.innerHTML = `
            <div class="card">
                <img src = "${servicio.img}" class = "card-img-top imgServicios" alt = "${servicio.nombre}"></img>
                <div>
                    <h5> ${servicio.nombre} </h5>
                    <p> ${servicio.precio} </p>
                    <button class= "boton_reserva"> Agregar al Carrito </button>
                </div>
            </div>
        `;
        contenedorServicios.appendChild(card);

        const boton = document.getElementById(`boton${servicio.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
        
    })
}

mostrarServicios();

const agregarAlCarrito = (id) => {
    const servicioEnCarrito = servicio.find(servicio => servicio.id === id);
    if(servicioenCarrito){
        servicioEnCarrito.cantidad++;
    } else {
        const servicio = servicio.find(servicio => servicio.id === id);
        carrito.push(servicio);
    }
    calcularTotal ();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = docuemnt.getElementById ("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(servicio => {
        const card = document.createElement ("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
        <div class ="card">
            <img src = "${servicio.img}" class = "card-img-top imgServicios" alt = "${servicio.nombre}">
            <div>
                <h5> ${servicio.nombre} </h5>
                <p> ${servicio.precio} </p>
                <p> ${servicio.cantidad} </p>
                <button class = "btn colorBoton" id="eliminar${servicio.id}" > Eliminar </button>
            </div>
        </div>
        `
        contenedorCarrito.appendChild(card);

        const boton = document.getElementById(`eliminar${servicio.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(servicio.id);
        })
    })
    calcularTotal();
}


const eliminarDelCarrito = (id) => {
const servicio = carrito.find(servicio => servicio.id === id);
const indice = carrito.indexOf(servicio);
carrito.splice(indice, 1);
mostrarCarrito();

localStorage.setItem("carrito", JSON.stringify(carrito));
}

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0; 
    carrito.forEach(servicio => {
        totalCompra += servicio.precio * servicio.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = []; 
    mostrarCarrito();

    localStorage.clear();
}

/*
function menu() {}   
//plasmar esto en css, un evento que interprete el click y el alert en el texto
    alert("Sobre que evento querés recibir información?");
    let opcion = parseInt(prompt("Sobre que evento querés recibir información? Ingrese una opción: \n 1) Workshops \n 2) Kids \n 3) Team Building \n 4) Otros"));
    return opcion;
}

let opcion = menu(); 

switch(opcion) {
    case talleres: 
        workshops();
        break;
    case 2: 
        kids();
        break;
    case 3: 
        teamBuilding();
        break;
    case 4:
        otros();
        break;
    default: 
        alert("Por favor ingresa un número del 1 al 4")
        break;
}

function workshops() {
    nombre = prompt("Ingresa tu nombre y apellido");
    correo = prompt ("Ingresa tu correo elctrónico");
    cantidadPiezas = prompt ("Ingresa la cantidad de piezas que desea reservar")
    usuario = new Usuario(nombre, correo, cantidadPiezas, 1);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
    }


//function kids () {
    nombre = prompt("Ingresa tu nombre y apellido");
    correo = prompt ("Ingresa tu correo elctrónico");
    cantidadPiezas = prompt ("Ingresa la cantidad de piezas que desea reservar")
    usuario = new Usuario(nombre, correo, cantidadPiezas, 2);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
    while (cantidadPiezas > 0 )
    {
        if (cantidadPiezas <= 5)
        {
            alert ("El precio final de su compra es de " + (cantidadPiezas*180));
        }
        else {
            alert ("El precio final de su compra es de " + (cantidadPiezas*160));
        }
        break;
    };
}


function teamBuilding () {
    nombre = prompt("Ingresa tu nombre y apellido");
    correo = prompt ("Ingresa tu correo elctrónico");
    cantidadPiezas = prompt ("Ingresa la cantidad de piezas que desea reservar")
    usuario = new Usuario(nombre, correo, cantidadPiezas, 3);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
    while (cantidadPiezas > 0 )
    {
        if (cantidadPiezas <= 5)
        {
            alert ("El precio final de su compra es de " + (cantidadPiezas*180));
        }
        else {
            alert ("El precio final de su compra es de " + (cantidadPiezas*160));
        }
        break;
    };
}


//function otros () {
    nombre = prompt("Ingresa tu nombre y apellido");
    correo = prompt ("Ingresa tu correo elctrónico");
    cantidadPiezas = prompt ("Ingresa la cantidad de piezas que desea reservar")
    usuario = new Usuario(nombre, correo, cantidadPiezas, 4);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
    while (cantidadPiezas > 0 )
    {
        if (cantidadPiezas <= 5)
        {
            alert ("El precio final de su compra es de " + (cantidadPiezas*180));
        }
        else {
            alert ("El precio final de su compra es de " + (cantidadPiezas*160));
        }
        break;
    };
}

function hacerCuenta(){
while (cantidadPiezas > 0 )
    {
        if (cantidadPiezas <= 5)
        {
            alert ("El precio final de su compra es de " + (cantidadPiezas*180));
        }
        else {
            alert ("El precio final de su compra es de " + (cantidadPiezas*160));
        }
        break;
    };
}

//el resultado tiene que almacenarse en una variable para poder manipular ese dato. sumarlo al resto de la compra 


console.log (cantidadPiezas)

class Pieza {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre; 
        this.precio = precio;
        this.img = img; 
        this.cantidad = 1;
    }
}*/
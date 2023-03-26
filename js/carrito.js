const contenedorReserva = document.getElementById("contenedorReserva");

const recuperarReservas = localStorage.getItem("reservas");


let reservarTalleres = [];

recuperarReservas ? reservarTalleres = JSON.parse(recuperarReservas) : reservarTalleres = [];

const sectionReservas = document.getElementById("sectionReservas");
sectionReservas.className = "sectionReservas";
sectionReservas.innerHTML = `
                            <h1 class= "flex__titulo">Carrito de compras</h1>
                            <div class="divContReservas" id="divContReservas"> </div>
`;
contenedorReserva.appendChild(sectionReservas);

const divContReservas = document.getElementById("divContReservas");


const finalizar = () => {
    const finalizar = document.createElement("div");
    finalizar.className = "finalizar";
    finalizar.innerHTML = `
                        <div>
                            <p id="total">El total a abonar es € </p>
                            <div class="botonesFinalizar">
                            <button id="vaciarCarrito">Vaciar carrito</button>
                            <button id="finalizar">Finalizar reserva</button>
                            </div>
                        </div>
    `;

    divContReservas.appendChild(finalizar);
    totalFinal();

    const vaciarCarrito = document.getElementById("vaciarCarrito");
    vaciarCarrito.onclick = () => {
        eliminarTodo()
    };

    const botonfinalizar = document.getElementById("finalizar");
    botonfinalizar.onclick = () => {
        finReserva()
    };
};

const eliminarTodo = () =>{
                localStorage.clear("reservas");
                divContReservas.innerHTML = "";
            };

const finReserva = ()=>{
    
            window.open("https://wa.me/34631773772", "_blank")
            localStorage.clear("reservas");
            divContReservas.innerHTML = "";
        };

const totalFinal = () => {
    let totalAPagar = 0;
    reservarTalleres.forEach(reserva => {
        totalAPagar += reserva.precio * reserva.cantidad;
    });

    const pFinal = document.getElementById('total');
    pFinal.innerHTML = `El total de tu compra es de €${totalAPagar}`;
};


const botones = (reserva) => {

    const botonEliminar = document.getElementById(`botonEliminar${reserva.id}`);
    botonEliminar.onclick = () => {
        eliminarLaReserva(reserva.id);
    }

    const botonRestar = document.getElementById(`botonRestar${reserva.id}`);
    botonRestar.onclick = () => {
        restarDeReserva(reserva.id);
    }

    const botonSumar = document.getElementById(`botonSumar${reserva.id}`);
    botonSumar.onclick = () => {
        sumarAReserva(reserva.id);
    }
};


const eliminarLaReserva = (id) => {
    const servicio = reservarTalleres.find(reserva => reserva.id === id);
    const indice = reservarTalleres.indexOf(servicio);


    if (indice !== -1) {
        reservarTalleres.splice(indice, 1);
        divContReservas.innerHTML = "";

        localStorage.setItem("reservas", JSON.stringify(reservarTalleres));
        mostrarReservas();
    }
};


const restarDeReserva = (id) => {
    const reserva = reservarTalleres.find(reserva => reserva.id === id);

    reserva.cantidad > 1 ? reserva.cantidad-- : eliminarLaReserva(reserva.id);

    divContReservas.innerHTML = "";
    mostrarReservas();
};


const sumarAReserva = (id) => {
    const reserva = reservarTalleres.find(reserva => reserva.id === id);
    reserva.cantidad++;
    divContReservas.innerHTML = ""
    mostrarReservas();
};

const mostrarReservas = () => {
    reservarTalleres.forEach(reserva => {
        const divReservas = document.createElement("div");
        divReservas.className = "divReservas";
        divReservas.innerHTML = `
                                <img class="imagen" src=" ${reserva.url}" alt="${reserva.nombre}">
                                        <p>Servicio <br> ${reserva.nombre} </p>
                                        <p class="precio"> Precio <br>$${reserva.precio}</p>
                                        <p>Cantidad <br>${reserva.cantidad} </p>
                                    <div class="botones">
                                        <button id="botonEliminar${reserva.id}">
                                            eliminar
                                        </button>
                                        <button id="botonRestar${reserva.id}">
                                            -
                                        </button>
                                        <button id="botonSumar${reserva.id}">
                                            +
                                        </button>
                                        </div>
                                </div>
                                `;
        divContReservas.appendChild(divReservas);
        botones(reserva);

    })

    //---------
    if (reservarTalleres.length > 0) {
        finalizar();
    }
} ;
mostrarReservas();



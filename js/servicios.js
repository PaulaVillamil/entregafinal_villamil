const servicio = [
    {
        url: "./img/workshops_b.jpg",
        nombre: "Workshops",
        descripcion: "Talleres individuales y grupales",
        precio: 20,
        id: 1,
        cantidad:1
    },

    {
        url: "./img/paraweb_kids_b.jpg",
        nombre: "Kids",
        descripcion: "Para los más chicos!",
        precio: 30,
        id: 2,
        cantidad:1
    },

    {
        url: "./img/team_b_b.jpg",
        nombre: "Team Building",
        descripcion: "A motivar las buenas relaciones entre tus empleados!",
        precio: 20,
        id:3,
        cantidad:1
    },

    {
        url: "./img/paraweb_recreo_00_b.jpg",
        nombre: "Otros",
        descripcion: "Pensamos un taller a tu medida!",
        precio: 40,
        id:4,
        cantidad:1
    },
];


const mainServicios = document.getElementById("mainServicios");
const sectionServicios = document.createElement("section");
sectionServicios.className = "sectionServicios";
/*divContenedor es la class a la que hay que aplicarle ccs (flex o grid del contenedor) elimine <div class=" p-2">*/
sectionServicios.innerHTML = `
                            <div class="divContenedor" id="divContenedor"></div> 
                            
                            `
mainServicios.appendChild(sectionServicios);


const divContenedor = document.getElementById("divContenedor");

const mostrarServicios = () =>{

    servicio.forEach(servicio => {

        const divServicios = document.createElement("div");
        divServicios.className = "divServicios";
        divServicios.innerHTML = `
                                <img class="imagen" src=" ${servicio.url}" alt="${servicio.nombre}"> 
                                <div class= "detalles">
                                <p>${servicio.nombre}</p>
                                <p>${servicio.descripcion}</p>
                                <p> € ${servicio.precio}</p>                                
                                <button class="boton_reserva" id="boton${servicio.id}"> Reservar </button>
                                </div>
        `;
        divContenedor.appendChild(divServicios);
    
        const botonReserva = document.getElementById (`boton${servicio.id}`);
        botonReserva.onclick = ()=> {
            reservarTaller(servicio.id);
        }

    })

};

mostrarServicios();


const reservarTaller = (id) => {
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    const reservaSolicitada = reservas.find(servicio => servicio.id === id);


    if(reservaSolicitada){
        reservaSolicitada.cantidad++;
    } else {
        const solicitarReserva = servicio.find(servicio => servicio.id === id);
        reservas.push(solicitarReserva);
    };

    Toastify({
        text: "Ver carrito",
        duration: 7000,
        gravity:"top",
        position: "right",
        destination: "./pages/reservas.html",
        style :{
            background: "rgb(31, 64, 51)" ,
            color : "white"
        }
        }).showToast();

    const reservasJson = JSON.stringify(reservas);
    localStorage.setItem("reservas", reservasJson);
};



/* --- CONFIGURACIÓN DE INFORMACIÓN PARA MODALES --- */
const modalesInfo = {
    wifi: `<div class="modal-text-only"><h3>WiFi de Alta Velocidad</h3><p>Conexión estable por transmisión inalámbrica, ideal para streaming y teletrabajo con la mejor vista.</p></div>`,
    seguridad: `<div class="modal-text-only"><h3>Seguridad 24hs</h3><p>Predio totalmente cerrado con alambrado, monitoreado para su absoluta tranquilidad.</p></div>`,
    cochera: `<div class="modal-text-only"><h3>Cochera Cubierta</h3><p>Espacio techado privado dentro del predio para proteger su vehículo del clima y/o granizo.</p></div>`,
    tv: `<div class="modal-text-only"><h3>Directv Full</h3><p>Televisión satelital con amplia variedad de canales para el entretenimiento de toda la familia.</p></div>`,
    mascotas: `<div class="modal-text-only"><h3>Pet Friendly</h3><p>Aceptamos mascotas pequeñas con previo aviso para que viajen con toda la familia.</p></div>`,
    calefaccion: `<div class="modal-text-only"><h3>Calefacción Eficiente</h3><p>Equipada para brindar un ambiente cálido y acogedor durante las noches de invierno.</p></div>`
};

const faqInfo = {
    horarios: `<div class="modal-text-only"><h3>Horarios de Ingreso y Egreso</h3><p><strong>Check-in:</strong> a partir de las 12:00 hs.<br><strong>Check-out:</strong> hasta las 10:00 hs.</p></div>`,
    reserva: `<div class="modal-text-only"><h3>Proceso de Reserva</h3><p>Se solicita una seña vía transferencia bancaria para congelar la fecha de ingreso. El resto se abona al ingresar a Casa Villa Zorzal.</p></div>`,
    capacidad: `<div class="modal-text-only"><h3>Capacidad de la Casa</h3><p>Contamos con comodidades para alojar hasta 6 personas como máximo.</p></div>`,
    ubicacion: `<div class="modal-text-only"><h3>Cómo llegar</h3><p>Estamos ubicados sobre calle Sobremonte S/N a tres (3) cuadras de la Ruta Provincial 1, con buen acceso y señalizadas las calles del eje urbano.</p></div>`,
    pagos: `<div class="modal-text-only"><h3>Medios de Pago</h3><p>Aceptamos transferencias bancarias, efectivo y Mercado Pago.</p></div>`
};

const turismoInfo = {
    chorro: { titulo: "Chorro San Ignacio", res: "Cascada natural que nace de las Sierras de Comechingones, ubicada a 2 km hacia las sierras desde la RP1.", dist: "2 km", img: "/trio.jpeg" },
    piscu: { titulo: "Dique Piscu Yaco", res: "Espejo de agua con playas de arena, ideal para actividades náuticas sin motor.", dist: "15 km", img: "/trio.jpeg" },
    papagayos: { titulo: "Ollas de Papagayos", res: "Pozones naturales de agua cristalina rodeados de flora autóctona y palmeras caranday.", dist: "12 km", img: "/trio.jpeg" },
    elena: { titulo: "Cascada Villa Elena", res: "Salto de agua de 9 metros en la Reserva Natural Quebrada de Villa Elena.", dist: "18 km", img: "/trio.jpeg" },
    talar: { titulo: "Balneario El Talar", res: "Oasis de aguas cristalinas ubicado en Los Molles, bajo frondosa arboleda de talas.", dist: "22 km", img: "/trio.jpeg" },
    pasos: { titulo: "Pasos Malos", res: "Circuito gastronómico y natural emblemático de la Villa de Merlo.", dist: "38 km", img: "/trio.jpeg" }
};

/* --- FUNCIONES DE NAVEGACIÓN (MENÚ HAMBURGUESA) --- */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

/* --- FUNCIONES DE MODALES GENERALES --- */
function openModal(service) {
    document.getElementById('modalBody').innerHTML = modalesInfo[service];
    document.getElementById('generalModal').style.display = "block";
    document.body.style.overflow = "hidden";
}

function openFAQ(id) {
    document.getElementById('modalBody').innerHTML = faqInfo[id];
    document.getElementById('generalModal').style.display = "block";
    document.body.style.overflow = "hidden";
}

function openTurismo(place) {
    const data = turismoInfo[place];
    document.getElementById('modalBody').innerHTML = `
        <div class="modal-text-only">
            <h3>${data.titulo}</h3>
            <p>${data.res}</p>
            <p><strong>Distancia:</strong> ${data.dist} desde Villa Larca</p>
        </div>`;
    document.getElementById('generalModal').style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById('generalModal').style.display = "none";
    document.body.style.overflow = "auto";
}

/* --- FUNCIONES DE WHATSAPP --- */
function openWhatsAppModal() {
    document.getElementById('whatsappModal').style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeWhatsAppModal() {
    document.getElementById('whatsappModal').style.display = "none";
    document.body.style.overflow = "auto";
}

/* --- LÓGICA DE RESERVA Y ESTADÍA --- */

// Calcula las noches entre entrada y salida
function calcularNoches() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const nochesInput = document.getElementById('cantNoches');

    if (checkin && checkout) {
        const fechaEntrada = new Date(checkin);
        const fechaSalida = new Date(checkout);
        const diferenciaMilisegundos = fechaSalida - fechaEntrada;
        const noches = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

        if (noches > 0) {
            nochesInput.value = noches;
        } else {
            alert("La fecha de salida debe ser posterior a la de entrada.");
            document.getElementById('checkout').value = "";
            nochesInput.value = "0";
        }
    }
}

// Controla los contadores (+/-) y la capacidad máxima de 6 personas
function cambiarCantidad(id, valor) {
    const input = document.getElementById(id);
    let cantidadActual = parseInt(input.value);
    
    if (cantidadActual + valor >= 0) {
        if (id === 'adultos' || id === 'niños') {
            const adultos = parseInt(document.getElementById('adultos').value);
            const niños = parseInt(document.getElementById('niños').value);
            const totalHuespedes = (id === 'adultos' ? adultos + valor : adultos) + (id === 'niños' ? niños + valor : niños);
            
            if (valor > 0 && totalHuespedes > 6) {
                alert("La capacidad máxima permitida es de 6 personas.");
                return;
            }
        }
        input.value = cantidadActual + valor;
    }
}

// Valida datos y redirige a Mercado Pago
function validarYEnviarReserva() {
    const nombre = document.getElementById('nombreReserva').value;
    const email = document.getElementById('emailReserva').value;
    const tel = document.getElementById('telReserva').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const noches = document.getElementById('cantNoches').value;

    if (!nombre || !email || !tel || !checkin || !checkout || noches <= 0) {
        alert("Por favor, completa todos los campos obligatorios (*) y selecciona fechas válidas.");
        return;
    }

    // Reemplazar por tu Link de Pago real generado en Mercado Pago
    const linkPago = "https://mpago.la/2CuV2Rz";
    window.location.href = linkPago;
}

/* --- CIERRE DE MODALES AL HACER CLIC FUERA --- */
window.onclick = function(event) {
    const modal = document.getElementById('whatsappModal');
    const generalModal = document.getElementById('generalModal');
    if (event.target == modal) closeWhatsAppModal();
    if (event.target == generalModal) closeModal();
}


/* --- FUNCIÓN DE MODAL DE TURISMO ACTUALIZADA --- */
function openTurismo(place) {
    const data = turismoInfo[place];
    document.getElementById('modalBody').innerHTML = `
        <div class="modal-text-only">
            <img src="${data.img}" class="modal-img-turismo" alt="${data.titulo}">
            <h3>${data.titulo}</h3>
            <p>${data.res}</p>
            <p><strong>Distancia:</strong> ${data.dist} desde Villa Larca</p>
        </div>`;
    document.getElementById('generalModal').style.display = "block";
    document.body.style.overflow = "hidden";
}
/* --- LÓGICA DE RESERVA Y DISPONIBILIDAD --- */

function calcularNoches() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const nochesDisplay = document.getElementById('cantNoches');

    if (checkin && checkout) {
        const fechaEntrada = new Date(checkin);
        const fechaSalida = new Date(checkout);
        const diferencia = fechaSalida - fechaEntrada;
        const noches = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

        if (noches > 0) {
            nochesDisplay.innerText = noches;
        } else {
            alert("La fecha de salida debe ser posterior a la de entrada.");
            document.getElementById('checkout').value = "";
            nochesDisplay.innerText = "0";
        }
    }
}

function cambiarCantidad(id, valor) {
    const input = document.getElementById(id);
    const adultos = parseInt(document.getElementById('adultos').value);
    const niños = parseInt(document.getElementById('niños').value);
    let cantidadActual = parseInt(input.value);
    
    const nuevoTotal = adultos + niños + (valor);

    if (cantidadActual + valor >= 0) {
        if (valor > 0 && (adultos + niños) >= 6) {
            alert("La capacidad máxima de Casa Villa Zorzal es de 6 personas.");
            return;
        }
        // Evitar dejar 0 adultos si hay niños
        if (id === 'adultos' && cantidadActual + valor === 0 && niños > 0) {
            alert("Debe haber al menos un adulto responsable.");
            return;
        }
        input.value = cantidadActual + valor;
    }
}

function validarYEnviarReserva() {
    const campos = ['nombreReserva', 'emailReserva', 'telReserva', 'dniReserva', 'checkin', 'checkout'];
    let valido = true;

    campos.forEach(id => {
        if (!document.getElementById(id).value) valido = false;
    });

    if (!valido) {
        alert("Por favor, completa todos los campos para verificar disponibilidad.");
        return;
    }

    alert("Solicitud enviada con éxito. Germán o Claudia se contactarán a la brevedad para confirmar la disponibilidad.");
    // Aquí se podría integrar con Firebase o un servicio de mail
}

/* --- CONEXIÓN CON EL PANEL ADMIN --- */
function validarYEnviarReserva() {
    const nombre = document.getElementById('nombreReserva').value;
    const dni = document.getElementById('dniReserva').value;
    const tel = document.getElementById('telReserva').value;
    const email = document.getElementById('emailReserva').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const adultos = document.getElementById('adultos').value;
    const niños = document.getElementById('niños').value;
    const noches = document.getElementById('cantNoches').innerText;

    if (!nombre || !dni || !tel || !email || !checkin || !checkout) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear el objeto de la nueva reserva
    const nuevaReserva = {
        id: Date.now(), // ID único basado en tiempo
        nombre,
        dni,
        tel,
        email,
        checkin,
        checkout,
        pax: `${adultos}A / ${niños}M`,
        noches,
        estado: 'Pendiente'
    };

    // Obtener reservas existentes o crear array vacío
    let reservas = JSON.parse(localStorage.getItem('reservasZorzal')) || [];
    
    // Guardar la nueva reserva
    reservas.push(nuevaReserva);
    localStorage.setItem('reservasZorzal', JSON.stringify(reservas));

    alert("¡Solicitud enviada! Germán o Claudia revisarán tu reserva en el panel.");
    
    // Limpiar formulario
    document.getElementById('formReserva').reset();
    document.getElementById('cantNoches').innerText = "0";
}
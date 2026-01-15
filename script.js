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
    chorro: { titulo: "Chorro San Ignacio", res: "El Chorro de San Ignacio es una cascada que nace de entre las Sierras de Comechingones, ubicada entre las localidades argentinas de Villa Larca y Papagayos del Departamento Chacabuco, Provincia de San Luis. Se ubica a 2 km hacia las sierras desde la RP1 de San Luis .", dist: "2 km" },
    piscu: { titulo: "Dique Piscu Yaco", res: "Espejo de agua con playas de arena, ideal para actividades náuticas sin motor, Su nombre en lengua comechingona significa Aguada de los Pájaros", dist: "15 km" },
    papagayos: { titulo: "Ollas de Papagayos", res: "Pozones naturales de agua cristalina rodeados de la flora autóctona de la zona. Las 8 Ollas: El arroyo cuenta con una serie de 8 piletas naturales de distintas profundidades.", dist: "12 km" },
    elena: { titulo: "Cascada Villa Elena", res: "La Cascada Esmeralda (conocida comúnmente como Cascada de Villa Elena) se encuentra en la Reserva Natural Quebrada de Villa Elena, en la localidad de Cortaderas, provincia de San Luis. Se caracteriza por un salto de agua de aproximadamente 9 metros de altura y una pileta natural (olla) de unos 4 metros de profundidad.", dist: "18 km" },
    talar: { titulo: "Balneario El Talar", res: "El Balneario El Talar es un oasis de aguas cristalinas ubicado en la localidad de Los Molles, a unos 12 km al sur de Merlo. Se destaca por sus pozas naturales formadas por el Arroyo Los Molles bajo una frondosa arboleda de talas y algarrobos.", dist: "22 km" },
    pasos: { titulo: "Pasos Malos", res: "Pasos Malos es uno de los circuitos turísticos más emblemáticos e imperdibles de la Villa de Merlo, en la provincia de San Luis. Se destaca por su belleza natural, un importante polo gastronómico y la historia detrás de su nombre", dist: "38 km" },
    tabaquillo: { titulo: "Salto Tabaquillo", res: "Aventura de trekking, El Salto del Talar o Salto del Tabaquillo es la cascada más emblemática de la Villa de Merlo. Con una caída libre de 18 metros, se encuentra en el corazón de la Reserva Natural Municipal Rincón del Este.", dist: "40 km" },
    rincon: { titulo: "Rincón del Este", res: "Reserva natural con senderos para avistaje de aves y contacto directo con la paz serrana. La Reserva Florofaunística Rincón del Este es el pulmón verde de la Villa de Merlo, situada al pie de las Sierras de los Comechingones, al final de la Avenida de los Césares. Es el punto de partida para las aventuras de montaña más importantes de la zona. ", dist: "36 km" },
    sol: { titulo: "Mirador del Sol", res: "El Mirador del Sol es uno de los puntos panorámicos más destacados de la Villa de Merlo, ubicado a 1.470 metros sobre el nivel del mar en el camino hacia el Filo Serrano. Ofrece una vista imponente del Valle del Conlara y es un lugar popular para ver la puesta del sol. ", dist: "42 km" },
    filo: { titulo: "Filo Merlo", res: "El Filo Serrano (o simplemente El Filo) es el punto más alto del circuito turístico de Merlo al que se puede acceder en auto, ubicado a más de 2.100 metros sobre el nivel del mar en el límite entre las provincias de San Luis y Córdoba. Es famoso por ofrecer vistas panorámicas inigualables del Valle del Conlara y por ser el mejor lugar para observar el atardecer.", dist: "48 km" }
};

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

window.onclick = function(event) {
    if (event.target == document.getElementById('generalModal')) {
        closeModal();
    }
}
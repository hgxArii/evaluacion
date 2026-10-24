let torneos = [];

function registrarTorneo() {
    let nombre = document.getElementById("nombre").value.trim();
    let categoria = document.getElementById("categoria").value;
    let participantes = Number(document.getElementById("participantes").value);
    let valorInscripcion = Number(document.getElementById("valorInscripcion").value);
    let email = document.getElementById("email").value.trim();
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCategoria").textContent = "";
    document.getElementById("errorParticipantes").textContent = "";
    document.getElementById("errorValor").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("mensajeExito").textContent = "";

    let hayErrores = false;
    if (nombre.length < 4) {
        document.getElementById("errorNombre").textContent =
            "El nombre debe tener al menos 4 caracteres.";
        hayErrores = true;
    }
    if (categoria === "") {
        document.getElementById("errorCategoria").textContent =
            "Debe seleccionar una categoría.";
        hayErrores = true;
    }
    if (!Number.isInteger(participantes) ||
        participantes < 1 ||
        participantes > 100) {

        document.getElementById("errorParticipantes").textContent =
            "Debe ser un número entero entre 1 y 100.";
        hayErrores = true;
    }
    if (valorInscripcion <= 0 || isNaN(valorInscripcion)) {
        document.getElementById("errorValor").textContent =
            "El valor debe ser mayor que 0.";
        hayErrores = true;
    }
    if (email === "") {
        document.getElementById("errorEmail").textContent =
            "El email no puede estar vacío.";
        hayErrores = true;
    }
    if (hayErrores) {
        return;
    }

    let recaudacion = participantes * valorInscripcion;
    let nuevoTorneo = {
        nombre: nombre,
        categoria: categoria,
        participantes: participantes,
        valorInscripcion: valorInscripcion,
        email: email,
        recaudacion: recaudacion
    };

    torneos.push(nuevoTorneo);
    mostrarTorneos();
    limpiarFormulario();
    document.getElementById("mensajeExito").textContent =
        "Torneo registrado correctamente";
}
function mostrarTorneos() {
    let html = "";
    for (let i = 0; i < torneos.length; i++) {
        let torneo = torneos[i];
        html += `
            <tr>
                <td>${torneo.nombre}</td>
                <td>${torneo.categoria}</td>
                <td>${torneo.participantes}</td>
                <td>$${torneo.valorInscripcion.toFixed(2)}</td>
                <td>${torneo.email}</td>
                <td>$${torneo.recaudacion.toFixed(2)}</td>
            </tr>`;
    }
    document.getElementById("cuerpoTabla").innerHTML = html;
}
function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("participantes").value = "";
    document.getElementById("valorInscripcion").value = "";
    document.getElementById("email").value = "";
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCategoria").textContent = "";
    document.getElementById("errorParticipantes").textContent = "";
    document.getElementById("errorValor").textContent = "";
    document.getElementById("errorEmail").textContent = "";
}
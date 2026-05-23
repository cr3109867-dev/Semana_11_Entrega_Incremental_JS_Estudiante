/*
  SEMANA 11 - ENTREGA INCREMENTAL DEL SITIO/PROYECTO
  OBJETIVO: Entregar una versión funcional del proyecto con las siguientes características:
  - Formulario de inscripción con validación de datos.
  - Almacenamiento de inscripciones en localStorage.
  - Visualización de inscripciones en una tabla.
  - Resumen estadístico de inscripciones (total, válidos, pendientes, taller más popular).
  - Funcionalidad para eliminar inscripciones individuales y borrar todo.
  - Mensajes de retroalimentación para el usuario.  
*/

const STORAGE_KEY = "semana11_inscripciones_incremento";
let inscripciones = [];

const form = document.getElementById("form-inscripcion");
const btnLimpiar = document.getElementById("btn-limpiar");
const btnBorrarTodo = document.getElementById("btn-borrar-todo");
const mensaje = document.getElementById("mensaje");
const tabla = document.getElementById("tabla-inscripciones");
const totalInscritos = document.getElementById("total-inscritos");
const totalValidos = document.getElementById("total-validos");
const totalPendientes = document.getElementById("total-pendientes");
const tallerPopular = document.getElementById("taller-popular");

if (document.body.dataset.page !== "tests") {
  document.addEventListener("DOMContentLoaded", iniciarAplicacion);
}

function iniciarAplicacion() {
  inscripciones = cargarInscripciones();
  renderizarTabla();
  actualizarResumen();

  if (form) {
    form.addEventListener("submit", manejarEnvio);
  }

  if (btnLimpiar) {
    btnLimpiar.addEventListener("click", limpiarFormulario);
  }

  if (btnBorrarTodo) {
    btnBorrarTodo.addEventListener("click", borrarTodo);
  }
}

function manejarEnvio(evento) {
  evento.preventDefault();

  const registro = leerFormulario();
  const errores = validarInscripcion(registro);

  if (errores.length === 0) {
    guardarRegistro(registro);
    mostrarMensaje("Inscripción guardada correctamente.", "exito");
    form.reset();
  } else {
    mostrarMensaje(errores.join(" | "), "error");
  }
}

function leerFormulario() {
  return {
    nombre: document.getElementById("nombre").value.trim(),
    edad: Number(document.getElementById("edad").value),
    telefono: document.getElementById("telefono").value.trim(),
    correo: document.getElementById("correo").value.trim(),
    taller: document.getElementById("taller").value,
    jornada: document.getElementById("jornada").value,
    acepta: document.getElementById("acepta").checked
  };
}

function validarInscripcion(registro) {
  const errores = [];

  if (!registro.nombre || registro.nombre.length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres.");
  }

  if (Number.isNaN(registro.edad) || registro.edad < 12) {
    errores.push("La edad debe ser de 12 años o más.");
  }

  if (registro.telefono.length !== 10 || !/^\d+$/.test(registro.telefono)) {
    errores.push("El teléfono debe tener exactamente 10 dígitos numéricos.");
  }

  if (!registro.correo.includes("@") || !registro.correo.includes(".")) {
    errores.push("El correo electrónico debe tener un formato válido.");
  }

  if (registro.taller === "") {
    errores.push("Debe seleccionar un taller.");
  }

  if (registro.acepta !== true) {
    errores.push("Debe confirmar que los datos son correctos.");
  }

  return errores;
}

function obtenerDescripcionTaller(taller) {
  switch (taller) {
    case "web":
      return "Programación web: HTML, CSS, JavaScript y depuración.";
    case "huerta":
      return "Huerta digital: registros, formularios y seguimiento.";
    case "finanzas":
      return "Finanzas: control básico para emprendimientos rurales.";
    case "datos":
      return "Datos para la finca: tablas, filtros y reportes.";
    default:
      return "Taller no identificado.";
  }
}

function guardarRegistro(registro) {
  const nuevoRegistro = {
    id: Date.now(),
    ...registro,
    descripcion: obtenerDescripcionTaller(registro.taller),
    fecha: new Date().toLocaleString()
  };

  inscripciones.push(nuevoRegistro);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inscripciones));

  renderizarTabla();
  actualizarResumen();
}

function cargarInscripciones() {
  const datos = localStorage.getItem(STORAGE_KEY);
  if (!datos) return [];

  try {
    const registros = JSON.parse(datos);
    return Array.isArray(registros) ? registros : [];
  } catch (error) {
    console.warn("No se pudieron cargar los datos guardados:", error);
    return [];
  }
}

function renderizarTabla() {
  if (!tabla) return;

  tabla.innerHTML = "";

  if (inscripciones.length === 0) {
    tabla.innerHTML = '<tr><td colspan="7" class="empty">Aún no hay registros.</td></tr>';
    return;
  }

  for (let i = 0; i < inscripciones.length; i++) {
    const item = inscripciones[i];
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${item.nombre}</td>
      <td>${item.edad}</td>
      <td>${item.telefono}<br><small>${item.correo}</small></td>
      <td><strong>${item.taller}</strong><br><small>${item.descripcion}</small></td>
      <td>${item.jornada}</td>
      <td>${item.fecha}</td>
      <td><button class="button secondary" type="button" onclick="eliminarRegistro(${item.id})">Eliminar</button></td>
    `;

    tabla.appendChild(fila);
  }
}

function actualizarResumen() {
  if (!totalInscritos) return;

  totalInscritos.textContent = inscripciones.length;
  totalValidos.textContent = inscripciones.filter((item) => item.edad >= 12 && item.acepta === true).length;
  totalPendientes.textContent = 0;
  tallerPopular.textContent = obtenerTallerPopular(inscripciones);
}

function obtenerTallerPopular(lista = inscripciones) {
  if (!lista || lista.length === 0) return "Sin datos";

  const conteo = {};

  for (let i = 0; i < lista.length; i++) {
    const taller = lista[i].taller;
    conteo[taller] = (conteo[taller] || 0) + 1;
  }

  let ganador = "Sin datos";
  let maximo = 0;

  for (const taller in conteo) {
    if (conteo[taller] > maximo) {
      ganador = taller;
      maximo = conteo[taller];
    }
  }

  return ganador;
}

function mostrarMensaje(texto, tipo = "info") {
  if (!mensaje) return;

  mensaje.textContent = texto;
  mensaje.className = `message ${tipo}`;
}

function limpiarFormulario() {
  if (form) {
    form.reset();
  }

  mostrarMensaje("Formulario limpio. Continúe con una nueva prueba.", "info");
}

function eliminarRegistro(id) {
  inscripciones = inscripciones.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inscripciones));
  renderizarTabla();
  actualizarResumen();
}

function borrarTodo() {
  if (!confirm("¿Desea borrar todas las inscripciones?")) return;

  inscripciones = [];
  localStorage.removeItem(STORAGE_KEY);
  renderizarTabla();
  actualizarResumen();
  mostrarMensaje("Registros eliminados.", "info");
}

window.eliminarRegistro = eliminarRegistro;

window.Semana11Feature = {
  validarInscripcion,
  obtenerDescripcionTaller,
  obtenerTallerPopular,
  cargarInscripciones
};

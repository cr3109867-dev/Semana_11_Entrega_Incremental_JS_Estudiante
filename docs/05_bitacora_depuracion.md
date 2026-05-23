# Bitacora de depuracion

| No. | Error encontrado | Tipo de error | Archivo/linea aproximada | Como lo detecte | Solucion aplicada | Prueba posterior |
|---|---|---|---|---|---|---|
| 1 | El formulario se buscaba como `formulario-inscripcion`, pero en HTML era `form-inscripcion`. | Referencia | js/app.js inicio | Consola indicaba que no podia usar addEventListener sobre null | Cambie el id usado en JavaScript | El formulario respondio al boton guardar |
| 2 | El mensaje se buscaba como `mensajes`, pero el id correcto era `mensaje`. | Referencia | js/app.js inicio | Revision del HTML y consola | Cambie el selector por `mensaje` | Se mostraron mensajes de error y exito |
| 3 | El evento del boton limpiar ejecutaba la funcion de inmediato. | Evento | iniciarAplicacion | Revision del codigo | Cambie `limpiarFormulario()` por `limpiarFormulario` | El boton limpia solo al hacer clic |
| 4 | El formulario recargaba la pagina porque faltaba `preventDefault`. | Flujo | manejarEnvio | Prueba manual al guardar | Active `evento.preventDefault()` | El registro se procesa sin recargar |
| 5 | El flujo estaba invertido y guardaba cuando habia errores. | Logica | manejarEnvio | Prueba con formulario vacio | Cambie la condicion a `errores.length === 0` | Los invalidos no se guardan |
| 6 | El telefono se leia desde `celular`, id que no existe. | Referencia | leerFormulario | Consola y comparacion con HTML | Cambie a `telefono` | El campo telefono se lee correctamente |
| 7 | La edad se comparaba de forma invertida. | Logica | validarInscripcion | tests.html marcaba falla en edad menor | Cambie la regla a edad menor que 12 | Edad 10 queda rechazada |
| 8 | El ciclo de tabla usaba `<=` y llegaba a un elemento undefined. | Ciclo | renderizarTabla | Consola al renderizar registros | Cambie a `i < inscripciones.length` | La tabla se muestra sin errores |

## Reflexion final

1. El error mas dificil de detectar fue el flujo invertido, porque el sistema parecia responder, pero guardaba registros invalidos.
2. La herramienta que mas ayudo fue la consola del navegador junto con `tests.html`, porque permitio ver errores de referencia y fallas de logica.
3. Aprendi que el control de flujos decide si un sistema guarda informacion o muestra errores, por eso una condicion mal escrita puede dañar toda la funcionalidad.
4. En un proyecto real aplicaria la buena practica de probar despues de cada cambio, revisar nombres de id entre HTML y JavaScript y mantener una bitacora de errores corregidos.

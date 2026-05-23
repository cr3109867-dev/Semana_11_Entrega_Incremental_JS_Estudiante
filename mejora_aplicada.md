# Mejora aplicada al proyecto

## Archivo modificado

`js/app.js`

## Cambio realizado

Se mejoraron las validaciones del formulario de inscripción. Ahora el sistema valida que:

- El nombre tenga mínimo 3 caracteres.
- La edad sea numérica y mayor o igual a 12.
- El teléfono tenga exactamente 10 dígitos numéricos.
- El correo tenga formato válido.
- El usuario seleccione un taller.
- El usuario confirme que los datos son correctos.

También se corrigió el flujo del formulario para que no guarde registros inválidos y para que muestre mensajes claros al usuario.

## Por qué mejora el proyecto

Esta mejora fortalece la integridad de la información porque evita guardar datos incompletos, incorrectos o inconsistentes. Además, permite que la tabla, los indicadores y el taller más popular se calculen usando únicamente registros válidos.

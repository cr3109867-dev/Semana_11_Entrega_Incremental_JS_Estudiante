# CHANGELOG - Incremento Semana 11

## Nombre del proyecto
Incremento funcional: Inscripcion a talleres comunitarios

## Integrantes
Escribe aqui tu nombre.

## Version entregada
v1.0-semana11

## Funcionalidad agregada o ajustada
Se corrigio el modulo de inscripcion a talleres comunitarios. Ahora el formulario valida los datos, evita registros invalidos, guarda inscripciones en localStorage, muestra los registros en tabla, actualiza los indicadores y permite limpiar o borrar registros. Tambien se corrigio la exposicion de funciones para que las pruebas automaticas de tests.html funcionen correctamente.

## Archivos modificados
- [x] index.html
- [x] css/styles.css
- [x] js/app.js
- [x] docs/03_checklist_requisitos.md
- [x] docs/04_matriz_pruebas.md
- [x] docs/05_bitacora_depuracion.md

## Validaciones implementadas
- [x] Nombre obligatorio y minimo de caracteres.
- [x] Edad numerica y mayor o igual a 12.
- [x] Telefono de 10 digitos.
- [x] Correo con formato valido.
- [x] Seleccion de taller.
- [x] Confirmacion de datos.

## Errores corregidos durante la depuracion
Se corrigieron identificadores que no coincidian con el HTML, eventos mal conectados, falta de preventDefault, flujo invertido al guardar registros, lectura incorrecta del telefono, validacion de edad invertida, validacion incorrecta de telefono y correo, propiedad acepta mal escrita, descripcion del taller web, almacenamiento en localStorage y ciclo de renderizado que recorria una posicion extra.

## Pruebas realizadas
Se probaron registros invalidos, nombre corto, edad menor a 12, telefono corto, telefono con letras, correo invalido, falta de taller, falta de confirmacion, registro valido, limpieza del formulario, borrado de registros, resumen actualizado y pruebas automaticas en tests.html.

## Reflexion tecnica
Aprendi que depurar JavaScript requiere revisar la consola, comparar los id del HTML con los usados en JS y probar cada cambio. Tambien aprendi que el control de flujo con if/else debe estar bien organizado para evitar guardar informacion incorrecta. Las pruebas automaticas ayudan a confirmar que la logica principal funciona antes de entregar el proyecto.

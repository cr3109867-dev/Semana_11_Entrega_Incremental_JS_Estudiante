# Matriz de pruebas

| ID | Escenario | Datos de entrada | Resultado esperado | Resultado obtenido | Estado | Evidencia |
|---|---|---|---|---|---|---|
| P01 | Cargar pagina | Abrir index.html | Sitio carga sin errores visibles | Sitio carga correctamente | Aprobado | 01_pagina_inicio.png |
| P02 | Consola inicial | Abrir consola | No hay errores despues de corregir | Consola sin errores rojos | Aprobado | 07_consola_sin_errores.png |
| P03 | Formulario vacio | Clic en guardar | Muestra errores y no guarda | Muestra mensajes de validacion | Aprobado | 03_formulario_invalido.png |
| P04 | Nombre corto | Nombre: Lu | Rechaza por nombre menor a 3 caracteres | Rechaza el registro | Aprobado | 03_formulario_invalido.png |
| P05 | Edad menor | Edad: 10 | Rechaza por edad menor a 12 | Rechaza el registro | Aprobado | 03_formulario_invalido.png |
| P06 | Telefono corto | 300123456 | Rechaza por longitud incorrecta | Rechaza el registro | Aprobado | 03_formulario_invalido.png |
| P07 | Telefono con letras | 30012abc67 | Rechaza por caracteres no numericos | Rechaza el registro | Aprobado | 03_formulario_invalido.png |
| P08 | Correo invalido | laura_correo | Rechaza por formato de correo | Rechaza el registro | Aprobado | 03_formulario_invalido.png |
| P09 | Sin taller | Taller vacio | Rechaza por no seleccionar taller | Rechaza el registro | Aprobado | 03_formulario_invalido.png |
| P10 | Sin confirmacion | Acepta: no marcado | Rechaza por falta de confirmacion | Rechaza el registro | Aprobado | 03_formulario_invalido.png |
| P11 | Registro valido | Datos completos correctos | Guarda y muestra en tabla | Registro guardado y visible | Aprobado | 04_formulario_valido.png |
| P12 | Resumen | Dos o mas registros | Actualiza indicadores superiores | Indicadores actualizados | Aprobado | 06_resumen_actualizado.png |
| P13 | Taller popular | Dos registros del mismo taller | Muestra taller con mayor demanda | Muestra web o taller correspondiente | Aprobado | 06_resumen_actualizado.png |
| P14 | Limpiar | Clic en limpiar | Limpia formulario sin borrar tabla | Formulario limpio | Aprobado | 05_tabla_registros.png |
| P15 | Borrar todo | Clic en borrar registros | Elimina registros y actualiza resumen | Tabla queda vacia y resumen en cero | Aprobado | 05_tabla_registros.png |
| P16 | Pruebas automaticas | Abrir tests.html | Pruebas en verde | Todas las pruebas aparecen OK | Aprobado | 08_tests_aprobados.png |
| P17 | Vista movil | Reducir ancho o usar celular | Interfaz legible y usable | La interfaz se adapta correctamente | Aprobado | 09_vista_movil.png |

# tarea1TallerDeIntegracion
Repositorio para el control de versiones del código de la tarea 1 de taller de integración

Para ver la pagina en linea se puede ingresar a <https://tarea1-bb-bcs-api.herokuapp.com/>

En este proyecto consume una API de Breaking Bad y Better Call Saul.

Implementaciones:
- se ven ambas series al inicio
- si se selecciona una serie se puede ver sus temporadas y sus capítulos
- si seleccionas una temporada se filtra la lista de capítulos
- si seleccionas un capítulo se muestra el detalle de este:
  - nombre
  - temporada
  - número
  - fecha de publicación (en formato feo eso si)
  - personajes
- Si seleccionas un personaje te lleva a la vista detallada de dicho personaje que contiene:
  - Nombre
  - apodo
  - categoría
  - ocupación
  - apariciones en BB
  - apariciones en BCS
- si seleccionas algún numero de temporada en la que aparece se redirige a la vista de las temporadas de esa serie, Por como está diseñada página no se me fue posible dirigirte exactamente a la temporada que seleccionaste porque solo hay una única vista para todas las temporadas. Tampoco se puede aplicar # en la URL porque es la misma vista   que se va actualizando.
- tiene una NavBar que te redirige al inicio
- se puede hacer búsqueda rápida y búsqueda en detalle
- para la búsqueda rápida hay que apretar el botón de mostrar/ocultar
- para la búsqueda detallada hay que apretar el botón de búsqueda detallada (que se puede afinar)

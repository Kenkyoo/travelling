Travelling 🌍

Travelling es una aplicación web diseñada para usuarios interesados en explorar opciones de viajes, con características avanzadas que incluyen filtrado por destinos, visualización de detalles en modales, cambio de temas y más. La app utiliza tecnologías modernas para brindar una experiencia fluida y atractiva.


Tecnologías utilizadas

    HTML5, CSS3, JavaScript: Estructura, estilo y funcionalidad.
    MDB UI Kit: Para componentes preconstruidos y temas.
    Font Awesome: Íconos y elementos gráficos.
    Google Fonts: Tipografía personalizable.
    Animate.css: Animaciones para interacciones dinámicas.
    Google Charts: Visualización de datos (preparado para implementar).

Funcionalidades principales
1. Cambio de tema (light/dark)

    Cambio manual mediante un interruptor en la UI.
    Tecla rápida: Shift + D alterna entre los modos claro y oscuro.
    Sincronización con las preferencias del sistema operativo.

2. Barra de navegación dinámica

    Cambio de opacidad al hacer scroll.
    Apariencia animada para mejorar la experiencia del usuario.

3. Formulario de búsqueda animado

    Resaltado al enfocarse en el campo.
    Se desactiva automáticamente al hacer clic fuera del formulario.

4. Sidebar interactivo

    Botón para abrir/cerrar un menú lateral.
    Ajusta la clase del cuerpo para adaptarse a la visibilidad del menú.

5. Sección de viajes

    Más de 20 destinos turísticos detallados:
        Imagen destacada.
        Descripción del lugar.
        Precio estimado.
        Filtros por continente y tipo de destino (ciudad, histórico, etc.).
    Visualización dinámica mediante tarjetas con animaciones.

6. Filtros avanzados

    Filtrado en tiempo real por continente o tipo de destino.
    Opción de mostrar todos los destinos o solo los que cumplan el criterio seleccionado.

7. Modales con información detallada

    Al hacer clic en una tarjeta, se abre un modal:
        Imagen ampliada.
        Descripción completa del destino.
        Título destacado.
    Uso de la biblioteca de modales de MDB.

8. Selección desde dropdown

    Menú desplegable para seleccionar destinos rápidamente.
    Sincronizado con la lista de destinos disponibles.

Notificación de Snackbar en Envío de Formulario

    Descripción: Al hacer clic en el botón de enviar del formulario, se muestra una notificación tipo snackbar que aparece desde la parte inferior de la pantalla y desaparece después de un breve intervalo.
    Comportamiento:
        Se agrega la clase show para mostrar el snackbar.
        Se anima con animate__fadeInUp al aparecer y animate__fadeOutDown al desaparecer.

2. Carrusel de Testimonios

    Descripción: Muestra una serie de testimonios de usuarios sobre su experiencia con los servicios de la empresa.
    Comportamiento:
        Los testimonios se muestran con una animación de entrada (animate__fadeIn).
        Se permite navegar entre los testimonios mediante los botones "Next" y "Prev".
        Los testimonios tienen un sistema de puntuación con estrellas, las cuales se resaltan según la calificación.

3. Filtro de Búsqueda

    Descripción: Permite filtrar las tarjetas de elementos (como destinos de viaje) mediante un campo de búsqueda.
    Comportamiento:
        El filtro se activa cuando el usuario interactúa con el campo de búsqueda.
        Los elementos se muestran u ocultan dinámicamente según si el texto del filtro coincide con las clases de las tarjetas.

4. Galería de Imágenes

    Descripción: Muestra una galería de imágenes de destinos turísticos.
    Comportamiento:
        Al hacer clic en cualquier imagen, se abre un modal que muestra la imagen en un tamaño más grande.
        Las imágenes se cargan dinámicamente desde un array.

5. Destino Aleatorio

    Descripción: Muestra un destino de viaje aleatorio en una tarjeta.
    Comportamiento:
        Al hacer clic en el botón "Random", el destino cambia a otro aleatorio de la lista de viajes.
        Cada destino tiene su imagen, nombre y precio.

6. Formulario de Suscripción Emergente

    Descripción: Aparece un formulario de suscripción después de 10 segundos desde que se carga la página.
    Comportamiento:
        El formulario de suscripción se muestra con un efecto show después de 10 segundos.
        El formulario se puede cerrar haciendo clic en el botón de cerrar.

7. Gráfico de Pastel con Google Charts

    Descripción: Muestra un gráfico de pastel interactivo con los destinos más buscados por los usuarios.
    Comportamiento:
        Los datos de destinos más buscados se cargan en el gráfico y se visualizan con un estilo 3D.
        Se personaliza el estilo del gráfico, como el color, la posición de la leyenda y el título.

8. Preguntas Frecuentes (FAQ)

    Descripción: Se presenta una lista de preguntas frecuentes en formato acordeón.
    Comportamiento:
        Al hacer clic en cada pregunta, se expande la respuesta.
        Las preguntas y respuestas se cargan dinámicamente desde un array.

9. Contadores de Datos de Usuario

    Descripción: Muestra contadores dinámicos de estadísticas, como usuarios registrados, clientes activos y viajes realizados.
    Comportamiento:
        Los valores de los contadores aumentan cada 7 segundos, simulando una actualización en tiempo real.

10. Sección de Valoración de Usuarios

    Descripción: Permite a los usuarios dejar su puntuación mediante un sistema de estrellas.
    Comportamiento:
        La puntuación promedio se calcula y se actualiza en tiempo real.
        La puntuación de cada usuario se agrega al total de valoraciones y se refleja en el gráfico de barras con la distribución de puntuaciones.

Contribuciones

Este proyecto es abierto a contribuciones. Por favor, sigue el flujo estándar de pull requests y asegúrate de que tu código pase las pruebas de calidad.

¿Quieres colaborar? ¡Estamos felices de trabajar contigo! 😊

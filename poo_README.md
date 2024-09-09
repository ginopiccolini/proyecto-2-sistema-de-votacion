Encuesta de Música - Rock en Diferentes Décadas
Este proyecto consiste en una encuesta interactiva de música rock, creada utilizando HTML, JavaScript y principios de Programación Orientada a Objetos (POO). A continuación, se describen los componentes y la estructura del código.

Descripción General
El código está diseñado para realizar una encuesta de música enfocada en distintas épocas del rock. Los usuarios pueden seleccionar sus preferencias respondiendo preguntas sobre sus artistas, álbumes y canciones favoritos de diferentes décadas. Al finalizar, los resultados de la encuesta se muestran en la consola.

Estructura del Proyecto
HTML
El archivo HTML contiene la estructura básica de la página web con un botón para comenzar la encuesta.

Etiqueta <button>: Un botón con el texto "Comenzar Encuesta" que permite al usuario iniciar la encuesta.
Etiqueta <script>: Se incluye el archivo de JavaScript externo sistemaEncuestaPoo.js que contiene la lógica de la encuesta.
JavaScript (POO)
La lógica de la encuesta está implementada en JavaScript utilizando clases para organizar el código según los principios de Programación Orientada a Objetos.

1. Clase Pregunta
Atributos:
texto: Contiene el texto de la pregunta.
opciones: Almacena las opciones de respuesta.
votos: Lleva un registro de los votos para cada opción.
respuestaSeleccionada: Guarda la opción seleccionada por el usuario.
Métodos:
registrarVoto(opcionIndex): Registra el voto de una opción seleccionada por el usuario.
obtenerResultado(): Devuelve el resultado de la votación de esa pregunta en formato de texto.
2. Clase Encuesta
Atributos:
preguntas: Una lista de preguntas de tipo Pregunta.
Métodos:
registrarVotos(): Muestra las preguntas al usuario mediante un prompt para que elija una respuesta y luego registra el voto.
mostrarResultados(): Muestra los resultados de todas las preguntas en la consola.
3. Flujo del Programa
Se definen un conjunto de preguntas de ejemplo en la variable preguntasIniciales, cada una creada utilizando la clase Pregunta.
Luego, se crea una instancia de la clase Encuesta con las preguntas iniciales.
Al hacer clic en el botón "Comenzar Encuesta", se ejecuta la encuesta, mostrando las preguntas al usuario y registrando las respuestas mediante el método registrarVotos. Finalmente, se muestran los resultados en la consola usando mostrarResultados.
Ejecución
Para ejecutar el programa, basta con abrir el archivo HTML en un navegador web. Al presionar el botón, el sistema comienza a hacer las preguntas y, al terminar, muestra los resultados en la consola del navegador.

Conclusión
Este proyecto implementa una encuesta simple utilizando principios de Programación Orientada a Objetos en JavaScript, donde las clases permiten modularizar y organizar el código de manera eficiente, facilitando su expansión y mantenimiento.

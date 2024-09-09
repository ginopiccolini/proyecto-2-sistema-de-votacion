Encuesta de Rock
Este proyecto implementa una encuesta interactiva sobre rock entre los años 50 y 2000 utilizando JavaScript. Los usuarios pueden votar por sus opciones favoritas y ver los resultados al final.

Descripción
El proyecto consta de dos clases principales: Pregunta y Encuesta. La clase Pregunta maneja la lógica de cada pregunta individual, mientras que la clase Encuesta gestiona un conjunto de preguntas y coordina la interacción con el usuario.

Clases
Clase Pregunta
Representa una pregunta de la encuesta.

Constructor
JavaScript

constructor(texto, opciones)

texto: El texto de la pregunta.
opciones: Un arreglo de opciones de respuesta.
Propiedades
texto: Almacena el texto de la pregunta.
opciones: Almacena las opciones de respuesta.
votos: Un arreglo que almacena los votos para cada opción, inicializado en cero.
respuestaSeleccionada: Almacena la opción seleccionada por el usuario.
Métodos
registrarVoto(opcionIndex): Registra un voto para la opción seleccionada.
JavaScript

registrarVoto(opcionIndex) {
    this.votos[opcionIndex] += 1;
    this.respuestaSeleccionada = opcionIndex;
}

obtenerResultado(): Devuelve los resultados de la pregunta en formato de texto.
JavaScript

obtenerResultado() {
    return this.opciones.map((opcion, index) => `${opcion}: ${this.votos[index]} votos`).join("\n");
}

Clase Encuesta
Representa una encuesta compuesta por múltiples preguntas.

Constructor
JavaScript

constructor(preguntas)

preguntas: Un arreglo de objetos Pregunta.
Propiedades
preguntas: Almacena una lista de preguntas.
Métodos
registrarVotos(): Registra los votos de los usuarios utilizando prompt.
JavaScript

registrarVotos() {
    this.preguntas.forEach((pregunta, index) => {
        let respuesta = -1;
        while (respuesta < 1 || respuesta > pregunta.opciones.length || isNaN(respuesta)) {
            let mensaje = `Pregunta ${index + 1}: ${pregunta.texto}\n`;
            pregunta.opciones.forEach((opcion, i) => {
                mensaje += `${i + 1}: ${opcion}\n`;
            });
            respuesta = parseInt(prompt(mensaje));
        }
        pregunta.registrarVoto(respuesta - 1);
    });
}

mostrarResultados(): Muestra los resultados de la encuesta en la consola.
JavaScript

mostrarResultados() {
    console.clear();
    console.log("Resultados de la encuesta:");
    this.preguntas.forEach((pregunta, index) => {
        console.log(`Pregunta ${index + 1}: ${pregunta.texto}`);
        console.log(pregunta.obtenerResultado());
        console.log("--------------------");
    });
}

Uso
Define las preguntas de la encuesta utilizando la clase Pregunta.
Crea una instancia de Encuesta con las preguntas definidas.
Agrega un evento al botón para comenzar la encuesta y registrar los votos.
JavaScript

const preguntasIniciales = [
    new Pregunta('¿Quién es tu artista favorito de los años 50?', ['Chuck Berry', 'Elvis Presley', 'Little Richard']),
    new Pregunta('¿Cuál es tu álbum favorito de los años 60?', ['Sgt. Pepper\'s Lonely Hearts Club Band - The Beatles', 'Let It Bleed - The Rolling Stones', 'Tommy - The Who']),
    // Más preguntas...
];

let encuesta = new Encuesta(preguntasIniciales);

document.getElementById('comenzar-encuesta').addEventListener('click', function() {
    encuesta.registrarVotos();
    encuesta.mostrarResultados();
});

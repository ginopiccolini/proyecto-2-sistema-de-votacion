Encuesta de Rock
Este proyecto implementa una encuesta interactiva sobre rock entre los años 50 y 2000 utilizando JavaScript. Los usuarios pueden votar por sus opciones favoritas y ver los resultados acumulados al final.

Descripción
El proyecto consta de varias funciones que permiten crear preguntas, registrar votos, obtener resultados y gestionar la encuesta. La encuesta se realiza a través de prompt y los resultados se muestran en la consola. El código está escrito en un estilo de programación funcional.

Funciones
crearPregunta
Crea una nueva pregunta con sus opciones de respuesta.

JavaScript

const crearPregunta = (texto, opciones) => ({
    texto,
    opciones,
    votos: new Array(opciones.length).fill(0), // Arreglo para almacenar votos
    respuestaSeleccionada: null // Guarda la opción seleccionada
});

registrarVoto
Registra un voto para una opción específica de una pregunta.

JavaScript

const registrarVoto = (pregunta, opcionIndex) => {
    pregunta.votos[opcionIndex] += 1; // Aumenta el voto de la opción seleccionada
    pregunta.respuestaSeleccionada = opcionIndex; // Guarda la opción seleccionada
};

obtenerResultado
Obtiene los resultados acumulados de una pregunta.

JavaScript

const obtenerResultado = (pregunta, numeroPregunta) => 
    `Pregunta ${numeroPregunta}: ${pregunta.texto}\n` + 
    pregunta.opciones.map((opcion, index) => `${index + 1}: ${opcion} - ${pregunta.votos[index]} votos`).join("\n");

crearEncuesta
Crea una encuesta a partir de un arreglo de preguntas.

JavaScript

const crearEncuesta = (preguntas) => preguntas;
Código generado por IA. Revisar y usar cuidadosamente. Más información sobre preguntas frecuentes.
realizarEncuesta
Realiza la encuesta preguntando al usuario a través de prompt.

JavaScript

const realizarEncuesta = (encuesta) => {
    encuesta.forEach((pregunta, index) => {
        let respuesta = null;
        while (respuesta === null || isNaN(respuesta) || respuesta < 1 || respuesta > pregunta.opciones.length) {
            const opcionesTexto = pregunta.opciones.map((opcion, i) => `${i + 1}: ${opcion}`).join('\n');
            respuesta = parseInt(prompt(`Pregunta ${index + 1}: ${pregunta.texto}\n${opcionesTexto}`));
        }
        registrarVoto(pregunta, respuesta - 1); // Restamos 1 para ajustar al índice del array
    });
};

mostrarResultadosConsola
Muestra los resultados acumulados de la encuesta en la consola.

JavaScript

const mostrarResultadosConsola = (encuesta) => {
    console.clear(); // Limpia la consola antes de mostrar los nuevos resultados
    console.log("Resultados acumulados de la encuesta:");
    encuesta.forEach((pregunta, index) => {
        console.log(obtenerResultado(pregunta, index + 1));
    });
};

reiniciarEncuesta
Reinicia las respuestas seleccionadas sin borrar los votos acumulados.

JavaScript

const reiniciarEncuesta = (encuesta) => {
    encuesta.forEach(pregunta => {
        pregunta.respuestaSeleccionada = null; // Reinicia las respuestas seleccionadas, pero no los votos
    });
};

Uso
Define las preguntas de la encuesta utilizando la función crearPregunta.
Crea una instancia de la encuesta con las preguntas definidas.
Agrega un evento al botón para comenzar la encuesta y registrar los votos.
JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const preguntasIniciales = [
        crearPregunta('¿Quién es tu artista favorito de los años 50?', ['Chuck Berry', 'Elvis Presley', 'Little Richard']),
        crearPregunta('¿Cuál es tu álbum favorito de los años 60?', ['Sgt. Pepper\'s Lonely Hearts Club Band - The Beatles', 'Let It Bleed - The Rolling Stones', 'Tommy - The Who']),
        crearPregunta('¿Qué actuación en vivo de los años 70 te parece más icónica?', ['Jimi Hendrix en Woodstock', 'Led Zeppelin en Madison Square Garden', 'Queen en Live Aid']),
        crearPregunta('¿Cuál es tu álbum favorito de Pink Floyd?', ['The Wall', 'Wish You Were Here', 'The Dark Side of the Moon']),
        crearPregunta('¿Qué canción de rock de los años 80 te gusta más?', ['Sweet Child O\' Mine - Guns N\' Roses', 'Livin\' on a Prayer - Bon Jovi', 'Back in Black - AC/DC']),
        crearPregunta('¿Quién es tu vocalista favorito de los años 90?', ['Kurt Cobain (Nirvana)', 'Eddie Vedder (Pearl Jam)', 'Chris Cornell (Soundgarden)']),
        crearPregunta('¿Cuál es tu banda de rock alternativo favorita de los años 2000?', ['Green Day', 'The Strokes', 'Arctic Monkeys']),
        crearPregunta('¿Qué álbum de rock lanzado en los 2000 consideras el mejor?', ['American Idiot - Green Day', 'Is This It - The Strokes', 'Whatever People Say I Am, That\'s What I\'m Not - Arctic Monkeys'])
    ];

    let encuesta = crearEncuesta(preguntasIniciales);

    document.getElementById('comenzar-encuesta').addEventListener('click', function() {
        realizarEncuesta(encuesta);
        mostrarResultadosConsola(encuesta);
    });
});

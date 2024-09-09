document.addEventListener('DOMContentLoaded', () => {
    // funcion para crear una nueva pregunta
    const crearPregunta = (texto, opciones) => ({
        texto,
        opciones,
        votos: new Array(opciones.length).fill(0), // arreglo para almacenar votos
        respuestaSeleccionada: null // guarda la opción seleccionada
    });

    // funcion para registrar un voto en una pregunta
    const registrarVoto = (pregunta, opcionIndex) => {
        pregunta.votos[opcionIndex] += 1; // aumenta el voto de la opción seleccionada
        pregunta.respuestaSeleccionada = opcionIndex; // Guarda la opción seleccionada
    };

    // funcion para obtener los resultados acumulados de una pregunta
    const obtenerResultado = (pregunta, numeroPregunta) => 
        `Pregunta ${numeroPregunta}: ${pregunta.texto}\n` + 
        pregunta.opciones.map((opcion, index) => `${index + 1}: ${opcion} - ${pregunta.votos[index]} votos`).join("\n");

    // funcion para crear la encuesta
    const crearEncuesta = (preguntas) => preguntas;

    // funcion para realizar las preguntas a traves de prompt
    const realizarEncuesta = (encuesta) => {
        encuesta.forEach((pregunta, index) => {
            let respuesta = null;
            while (respuesta === null || isNaN(respuesta) || respuesta < 1 || respuesta > pregunta.opciones.length) {
                const opcionesTexto = pregunta.opciones.map((opcion, i) => `${i + 1}: ${opcion}`).join('\n');
                respuesta = parseInt(prompt(`Pregunta ${index + 1}: ${pregunta.texto}\n${opcionesTexto}`));
            }
            registrarVoto(pregunta, respuesta - 1); // restamos 1 para ajustar al indice del array
        });
    };

    // funcion para mostrar los resultados acumulados en la consola
    const mostrarResultadosConsola = (encuesta) => {
        console.clear(); // limpia la consola antes de mostrar los nuevos resultados
        console.log("Resultados acumulados de la encuesta:");
        encuesta.forEach((pregunta, index) => {
            console.log(obtenerResultado(pregunta, index + 1));
        });
    };

    // funcion para reiniciar las respuestas sin borrar los votos acumulados
    const reiniciarEncuesta = (encuesta) => {
        encuesta.forEach(pregunta => {
            pregunta.respuestaSeleccionada = null; // reinicia las respuestas seleccionadas, pero no los votos
        });
    };

    // preguntas de la encuesta
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

    // crear encuesta a partir de las preguntas iniciales
    let encuesta = crearEncuesta(preguntasIniciales);

    // evento para comenzar la encuesta
    document.getElementById('comenzarEncuestaBtn').addEventListener('click', () => {
        realizarEncuesta(encuesta); // inicia la encuesta
        mostrarResultadosConsola(encuesta); // muestra los resultados acumulados
    });

});

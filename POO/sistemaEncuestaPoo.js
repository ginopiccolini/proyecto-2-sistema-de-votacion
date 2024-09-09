// clase pregunta
class Pregunta {
    constructor(texto, opciones) {
        this.texto = texto;
        this.opciones = opciones;
        this.votos = new Array(opciones.length).fill(0); // inicializa los votos con ceros
        this.respuestaSeleccionada = null; // almacena la opción seleccionada
    }

    // registra votos en la pregunta
    registrarVoto(opcionIndex) {
        this.votos[opcionIndex] += 1; // aumenta el voto en la opcion seleccionada
        this.respuestaSeleccionada = opcionIndex; // Guarda la opcion seleccionada
    }

    // obtiene los resultados de la pregunta
    obtenerResultado() {
        return this.opciones.map((opcion, index) => `${opcion}: ${this.votos[index]} votos`).join("\n");
    }
}

// clase Encuesta
class Encuesta {
    constructor(preguntas) {
        this.preguntas = preguntas; // almacena una lista de preguntas
    }

    // registra los votos en la encuesta usando prompt
    registrarVotos() {
        this.preguntas.forEach((pregunta, index) => {
            let respuesta = -1;
            while (respuesta < 1 || respuesta > pregunta.opciones.length || isNaN(respuesta)) {
                // muestra la pregunta y las opciones al usuario
                let mensaje = `Pregunta ${index + 1}: ${pregunta.texto}\n`; // numera la pregunta
                pregunta.opciones.forEach((opcion, i) => {
                    mensaje += `${i + 1}: ${opcion}\n`; // las opciones comienzan desde 1
                });
                respuesta = parseInt(prompt(mensaje));
            }
            pregunta.registrarVoto(respuesta - 1); // ajusta el indice de respuesta
        });
    }

    // muestra los resultados de la encuesta en la consola
    mostrarResultados() {
        console.clear(); // limpia la consola
        console.log("Resultados de la encuesta:");
        this.preguntas.forEach((pregunta, index) => {
            console.log(`Pregunta ${index + 1}: ${pregunta.texto}`); // muestra el numero y titulo de la pregunta
            console.log(pregunta.obtenerResultado()); // muestra los resultados de la pregunta
            console.log("--------------------");
        });
    }
}

// Preguntas de la encuesta
const preguntasIniciales = [
    new Pregunta('¿Quién es tu artista favorito de los años 50?', ['Chuck Berry', 'Elvis Presley', 'Little Richard']),
    new Pregunta('¿Cuál es tu álbum favorito de los años 60?', ['Sgt. Pepper\'s Lonely Hearts Club Band - The Beatles', 'Let It Bleed - The Rolling Stones', 'Tommy - The Who']),
    new Pregunta('¿Qué actuación en vivo de los años 70 te parece más icónica?', ['Jimi Hendrix en Woodstock', 'Led Zeppelin en Madison Square Garden', 'Queen en Live Aid']),
    new Pregunta('¿Cuál es tu álbum favorito de Pink Floyd?', ['The Wall', 'Wish You Were Here', 'The Dark Side of the Moon']),
    new Pregunta('¿Qué canción de rock de los años 80 te gusta más?', ['Sweet Child O\' Mine - Guns N\' Roses', 'Livin\' on a Prayer - Bon Jovi', 'Back in Black - AC/DC']),
    new Pregunta('¿Quién es tu vocalista favorito de los años 90?', ['Kurt Cobain (Nirvana)', 'Eddie Vedder (Pearl Jam)', 'Chris Cornell (Soundgarden)']),
    new Pregunta('¿Cuál es tu banda de rock alternativo favorita de los años 2000?', ['Green Day', 'The Strokes', 'Arctic Monkeys']),
    new Pregunta('¿Qué álbum de rock lanzado en los 2000 consideras el mejor?', ['American Idiot - Green Day', 'Is This It - The Strokes', 'Whatever People Say I Am, That\'s What I\'m Not - Arctic Monkeys'])
];

// crea la encuesta con las preguntas iniciales
let encuesta = new Encuesta(preguntasIniciales);

// agrega el evento al boton para comenzar la encuesta
document.getElementById('comenzar-encuesta').addEventListener('click', function() {
    encuesta.registrarVotos();
    encuesta.mostrarResultados();
});

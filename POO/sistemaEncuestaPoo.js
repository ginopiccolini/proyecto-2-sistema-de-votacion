// Clase Pregunta
class Pregunta {
    constructor(texto, opciones) {
        this.texto = texto;
        this.opciones = opciones;
        this.votos = new Array(opciones.length).fill(0); // Inicializa los votos con ceros
        this.respuestaSeleccionada = null; // Almacena la opción seleccionada
    }

    // Método para registrar un voto en la pregunta
    registrarVoto(opcionIndex) {
        this.votos[opcionIndex] += 1; // Aumenta el voto en la opción seleccionada
        this.respuestaSeleccionada = opcionIndex; // Guarda la opción seleccionada
    }

    // Método para obtener los resultados de la pregunta
    obtenerResultado() {
        return this.opciones.map((opcion, index) => `${opcion}: ${this.votos[index]} votos`).join("<br>");
    }

    // Método para reiniciar las respuestas seleccionadas
    reiniciarRespuesta() {
        this.respuestaSeleccionada = null; // Reinicia la selección
    }
}

// Clase Encuesta
class Encuesta {
    constructor(preguntas) {
        this.preguntas = preguntas; // Almacena una lista de preguntas
    }

    // Método para registrar los votos en la encuesta
    registrarVotos() {
        this.preguntas.forEach((pregunta, index) => {
            const opciones = document.getElementsByName(`pregunta${index}`);
            const opcionSeleccionada = [...opciones].find(opcion => opcion.checked);
            if (opcionSeleccionada) {
                pregunta.registrarVoto(parseInt(opcionSeleccionada.value)); // Registra el voto
            }
        });
    }

    // Método para mostrar los resultados de la encuesta
    mostrarResultados() {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Limpiar los resultados previos

        this.preguntas.forEach(pregunta => {
            const resultP = document.createElement('p');
            resultP.innerHTML = pregunta.obtenerResultado();
            resultsDiv.appendChild(resultP);
        });
    }

    // Método para mostrar la encuesta en el DOM
    mostrarEncuesta() {
        const form = document.getElementById('surveyForm');
        form.innerHTML = ''; // Limpiar el formulario

        this.preguntas.forEach((pregunta, index) => {
            const preguntaDiv = document.createElement('div');
            preguntaDiv.innerHTML = `<h3>${pregunta.texto}</h3>`;

            pregunta.opciones.forEach((opcion, opcionIndex) => {
                const opcionLabel = document.createElement('label');
                opcionLabel.innerHTML = `
                    <input type="radio" name="pregunta${index}" value="${opcionIndex}"
                    ${pregunta.respuestaSeleccionada === opcionIndex ? 'checked' : ''}>
                    ${opcion}
                `;
                preguntaDiv.appendChild(opcionLabel);
                preguntaDiv.appendChild(document.createElement('br'));
            });

            form.appendChild(preguntaDiv);
        });
    }

    // Método para validar que todas las preguntas han sido respondidas
    validarEncuestaCompleta() {
        for (let i = 0; i < this.preguntas.length; i++) {
            const opciones = document.getElementsByName(`pregunta${i}`);
            const respuestaSeleccionada = [...opciones].some(opcion => opcion.checked);
            if (!respuestaSeleccionada) {
                return false; // Si alguna pregunta no fue respondida
            }
        }
        return true; // Todas las preguntas fueron respondidas
    }

    // Método para reiniciar la encuesta (limpia las selecciones, pero no los votos)
    reiniciarEncuesta() {
        this.preguntas.forEach(pregunta => pregunta.reiniciarRespuesta());
        this.mostrarEncuesta(); // Refrescar la visualización
        document.getElementById('results').innerHTML = ''; // Limpiar los resultados
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

// Crear una instancia de la encuesta con las preguntas iniciales
let encuesta = new Encuesta(preguntasIniciales);

// Mostrar la encuesta al cargar la página
window.onload = () => {
    encuesta.mostrarEncuesta();
};

// Registrar votos y actualizar la encuesta
document.getElementById('submitBtn').addEventListener('click', () => {
    if (encuesta.validarEncuestaCompleta()) {
        encuesta.registrarVotos(); // Actualiza la encuesta con los votos
        encuesta.mostrarResultados(); // Muestra los resultados actualizados
        alert('¡Gracias por completar la encuesta! Sus respuestas han sido registradas.');
    } else {
        alert('Por favor, responde todas las preguntas antes de enviar.');
    }
});

// Reiniciar la encuesta sin borrar los votos
document.getElementById('resetBtn').addEventListener('click', () => {
    encuesta.reiniciarEncuesta(); // Solo reinicia la visualización del formulario
});

// Consultar el conteo de votos
document.getElementById('viewVotesBtn').addEventListener('click', () => {
    encuesta.mostrarResultados(); // Muestra los resultados sin registrar votos nuevos
});

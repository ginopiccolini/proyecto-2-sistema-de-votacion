// Función para crear una nueva pregunta
const crearPregunta = (texto, opciones) => ({
    texto,
    opciones,
    votos: new Array(opciones.length).fill(0),
    respuestaSeleccionada: null // Se guarda la opción seleccionada
});

// Función para registrar un voto en una pregunta
const registrarVoto = (pregunta, opcionIndex) => {
    const nuevosVotos = [...pregunta.votos];
    nuevosVotos[opcionIndex] += 1; // Aumenta el voto de la opción seleccionada
    return {
        ...pregunta,
        votos: nuevosVotos,
        respuestaSeleccionada: opcionIndex // Guarda la opción seleccionada
    };
};

// Función para obtener los resultados de una pregunta
const obtenerResultado = (pregunta) => 
    pregunta.opciones.map((opcion, index) => `${opcion}: ${pregunta.votos[index]} votos`).join("<br>");

// Función para crear la encuesta
const crearEncuesta = (preguntas) => preguntas;

// Función para mostrar la encuesta, conservando las respuestas seleccionadas
const mostrarEncuesta = (encuesta) => {
    const form = document.getElementById('surveyForm');
    form.innerHTML = ''; // Limpiar el formulario

    encuesta.forEach((pregunta, index) => {
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
};

// Función para verificar si todas las preguntas han sido respondidas
const validarEncuestaCompleta = (encuesta) => {
    for (let i = 0; i < encuesta.length; i++) {
        const opciones = document.getElementsByName(`pregunta${i}`);
        const respuestaSeleccionada = [...opciones].some(opcion => opcion.checked);
        if (!respuestaSeleccionada) {
            return false; // Si alguna pregunta no fue respondida
        }
    }
    return true; // Todas las preguntas fueron respondidas
};

// Función para registrar votos en toda la encuesta
const registrarVotosEncuesta = (encuesta) => {
    return encuesta.map((pregunta, index) => {
        const opciones = document.getElementsByName(`pregunta${index}`);
        const opcionSeleccionada = [...opciones].find(opcion => opcion.checked);
        if (opcionSeleccionada) {
            return registrarVoto(pregunta, parseInt(opcionSeleccionada.value));
        }
        return pregunta; // Si no hay voto seleccionado, devuelve la pregunta sin cambios
    });
};

// Función para mostrar los resultados de la encuesta
const mostrarResultados = (encuesta) => {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    encuesta.forEach((pregunta) => {
        const resultP = document.createElement('p');
        resultP.innerHTML = obtenerResultado(pregunta);
        resultsDiv.appendChild(resultP);
    });
};

// Función para reiniciar el formulario sin afectar los votos, pero reiniciando las respuestas
const reiniciarFormulario = (encuesta) => {
    // Reiniciar la selección de las respuestas
    encuesta.forEach(pregunta => {
        pregunta.respuestaSeleccionada = null; // Reinicia las respuestas seleccionadas
    });
    mostrarEncuesta(encuesta); // Actualiza la visualización del formulario
    document.getElementById('results').innerHTML = ''; // Limpia los resultados
};

// Función para mostrar alerta de encuesta completada
const mostrarAlertaCompletada = () => {
    alert('¡Gracias por completar la encuesta! Sus respuestas han sido registradas.');
};

// Preguntas de la encuesta
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

// Crear encuesta a partir de las preguntas iniciales
let encuesta = crearEncuesta(preguntasIniciales);

// Mostrar la encuesta al cargar la página
window.onload = () => {
    mostrarEncuesta(encuesta);
};

// Registrar votos y actualizar la encuesta
document.getElementById('submitBtn').addEventListener('click', () => {
    if (validarEncuestaCompleta(encuesta)) {
        encuesta = registrarVotosEncuesta(encuesta); // Actualiza la encuesta con los votos
        mostrarResultados(encuesta); // Muestra los resultados actualizados
        mostrarAlertaCompletada(); // Muestra alerta de encuesta completada
    } else {
        alert('Por favor, responde todas las preguntas antes de enviar.');
    }
});

// Reiniciar la encuesta sin borrar los votos
document.getElementById('resetBtn').addEventListener('click', () => {
    reiniciarFormulario(encuesta); // Solo reinicia la visualización del formulario
});

// Consultar el conteo de votos
document.getElementById('viewVotesBtn').addEventListener('click', () => {
    mostrarResultados(encuesta); // Muestra los resultados sin registrar votos nuevos
});

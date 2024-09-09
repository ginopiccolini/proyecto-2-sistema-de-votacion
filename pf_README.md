Encuesta de Rock - README
Descripción del Proyecto
Este proyecto implementa una encuesta interactiva sobre rock a lo largo de las décadas. La aplicación está diseñada usando HTML y JavaScript bajo un enfoque de programación funcional, donde las funciones se tratan como ciudadanos de primera clase. El propósito es permitir a los usuarios participar en la encuesta, registrar sus votos y ver los resultados directamente en la consola del navegador.

Características
Encuesta dinámica: El usuario puede responder una serie de preguntas relacionadas con el rock.
Registro de votos: Los votos de los usuarios se almacenan y se pueden revisar los resultados acumulados.
Resultados en consola: Los resultados de la encuesta se muestran en la consola del navegador una vez que el usuario finaliza.
Reinicio de encuesta: La encuesta puede ser reiniciada para volver a realizarla sin perder los votos acumulados.
Estructura del Proyecto
HTML (index.html)
El archivo HTML define la estructura básica de la aplicación con un botón que permite al usuario comenzar la encuesta.

html
Copiar código
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encuesta de Rock</title>
    <script src="sistemaEncuestaPf.js" defer></script> 
</head>
<body>
    <h1>Encuesta de Rock</h1>
    <p>Participa en nuestra encuesta sobre rock a lo largo de las décadas.</p>
    <div>
        <button id="comenzarEncuestaBtn">Comenzar Encuesta</button>
    </div>
    <h4>Los resultados se pueden revisar en la consola</h4>
</body>
</html>


JavaScript (sistemaEncuestaPf.js)
Este archivo contiene toda la lógica de la encuesta utilizando un paradigma funcional. Las funciones clave incluyen:

crearPregunta: Genera un objeto que representa una pregunta y sus posibles respuestas.
registrarVoto: Registra el voto del usuario en una opción específica.
obtenerResultado: Devuelve los resultados acumulados para cada pregunta.
crearEncuesta: Crea una encuesta a partir de un conjunto de preguntas.
realizarEncuesta: Interactúa con el usuario usando prompt para obtener las respuestas.
mostrarResultadosConsola: Muestra los resultados acumulados en la consola del navegador.
reiniciarEncuesta: Permite reiniciar las respuestas seleccionadas sin perder los votos acumulados.
Ejecución del Código
Cuando el documento HTML se carga, el script escucha un evento de clic en el botón "Comenzar Encuesta", que desencadena las siguientes acciones:

Inicia la encuesta mostrando las preguntas en ventanas emergentes (prompt).
Registra las respuestas del usuario.
Muestra los resultados acumulados en la consola.
Ejemplo de Uso
Cargar el archivo HTML en un navegador.
Hacer clic en el botón "Comenzar Encuesta".
Responder las preguntas en los cuadros de diálogo.
Observar los resultados en la consola.
Programación Funcional
El código fue implementado siguiendo los principios de programación funcional, donde se destacan:

Funciones puras: Las funciones no tienen efectos secundarios y siempre devuelven el mismo resultado para las mismas entradas (por ejemplo, crearPregunta, registrarVoto).
Inmutabilidad: Los votos se actualizan sin modificar el estado global directamente.
Uso de funciones de orden superior: Algunas funciones como forEach y map se utilizan para iterar sobre las preguntas y opciones, evitando bucles imperativos.
Instalación
Clonar el repositorio o descargar los archivos.
Abrir el archivo index.html en cualquier navegador.
Autor
Este proyecto fue creado con un enfoque en la programación funcional y con el objetivo de realizar una encuesta simple pero interactiva en JavaScript.








console.log("Primera Pre Entrega. Andres de Acevedo.-");
console.log("Preguntas matemáticas sobre operaciones con Enteros.");
console.log(" ");
console.log("Son 5 preguntas, deberás responder verdadero o falso.");
console.log("Ganas el juego si respondes bien por lo menos 2 de 3");

alert("Desafío matemático. Hábil guerrero de las operaciones, tienes un desafío");
alert("Debes lograr responder por lo menos 2 de las siguientes 3 preguntas.");

let listo = prompt("¿Estás preparado para jugar? SI o NO?");

while (listo !== "SI" && listo !== "NO") {
    alert("Respuesta inválida, responda por SI o por NO");
    listo = prompt("¿Estás preparado para jugar? SI o NO?").toUpperCase();
}

if (listo === "SI") {
    alert("Deberás responder V o F.");

    // Inicializamos la variable para contar aciertos
    let cantidadDeAciertos = 0;

    for (let i = 1; i <= 3; i++) {
        let pregunta;
        let respuestaCorrecta;

        switch (i) {
            case 1:
                pregunta = prompt("5-3.4=8").toUpperCase();
                respuestaCorrecta = "F";
                break;

            case 2:
                pregunta = prompt("7.0+4=0").toUpperCase();
                respuestaCorrecta = "F";
                break;

            case 3:
                pregunta = prompt("12-4:4-4:(-4)=12").toUpperCase();
                respuestaCorrecta = "V";
                break;
        }

        while (pregunta !== "V" && pregunta !== "F") {
            alert("Respuesta inválida, responda por V o por F");
            pregunta = prompt("Debes responder V o F. Inténtalo de nuevo.").toUpperCase();
        }

        if (pregunta === respuestaCorrecta) {
            alert("Respuesta correcta");
            cantidadDeAciertos++;
        } else {
            alert("Respuesta incorrecta");
        }
    }

    // Determinamos si ganó o perdió
    if (cantidadDeAciertos >= 2) {
        alert("¡Ganaste! Tienes " + cantidadDeAciertos + " aciertos.");
    } else {
        alert("Perdiste. Solo tienes " + cantidadDeAciertos + " aciertos.");
    }

} else if (listo === "NO") {
    alert("Deshonra");
}

let nombre = prompt("Ingrese su nombre");
function saludarPersona(nombre) {
    console.log(`Gracias por participar ${nombre}`);
}
saludarPersona(nombre);
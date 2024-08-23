var i = 0;
var intentosRestantes = 10; 

document.querySelector('.btn-tirar').addEventListener('click', function () {
if (intentosRestantes > 0) {  
    // Numeros random para los dados
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;

        // Primer dado imagen
        var resultadoDado1 = document.querySelector('.dado-uno');
        resultadoDado1.src = 'img/d' + dado1 + '.png';

        // Segundo dado imagen
        var resultadoDado2 = document.querySelector('.dado-dos');
        resultadoDado2.src = 'img/d' + dado2 + '.png';

        // Si los dados son iguales muestra una parte de la tortuga, de lo contrario quita una vida
        if (dado1 == dado2) {
            i += 1;
            var imagenTortuga = document.querySelector('.tortuga');
            imagenTortuga.src = 'img/p' + i + '.png';
            intentosRestantes = 10;  
        } else {
            intentosRestantes -= 1;
        }

        actualizarBarraDeVidas(intentosRestantes);

        // Delay para mostrar el mensaje
        setTimeout(verificarGanar, 200);
        setTimeout(verificarPerder, 200);
    }
});

function actualizarBarraDeVidas(intentos) {
    for (var j = 1; j <= 10; j++) {
        var corazon = document.getElementById('corazon' + j);
        if (j <= intentos) {
            corazon.classList.remove('vacio');
        } else {
            corazon.classList.add('vacio');
        }
    }
}

// Si se muestran las 3 partes de la tortuga GANAS!
function verificarGanar() {
    if (i == 3) {
        window.alert("GANASTE!");
        var imagenTortuga = document.querySelector('.tortuga');
        imagenTortuga.src = 'img/silueta.png';
        i = 0;
        intentosRestantes = 10;
        actualizarBarraDeVidas(intentosRestantes);
    }
}

function verificarPerder() {
    if (intentosRestantes <= 0) {
        window.alert("PERDISTE!");
        var imagenTortuga = document.querySelector('.tortuga');
        imagenTortuga.src = 'img/silueta.png';
        i = 0;
        intentosRestantes = 10;
        actualizarBarraDeVidas(intentosRestantes);
    }
}

var musica = document.getElementById('musicaFondo');
var btnMusica = document.getElementById('btn-musica');
var iconoMusica = btnMusica.querySelector('i');

btnMusica.addEventListener('click', function () {
    if (musica.paused) {
        musica.play();
        iconoMusica.classList.remove('bi-volume-off-fill');
        iconoMusica.classList.add('bi-volume-up-fill');
    } else {
        musica.pause();
        iconoMusica.classList.remove('bi-volume-up-fill');
        iconoMusica.classList.add('bi-volume-off-fill');
    }
});
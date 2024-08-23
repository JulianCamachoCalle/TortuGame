var i = 0;
var intestos=10;


document.querySelector('.btn-tirar').addEventListener('click', function () {
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;

    var resultadoDado1 = document.querySelector('.dado-uno');
    resultadoDado1.src = 'img/d' + dado1 + '.png';

    var resultadoDado2 = document.querySelector('.dado-dos');
    resultadoDado2.src = 'img/d' + dado2 + '.png';

    if (dado1 == dado2) {
        i += 1;
        var imagenTortuga = document.querySelector('.tortuga');
        imagenTortuga.src = 'img/p' + i + '.png';
        intentosRestantes = 10;  
    } else {
        intentosRestantes -= 1;
    }

    document.getElementById('vidas').textContent = intentosRestantes;

    setTimeout(verificarGanar, 200);
    setTimeout(verificarPerder, 200);
});

function verificarGanar () {
    if (i == 3) {
        window.alert("GANASTE!");

        var imagenTortuga = document.querySelector('.tortuga');
        imagenTortuga.src = 'img/silueta.png';

        i = 0;
        intentosRestantes = 10;
        document.getElementById('vidas').textContent = intentosRestantes;
    }
}

function verificarPerder() {
    if (intentosRestantes <= 0) {
        window.alert("PERDISTE!");
        var imagenTortuga = document.querySelector('.tortuga');
        imagenTortuga.src = 'img/silueta.png';
        i = 0;
        intentosRestantes = 10;
        document.getElementById('vidas').textContent = intentosRestantes;
    }
}

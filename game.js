var i = 0;

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
    }

    setTimeout(verificarGanar, 200);
});

function verificarGanar () {
    if (i == 3) {
        window.alert("GANASTE!");

        var imagenTortuga = document.querySelector('.tortuga');
        imagenTortuga.src = 'img/silueta.png';

        i = 0;
    }
}

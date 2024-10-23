let contador = 1;
let intervalo;
const contadorElement = document.getElementById('contador');

document.getElementById('iniciar').addEventListener('click', () => {
    if (!intervalo) {
        intervalo = setInterval(() => {
            if (contador > 10) {
                contador = 1;
            }
            contadorElement.textContent = contador;
            contador++;
        }, 1000); // Conta a cada 1 segundo
    }
});

document.getElementById('parar').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
});

document.getElementById('resetar').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
    contador = 1;
    contadorElement.textContent = contador;
});

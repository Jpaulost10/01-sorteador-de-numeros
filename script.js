const inicialNumber = document.querySelector('#inicial-number');
const finalNumber = document.querySelector('#final-number');
const button = document.querySelector('.sorteio');
const result = document.querySelector('.result');
const restart = document.querySelector('.restart');

button.addEventListener("click", sortear)
restart.addEventListener("click", reiniciar)

function sortear() {

    const min = Number(inicialNumber.value);
    const max = Number(finalNumber.value);

    if (min >= max || min < 0 || max < 0 || inicialNumber.value == "" || finalNumber.value == "" 
        || !Number.isInteger(max) || !Number.isInteger(min)) {
        result.textContent = ("Verifique os valores informados!");
        restart.hidden = false;
        return;
    }

    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    result.textContent = `O número sorteado é: ${numeroSorteado}`;
    restart.hidden = false;
}

function reiniciar () {
    result.textContent = "";
    inicialNumber.value = "";
    finalNumber.value = "";
    inicialNumber.focus();
    restart.hidden = true;
}







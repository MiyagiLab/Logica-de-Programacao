let listaSorteados = [];
let numeroSecreto = genRandomNumber();
let tentativas = 1;
console.log(numeroSecreto);

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}
function mensagemIncial() {
    exibirTexto('h1', 'Número Secreto');
    exibirTexto('p', 'Escolha um número de 1 à 10');
}
mensagemIncial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'Número secreto é menor');
        } else {
            exibirTexto('p', 'Número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function genRandomNumber() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let listaLimite = listaSorteados.length;

    if (listaLimite == 3) {
        listaSorteados = [];
    }
    if (listaSorteados.includes(numeroEscolhido)) {
        return genRandomNumber();
    } else {
        listaSorteados.push(numeroEscolhido)
        console.log(listaSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = genRandomNumber()
    limparCampo();
    tentativas = 1;
    mensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
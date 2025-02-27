let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do teste';

function verificarConsole() {
    console.log ('O botão foi clicado!')
}

function verificarAlert() {
    alert('Eu amo JS')
}

function verificarPrompt() {
    let nomeDaCidade = prompt ('Digite um nome de uma cidade do Brasil que você gosta muito:');
    alert (`Estivem em ${nomeDaCidade} e lembrei de você!`);
}

    function verificarBotaoSoma() {
        let numeroUm = parseInt(prompt('Digite o primeiro número:'));
        let numeroDois = parseInt(prompt('Digite o segudo número'));
        let soma = numeroUm + numeroDois;
        alert (`A soma de ${numeroUm} + ${numeroDois} = ${soma}`);
    }
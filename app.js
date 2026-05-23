//Criação da lista e das variaveis.
//console.log em tudo para monitoramento constante —se algo der errado, eu sei exatamente onde foi—.
let listaDeNumeros = [];
let quantidade;
let numeroMinimo;
let numeroMaximo;
let numeroGerado;
let verificarCondicoes;
//Função para buscar os valores nos inputs e verificar condições.
//Acrescentada para trazer mais estabilidade para os outputs das demais funções.
function definirVariaveis () {
    quantidade = parseInt(document.getElementById('quantidade').value);
    numeroMinimo = parseInt(document.getElementById('de').value);
    numeroMaximo = parseInt(document.getElementById('ate').value);
    if (quantidade > 0 && numeroMaximo - numeroMinimo > 0) {
        verificarCondicoes = true;
    } else {
        verificarCondicoes = false;
    }
}

//Funções para ligar e desligar o botão Reiniciar:
function mudarClasse(id, classe) {
    let elemento = document.getElementById(id);
    elemento.classList.value = classe
}
function botãoReiniciarOff() {
    mudarClasse('btn-reiniciar', 'container__botao-desabilitado');
}
function botãoReiniciarOn() {
    mudarClasse('btn-reiniciar', 'container__botao');
}

//Função para alterar o texto abaixo dos botões:
function mudarTexto(texto) {
    const container = document.getElementsByClassName('container__texto')[1].querySelector('label');
    container.innerText = texto;
}

//Função responsável por gerar o número sorteado:
function gerarNumeroAleatorio(min, max, quant) {
    definirVariaveis();
    let intervalo = max - min + 1
    let numeroGerado = parseInt(Math.random() * intervalo + min);
    if (intervalo >= quant) {
        if (!listaDeNumeros.includes(numeroGerado)) {
            console.log(numeroGerado);
            return numeroGerado;   
        } else {
            console.log(`${numeroGerado} já foi sorteado`);
            return gerarNumeroAleatorio(min, max, quant); 
        }
    } else {
        console.log(numeroGerado);
        return numeroGerado;
    }
}

//Função principal:
function sortear() {
    botãoReiniciarOn();    
    definirVariaveis();
    if (parseInt(listaDeNumeros.length) >= quantidade) {
        //console.log('Limite atingido');
        alert('Limite atingido');
    } else {
        let numeroAtual = gerarNumeroAleatorio(numeroMinimo, numeroMaximo, quantidade);
        if (verificarCondicoes == false) {
            //console.log('Valores inválidos. (verificarCondições = false)')
            alert('Algo deu errado, verifique os valores digitados.');
        } else {
            console.log(`numeroAtual: ${numeroAtual}`);
            listaDeNumeros.push(parseInt(numeroAtual));
            mudarTexto(`Números sorteados:  ${listaDeNumeros}`);
        }
    }
}

//Função para alterar os campos de input:
function mudarValor (id, valor) {
    let campo = document.getElementById(id);
    campo.value = valor;
}

//Função do botão reiniciar:
function reiniciar() {
    botãoReiniciarOff();
    listaDeNumeros = [];
    mudarTexto('Números sorteados:  nenhum até agora.');
    mudarValor('quantidade', '');
    mudarValor('de', '');
    mudarValor('ate', '');
}
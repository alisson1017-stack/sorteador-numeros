//Sorteador de Numeros v2.0

//VARIAVEIS PRINCIPAIS v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2

let listaDeNumeros = [];
let quantidade;
let de;
let ate;

//FUNCOES PRINCIPAIS v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0

function sortear(){

    definirVariaveis();
    let valido = validarValores();
    console.log(`valido: ${valido}`);//MONITORAMENTO
    if (valido == true){
        let resultado = gerarNumeroAleatorio();
        console.log(listaDeNumeros);//MONITORAMENTO
        mudarTexto(`Números sorteados: ${resultado}`);
        listaDeNumeros = [];
    } else {
        alert('Erro. Verifique os valores')
    }
    botaoReiniciarOn();
}

function reiniciar(){
    mudarTexto('Números sorteados: nenhum até agora.');
    limparCampos();
    botaoReiniciarOff();
}

//FUNCOES COMPLEMENTARES v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v

function gerarNumeroAleatorio(){
    
    definirVariaveis();
    for (i = 1; i <= quantidade; i++){
        let numeroGerado = formula (de, ate);
        while (listaDeNumeros.includes(numeroGerado)){
            console.log(`definirVariaveis() | X ${numeroGerado} repetido`);//MONITORAMENTO
            numeroGerado = formula (de, ate);
        }    
        listaDeNumeros.push(numeroGerado);
    }
    return listaDeNumeros;
}

function definirVariaveis() {

    quantidade = parseInt(document.getElementById('quantidade').value);
    de = parseInt(document.getElementById('de').value);
    ate = parseInt(document.getElementById('ate').value);
    console.log(`definirVariaveis() | quantidade: ${quantidade}, de: ${de}, ate: ${ate}`); //MONITORAMENTO
}

function validarValores(){
    let diferenca = ate - de
    let intervalo = diferenca + 1
    console.log(`validarValores() | quantidade: ${quantidade}, diferenca: ${diferenca}, intervalo: ${intervalo}`)//MONITORAMENTO
    if (parseInt(quantidade) > 0 && diferenca > 0 && intervalo > 0 && quantidade <= intervalo) {
        return true;
    } else {
        return false;
    }
}

function formula(min, max){
    let numero = parseInt(Math.random() * (max - min + 1) + min);
    console.log(`formula() | numero: ${numero}`)//MONITORAMENTO
    return numero;
}

function mudarTexto(texto){
    document.getElementsByClassName('texto__paragrafo')[3].innerText = texto;
}

function mudarValor(id, valor){
    document.getElementById(id).value = valor;
}

function limparCampos(){
    mudarValor ('quantidade', '');
    mudarValor ('de', '');
    mudarValor ('ate', '');
}

function classeBotaoReiniciar(remove, add){
    document.getElementById('btn-reiniciar').classList.replace(remove, add);
}

function botaoReiniciarOn(){
    classeBotaoReiniciar('container__botao-desabilitado', 'container__botao');
}

function botaoReiniciarOff(){
    classeBotaoReiniciar('container__botao', 'container__botao-desabilitado');
}

// v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0 v2.0
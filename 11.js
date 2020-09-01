const gerarNumeroDeUmDado = function() {
    let numeroMaximo = 5;
    let numeroAleatorio = Math.round(Math.random() * numeroMaximo)

    return numeroAleatorio + 1;
};

const getMedia = function(numerosEscolhidos) {
    let soma = 0;

    for (let index = 0; index < numerosEscolhidos.length; index++) {
        soma += numerosEscolhidos[index];
    }

    return soma / numerosEscolhidos.length;
};

const getContagemNumeros = function(numerosEscolhidos) {
    let contagemNumeros = [0, 0, 0, 0, 0, 0];

    for (let index = 0; index < numerosEscolhidos.length; index++) {
        contagemNumeros[numerosEscolhidos[index] - 1] += 1;
    }

    return contagemNumeros;
};

const getQuantidadeAparicoes = function(numerosEscolhidos) {
    let contagemNumeros = getContagemNumeros(numerosEscolhidos);
    let maiorAparicaoNumero = 0;

    for (let index = 0; index < contagemNumeros.length; index++) {
        if (contagemNumeros[index] > maiorAparicaoNumero) {
            maiorAparicaoNumero = contagemNumeros[index];
        }
    }

    return maiorAparicaoNumero;
};

const getNumerosMaisOcorridos = function(numerosEscolhidos) {
    let contagemNumeros = getContagemNumeros(numerosEscolhidos);
    let maiorAparicaoNumero = getQuantidadeAparicoes(numerosEscolhidos);
    let resultado = [];

    for (let index = 0; index < contagemNumeros.length; index++) {
        if (contagemNumeros[index] == maiorAparicaoNumero) {
            let numero = index + 1;
            resultado.push(numero);
        }
    }

    return resultado;
};

const sortearNumeros = function() {
    let numerosEscolhidos = [];

    for (let index = 0; index < 10; index++) {
        numerosEscolhidos[index] = gerarNumeroDeUmDado();
    }

    return numerosEscolhidos;
};

const imprimirResultados = function(numerosEscolhidos, media, numerosMaisOcorridos, quantidadeAparicoes) {
    console.log(`Números escolhidos: ${numerosEscolhidos}`);
    console.log(`Média: ${media}`);
    console.log(`Números mais ocorridos: ${numerosMaisOcorridos}`);
    console.log(`Quantidade de aparições: ${quantidadeAparicoes}`);
};

(function() {
    let numerosEscolhidos = sortearNumeros();
    let media = getMedia(numerosEscolhidos);
    let numerosMaisOcorridos = getNumerosMaisOcorridos(numerosEscolhidos);
    let quantidadeAparicoes = getQuantidadeAparicoes(numerosEscolhidos);

    imprimirResultados(numerosEscolhidos, media, numerosMaisOcorridos, quantidadeAparicoes);
})();
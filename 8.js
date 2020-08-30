const getPorcentagem = function(valor) {
    return (valor / 100);
};

const calcularCustoConsumidor = function(custoFabrica) {
    let porcentagemDistribuidor = 28,
        porcentagemImpostos = 45;

    let valorDistribuidor = custoFabrica * getPorcentagem(porcentagemDistribuidor),
        valorImpostos = custoFabrica * getPorcentagem(porcentagemImpostos);

    let somaCustos = (custoFabrica + valorDistribuidor + valorImpostos);
    return somaCustos;
};

(function() {
    let custoFabrica = 40000;

    let resultado = calcularCustoConsumidor(custoFabrica);
    console.log(resultado);
})();
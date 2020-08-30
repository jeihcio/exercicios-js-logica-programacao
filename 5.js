const calcularMedia = function(nota1, nota2, nota3, peso1, peso2, peso3) {
    let produto1 = nota1 * peso1,
        produto2 = nota2 * peso2,
        produto3 = nota3 * peso3;

    let somaProdutos = (produto1 + produto2 + produto3),
        somaPesos = (peso1 + peso2 + peso3);

    let media = somaProdutos / somaPesos;
    return media;
};

(function() {
    let nota1 = 1,
        nota2 = 2,
        nota3 = 3;

    let peso1 = 2,
        peso2 = 3,
        peso3 = 5;

    let resultado = calcularMedia(
        nota1,
        nota2,
        nota3,
        peso1,
        peso2,
        peso3
    );

    console.log(resultado);
})();
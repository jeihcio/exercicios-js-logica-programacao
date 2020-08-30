const isInteiro = function(numero) {
    //return Number.isInteger(numero);

    let numeroArredondado = Math.round(numero);
    return (numero == numeroArredondado);
}

const calcularFormulaD = function(A, B, C) {

    if ((A <= 0) || (B <= 0) || (C <= 0)) {
        console.error("Os números de entrada devem ser positivos!")
        return;
    }

    if (!isInteiro(A) || !isInteiro(B) || !isInteiro(C)) {
        console.error("Os números devem ser inteiros");
        return;
    }

    let R = (A + B) * (A + B),
        S = (B + C) * (B + C),
        D = (R + S) / 2;

    return D;
};

(function() {
    let A = 1,
        B = 2,
        C = 3;

    let resultado = calcularFormulaD(A, B, C);
    console.log(resultado);
})();
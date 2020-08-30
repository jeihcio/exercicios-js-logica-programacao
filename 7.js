const calcularX = function(a, b, c, d, e, f) {
    let subtracao1 = (c * e) - (b * f),
        subtracao2 = (a * e) - (b * d);

    let divisao = subtracao1 / subtracao2;
    return divisao
};

const calcularY = function(a, b, c, d, e, f) {
    let subtracao1 = (a * f) - (c * d),
        subtracao2 = (a * e) - (b * d);

    let divisao = subtracao1 / subtracao2;
    return divisao
};

const calcularXY = function(a, b, c, d, e, f) {
    let x = calcularX(a, b, c, d, e, f),
        y = calcularY(a, b, c, d, e, f);

    return `X = ${x} \nY = ${y}`;
};

(function() {
    let a = 1,
        b = 2,
        c = 3,
        d = 4,
        e = 5,
        f = 6;

    let resultado = calcularXY(a, b, c, d, e, f);
    console.log(resultado);
})();
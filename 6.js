const calcularDistancia = function(ponto1, ponto2) {
    let x1 = ponto1.x,
        x2 = ponto2.x,
        y1 = ponto1.y,
        y2 = ponto1.y;

    let equacao1 = Math.pow((x2 - x1), 2),
        equacao2 = Math.pow((y2 - y1), 2);

    let distancia = Math.sqrt(equacao1 + equacao2);
    return distancia;
};

const ponto = {
    x: 0,
    y: 0
};

(function() {
    let ponto1 = new Object(),
        ponto2 = new Object();

    ponto1.x = 1;
    ponto1.y = 2;

    ponto2.x = 3;
    ponto2.y = 4;

    let resultado = calcularDistancia(ponto1, ponto2);
    console.log(resultado);
})();
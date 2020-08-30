const segundosParaTempo = function(segundosTotais) {
    let segundosPorMinuto = 60,
        minutosPorHora = 60,
        segundosPorHora = (minutosPorHora * segundosPorMinuto);

    let horas = 0,
        minutos = 0,
        segundos = 0;

    horas = Math.floor(segundosTotais / segundosPorHora);
    minutos = Math.floor((segundosTotais - (horas * segundosPorHora)) / minutosPorHora);
    segundos = Math.floor(segundosTotais - ((horas * segundosPorHora) + (minutos * segundosPorMinuto)));

    return `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
};

(function() {
    let segundos = 19815;

    let resultado = segundosParaTempo(segundos);
    console.log(resultado);
})();
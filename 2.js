const diasParaData = function(diasTotais) {
    let diasNoAno = 365,
        diasNoMes = 30;

    let anos = 0,
        meses = 0,
        dias = 0;

    anos = Math.floor(diasTotais / diasNoAno);
    meses = Math.floor((diasTotais - (anos * diasNoAno)) / diasNoMes);
    dias = Math.floor(diasTotais - ((anos * diasNoAno) + (meses * diasNoMes)));

    return `${anos} anos, ${meses} meses e ${dias} dias`;
};

(function() {
    let dias = 10160;

    let resultado = diasParaData(dias);
    console.log(resultado);
})();
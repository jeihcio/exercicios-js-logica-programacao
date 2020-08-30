const converterParaDias = function(anos, meses, dias) {
    let diasNoAno = 365,
        diasNoMes = 30;

    return (anos * diasNoAno) + (meses * diasNoMes) + dias;
};

(function() {
    let anos = 27,
        meses = 10,
        dias = 5

    let resultado = converterParaDias(anos, meses, dias);
    console.log(resultado);
})()
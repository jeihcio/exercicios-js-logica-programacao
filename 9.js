var dados = {
    Excesso: 0,
    Multa: 0
};

const verificarExcesso = function(pesoTomates) {
    let resultado = new Object();
    let pesoLimite = 50;
    let multaEmRealPorKilo = 4;

    resultado.Excesso = 0;
    resultado.Multa = 0;

    if (pesoTomates > pesoLimite) {
        resultado.Excesso = (pesoTomates - pesoLimite);
        resultado.Multa = resultado.Excesso * multaEmRealPorKilo;

        resultado.Excesso = `${resultado.Excesso} kilos`;
        resultado.Multa = `R$: ${resultado.Multa},00`;
    }

    return resultado;
};

(function() {
    let pesoTomates = 60;
    let resultado = verificarExcesso(pesoTomates);

    console.log(resultado);
})();
function Salario() {
    this.salario = 0;
    this.excedente = 0;
};

Salario.prototype.imprimir = function() {
    return `Salário-> R$: ${this.salario},00 \nExcedente-> R$: ${this.excedente},00`;
};

const calcularSalario = function(NumeroHorasTrabalhadas) {
    let valorPorHora = 10,
        valorExcessoPorHora = 20;
    let numeroHorasLimite = 50;
    let salario = new Salario();

    if (NumeroHorasTrabalhadas > numeroHorasLimite) {
        salario.salario = numeroHorasLimite * valorPorHora

        salario.excedente = (NumeroHorasTrabalhadas - numeroHorasLimite);
        salario.excedente = salario.excedente * valorExcessoPorHora;
    } else {
        salario.salario = NumeroHorasTrabalhadas * valorPorHora;
    }

    return salario.imprimir();
};

(function() {
    let NumeroHorasTrabalhadas = 60;
    let resultado = calcularSalario(NumeroHorasTrabalhadas);

    console.log(resultado);
})();
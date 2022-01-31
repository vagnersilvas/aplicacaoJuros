const multiplicar = (a, b) => a * b;

const retornaTaxaJuros = dias => dias > 15 ? 0.1 : 0.05

const calculaSaldoDevedor = (valor, taxa) => {
    const juros = multiplicar(valor, taxa)
     
    return Number(valor) + juros;
}

export { multiplicar, calculaSaldoDevedor, retornaTaxaJuros };
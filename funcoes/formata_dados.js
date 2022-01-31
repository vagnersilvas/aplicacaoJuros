import { multiplicar } from "./calculo.js";


const infoMsg = {
    valor: 'Valor deve ser maior que zero',
    dia: 'Você esta em dia'
}

const formataTaxaJuros = (taxa) => `${multiplicar(taxa, 100)}%`;

function formatarDados(valorOriginal, valorComJuros, dias, taxaDeJuros) {
    const juros = formataTaxaJuros(taxaDeJuros);

    return `
    Valor original da divida: R$ ${valorOriginal}
    Dias atrasados: ${dias}
    Taxa de Juros: ${juros}
    Valor total com juros: R$ ${valorComJuros}
    `;
}


export { infoMsg, formatarDados };
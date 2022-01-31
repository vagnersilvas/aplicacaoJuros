import pegaDadosUsuario from "./funcoes/dados_usuario.js";
import formatarDados from "./funcoes/formata_dados.js";
import { calculaSaldoDevedor, retornaTaxaJuros } from "./funcoes/calculo.js"
import { validaValor, validaDias } from "./funcoes/validacao.js"

function main() {
    let mensagemUsuario = ''
    const [valorDevido, diasAposVencimento] = pegaDadosUsuario();
    const valorValido = validaValor(valorDevido)
    const diaValido = validaDias(diasAposVencimento)

    if (!valorValido) { return mensagemUsuario = 'Valor deve ser maior que zero'; }
    if (!diaValido) { return mensagemUsuario = 'Você esta em dia' }

    if (valorValido && diaValido) {
        const taxaDeJuros = retornaTaxaJuros(diasAposVencimento);
        const valorTotal = calculaSaldoDevedor(valorDevido, taxaDeJuros);
        return mensagemUsuario = formatarDados(valorDevido, valorTotal, diasAposVencimento, taxaDeJuros);
    }
}

console.log(main());
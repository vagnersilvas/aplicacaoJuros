import pegaDadosUsuario from "./funcoes/dados_usuario.js";
import {infoMsg, formatarDados} from "./funcoes/formata_dados.js";
import { calculaSaldoDevedor, retornaTaxaJuros } from "./funcoes/calculo.js"
import { validaValor, validaDias } from "./funcoes/validacao.js"

function main() {
    const [valorDevido, diasAposVencimento] = pegaDadosUsuario();
    const valorValido = validaValor(valorDevido);
    const diaValido = validaDias(diasAposVencimento);

    if (!valorValido) { return infoMsg.valor; };
    if (!diaValido) { return infoMsg.dia };

    if (valorValido && diaValido) {
        const taxaDeJuros = retornaTaxaJuros(diasAposVencimento);
        const valorTotal = calculaSaldoDevedor(valorDevido, taxaDeJuros);

        const mensagemUsuario = formatarDados(valorDevido, valorTotal, diasAposVencimento, taxaDeJuros);
        
        return mensagemUsuario;
    }
}

console.log(main());
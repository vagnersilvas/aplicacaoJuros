import input from 'readline-sync';

const pegaDadosUsuario = () => {
    const valorDevido = input.question("Informe o valor devido R$ ");
    const diasAposVencimento = input.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

    return [valorDevido, diasAposVencimento];
}

export default pegaDadosUsuario;
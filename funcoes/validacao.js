
const validaValor = valor => !isNaN(valor) && valor > 0

const validaDias = dias => dias > 0

export { validaValor, validaDias };
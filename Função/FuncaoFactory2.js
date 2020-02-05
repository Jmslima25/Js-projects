//Factory simples
function produto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1 * preco
    }
}

console.log(produto('pc', 2500,00))
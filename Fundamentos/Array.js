const valores = [7, 8, 6.2, 9.5]
console.log(valores[0], valores[3])
console.log(valores[4])
valores[4] = 10

console.log(valores)
console.log(valores.length + ' elementos')
//funcoes que adicionam valoreas ao array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
//feunções que excluiem items do array
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)
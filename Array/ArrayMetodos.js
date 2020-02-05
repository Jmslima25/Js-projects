const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()// exclui o ultimo membro do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro membro array
console.log(pilotos)

pilotos.unshift('Hamilton')// insere na primeira colocação
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)   

const algunspilotos = pilotos.slice(2)//novoarray
console.log(algunspilotos)

const algunspilotos2 = pilotos.slice(1,4)
console.log(algunspilotos2)
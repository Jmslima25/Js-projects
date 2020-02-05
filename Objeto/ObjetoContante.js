// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 ->{...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)// Congela o objeto e não deixa o usuario fazer alterações nem atribuições
 
pessoa.nome = 'Maria'
pessoa.end = 'Rua Abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaCOnstante = Object.freeze({nome: 'João'})
pessoaCOnstante.nome = 'Maria'
console.log(pessoaCOnstante)
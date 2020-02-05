Array.prototype.filter2 =  function(callback){
    let newArray = []
    for (let i =0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const prod = produtos => produtos.preco >=500
const prod2 = produtos => produtos.fragil 


const resultado = produtos.filter(prod).filter(prod2)
console.log(resultado)
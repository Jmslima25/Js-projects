const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(responce =>{
    const funcionarios = responce.data
    console.log(funcionarios)


 
 const c1 = f => f.pais === 'China'
 const c2 = g => g.genero === 'F'
 const c3 = (func, funcAtual) => {
     return func.salario < funcAtual.salario ? func : funcAtual
 }


 const result = funcionarios
 .filter(c1)
 .filter(c2)
 .reduce(c3)
 
   console.log(result)
})
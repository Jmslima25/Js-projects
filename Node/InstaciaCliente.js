const contadorA = require('./instanciaUnica')
const contadorB = require('./InstanciaUnica')

const contadorC = require('./InstaciaNova')()
const contadorD = require('./InstaciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)
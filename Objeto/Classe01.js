class lançamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinaceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lançamentos = []
    }
    
    addLançamentos(...lançamentos){
        lançamentos.forEach(l => this.lançamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lançamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lançamento('Salario', 45000)
const contaDeLuz = new lançamento('Luz', -220)

const contas = new CicloFinaceiro(6, 2018)
contas.addLançamentos(salario, contaDeLuz)
console.log(contas.sumario())
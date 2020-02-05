class avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends avo{
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends Pai{
    constructor() {
        super('Silva') 
    }
}

const filhos = new filho
console.log(filhos)


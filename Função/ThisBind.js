const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()//conslito entre paradigmas: funcional e OO

const FalarDePessoa = pessoa.falar.bind(pessoa)
FalarDePessoa()

const falar2 = pessoa.falar
falar2()
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9: 
             console.log('Quadro de Honra')
             break // faz a função sair do switch 
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2:  case 1: case 0:
            console.log('reprovado')
            break
        default:
            console.log('Nota invalida')            
    }
}

imprimirResultado(3)
imprimirResultado(10)
imprimirResultado(6.55)

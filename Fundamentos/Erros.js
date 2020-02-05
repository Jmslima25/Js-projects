function tratarErroELancar(erro){
     // throw new Error('...')  
     //throw 10
     //throw true 
     throw {
         name : erro.name,
         msg: erro.message,
         date: new Date
     }
}

function imprimirnome(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
    

}

const obj = {
    name: 'Roberto'
}
 imprimirnome(obj)
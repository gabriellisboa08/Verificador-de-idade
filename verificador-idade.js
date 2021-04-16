function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let txtano = document.getElementById('txtano')
    res = document.getElementById('res')
    if (txtano.value.length == 0 || anoNasc > anoAtual) {
        window.alert('[ERRO] dados inválidos')
    } 
    
    else {
        let anoNasc = Number(txtano.value)
        let idade = anoAtual - anoNasc 
        let opcaoSex = document.getElementsByName('Sexo')
        let genero = ''
        
        if (opacaoSex[0].checked) {
            let genero = 'masc'
            res.innerText = idade
        }
    }
    
    
    
    

   

}
function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let txtAno = document.getElementById('txtano')
    let anoNasc = Number(txtAno.value)
    res = document.getElementById('res')
    if ( anoAtual < anoNasc || txtAno.value.length == 0) {
        window.alert('[ERRO] Dados inválidos')
    } else {
        let idade = anoAtual - anoNasc 
        let genero = ''
        let opcaosex = document.getElementsByName('opcaosex')
        let img = document.createElement('img') // ESSA Função cria um elemento HTML por JS
        img.setAttribute('id', 'foto') // Aqui foi Atribuído uma ID com o nome de foto ao elemento criado acima
        if (opcaosex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12 ){
                img.setAttribute('src','criança-m.png')
                //Criança
            } else if (idade >= 12 && idade < 21) {
                img.setAttribute('src', 'jovem-m.png')
                //Jovem
            }else if (idade >= 21 && idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
      
        }else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12 ){
                img.setAttribute('src' , 'Criança-f.png')
                //Criança
            } else if (idade >= 12 && idade < 21) {
                //Jovem
                img.setAttribute('src','jovem-f.png')
            }else if (idade >= 21 && idade < 60) {
                //Adulto
                img.setAttribute('src' , 'adulto-f.png')
            }else { 
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado ${genero} com ${idade} ano(s)`
        res.appendChild(img)
    }
    
}
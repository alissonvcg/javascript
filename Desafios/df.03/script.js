function verificar(){
    var fano = window.document.getElementById('txtano') // pega a entrada do input
    var res = window.document.getElementById('res') // ta pegando a ultima div
    var data = new Date() 
    var ano = data.getFullYear()
    if (fano.value.length == 0 || fano.value > ano) { //  se o valor for igual a 0 
        
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else {
        var fsex = document.getElementsByName('radsex') // esta pegando o input do sexo
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // criando um elemento img
        img.setAttribute('id', 'foto') // ta definindo o atributo id como foto
        if (fsex[0].checked) { // se o input masculo tiver com a caixa marcada
            genero = 'Homem' // coloque genero como homem
            if ( idade >= 0 && idade <=2 ) { 
                img.setAttribute('src', '0-3m.png') // colocando o atributo src da img, como o nome do arquivo da foto
            } else if (idade >= 3 && idade <=5) {
                img.setAttribute('src', '3-6m.png')
            } else if (idade >= 6 && idade <=9){
                img.setAttribute('src', '6-10m.png')
            } else if (idade >= 10 && idade <= 11) {
                img.setAttribute('src', '10-12m.png')
            } else if (idade >= 12 && idade <= 17){
                img.setAttribute('src', '12-18m.png')
            } else if (idade >= 18 && idade <= 24){
                img.setAttribute('src', '18-25m.png')
            } else if (idade >= 25 && idade <=29){
                img.setAttribute('src', '25-30m.png')
            } else if (idade >= 30 && idade <= 39) {
                img.setAttribute('src', '30-40m.png')
            } else if (idade >= 40 && idade <= 49){
                img.setAttribute('src', '40-50m.png')
            } else if (idade >= 50 && idade <= 59){
                img.setAttribute('src', '50-60m.png')
            } else
                img.setAttribute('src', '60m.png')
        
        } else if (fsex[1].checked) { // se a caixa feminina tiver marcada
            genero = 'Mulher' // coloque o genero como mulher 
            if ( idade >= 0 && idade <=2 ) {
                img.setAttribute('src', '0-3f.png')
            } else if (idade >= 3 && idade <=5) {
                img.setAttribute('src', '3-6f.png')
            } else if (idade >= 6 && idade <=9){
                img.setAttribute('src', '6-10f.png')
            } else if (idade >= 10 && idade <= 11) {
                img.setAttribute('src', '10-12f.png')
            } else if (idade >= 12 && idade <= 17){
                img.setAttribute('src', '12-18f.png')
            } else if (idade >= 18 && idade <= 24){
                img.setAttribute('src', '18-25f.png')
            } else if (idade >= 25 && idade <=29){
                img.setAttribute('src', '25-30f.png')
            } else if (idade >= 30 && idade <= 39) {
                img.setAttribute('src', '30-40f.png')
            } else if (idade >= 40 && idade <= 49){
                img.setAttribute('src', '40-50f.png')
            } else if (idade >= 50 && idade <= 59){
                img.setAttribute('src', '50-60f.png')
            } else
                img.setAttribute('src', '60f.png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // anexando o filho da div
        
    }
    
}
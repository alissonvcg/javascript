function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12 && hora > 5) {
        img.src = 'manhã.png'
        document.body.style.background = '#7d9e9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#e5cdb1'
    }else  {
        img.src = 'noite.png'
        document.body.style.background = ' #473858'
    }
}


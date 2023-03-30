function contar(){
    let inicio = document.getElementById('ninicio')
    let fim = document.getElementById('nfim')
    let passo = document.getElementById('npasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 00 || passo.value.length == 0){
        window.alert('ERRO Faltam prencher alguns campos!')
    } else {
        res.innerHTML = "contando "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido')
        }
        if (i < f)
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449} `
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML +- `${c} \u{1f449} >`
            }
        }
        res.innerHTML += '\u{1f3c1}'
    }
}



/*function contar(){
    for(inicio; inicio <= fim; inicio + passo)
        res.innerHTML(inicio)
        res.innerHTML('->')
}
res.innerHTML('  FIM.')*/

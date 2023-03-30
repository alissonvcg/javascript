/*function Gerar() {
    var numero = document.getElementById('txt')
    var res = document.getElementById('res')
    var n = Number(numero.value)
    var n1 = 0
    if (numero.value.length == 0){
        window.alert('Erro digite um numero')
    } else {
        for (n; n1 >= 10 ; n1++){
            var r = n * n1
            res.innerHTML = `${n} X ${n1} = ${r}`
        }
    }
}*/

function Gerar(){ 

    var numero = document.getElementById('txtn')
    var res = document.getElementById('res')
    var tab = document.getElementById('seltab')
    var ate = document.getElementById('txtate')
    
    if (numero.value.length == 0) {
       window.alert('ERRO Digite um numero')
    } else {
        var n = Number(numero.value)
        var n1 = 1
        tab.innerHTML= ''
        var a = Number(ate.value)
        while (n1 <= a){
            var item = document.createElement('option')
            item.text = `${n} X ${n1} = ${n*n1}`
            tab.appendChild(item)
            n1++
        }
        
    }
}

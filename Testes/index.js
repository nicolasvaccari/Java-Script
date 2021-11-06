function notas() {
    var ns1 = window.document.getElementById('n1')
    var ns2 = window.document.getElementById('n2')
    var ns3 = window.document.getElementById('n3')
    var ns4 = window.document.getElementById('n4')

    var n1 = Number(ns1.value)
    var n2 = Number(ns2.value)
    var n3 = Number(ns3.value)
    var n4 = Number(ns4.value)
    var soman = ((n1 + n2 + n3 + n4) /4)
    res = winsowindow.document.getElementById('res')
    res1 = winsowindow.document.getElementById('res')

    if (soman >= 32.5 ){
        res1.innerHTML = ('Você passou')
        if (soman >= 32.5 && soman <= 36.5) {
            res.innerHTML = ('')
        }
        else if (soman >= 36.6 && soman <= 38.9) {
            res.innerHTML = ('com nota alta')
        }
        else if (soman >= 39.0 && soman <= 40.0) {
            res.innerHTML = ('com nota máxima!')
        }else {
            window.alert('Ocorreu um erro, tente novamente.')
        }
    }else if (soman <= 32.4 ){
        res1.innerHTML = ('Você não passou')
        if (soman <= 32.4 && soman >= 26.5) {
            res.innerHTML = ('')
        }
        else if (soman <= 26.4 && soman >= 20.0) {
            res.innerHTML = ('com nota baixa')
        }
        else if (soman <= 19.0 && soman >= 0.0) {
            res.innerHTML = ('com uma nota horrível.')
        }else {
            window.alert('Ocorreu um erro, tente novamente.')
        }
    }
}
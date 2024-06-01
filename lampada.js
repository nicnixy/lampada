var lampadaDesligada = window.document.getElementById("lampada-desligada")

function estaQuebrada() {
    return lampadaDesligada.src.indexOf('quebrada') > -1
}

function liga() {
    if(!estaQuebrada())
    lampadaDesligada.src = "Lampada/ligada.svg"
}

function desliga() {
    if(!estaQuebrada())
    lampadaDesligada.src = "Lampada/desligada.svg"
}

lampadaDesligada.addEventListener('click', quebra)
function quebra() {
    lampadaDesligada.src = "Lampada/quebrada.svg"
}

setTimeout(
function azul2(){var azul=document.getElementsByClassName("azul")
    azul[0].className="animated bounce"}
,1)

function botao5(){
window.location.href="nivel1fase3.html"
}

function botao6(){
window.location.href="nivel1fase3.html"
}

function botao7(){
var pontuacaoGet= JSON.parse(localStorage.getItem("pontuacao"))
var pontuacao=10+pontuacaoGet
localStorage.setItem("pontuacao",pontuacao)
window.location.href="nivel1fase3.html"
}

function botao8(){
window.location.href="nivel1fase3.html"
}

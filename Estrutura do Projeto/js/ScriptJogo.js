

setTimeout(
function amarelo(){var amarelo=document.getElementsByClassName("amarelo")
amarelo[0].className="animated slideInDown"}
,1)

setTimeout(localStorage.removeItem("pontuacao"),1)


function botao1(){
    var pontuacaoGet= JSON.parse(localStorage.getItem("pontuacao"))
    var pontuacao=10+pontuacaoGet
    localStorage.setItem("pontuacao",pontuacao)

window.location.href="nivel1fase2.html"
}

function botao2(){
window.location.href="nivel1fase2.html"
}
function botao3(){
window.location.href="nivel1fase2.html"
}
function botao4(){
window.location.href="nivel1fase2.html"
}


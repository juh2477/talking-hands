
setTimeout(
function carta(){var image=document.getElementsByClassName("image")
    image[0].className="animated bounce"}
,1)


function botao9(){
window.location.href="nivel1fase4.html"
}

function botao10(){
    var pontuacaoGet= JSON.parse(localStorage.getItem("pontuacao"))
    var pontuacao=10+pontuacaoGet
    localStorage.setItem("pontuacao",pontuacao)
window.location.href="nivel1fase4.html"
}

function botao11(){
window.location.href="nivel1fase4.html"

}

function botao12(){
window.location.href="nivel1fase4.html"
}



setTimeout(
function carta(){var image=document.getElementsByClassName("image")
    image[0].className="animated bounce"}
,1)


function botao13(){
    var pontuacaoGet= JSON.parse(localStorage.getItem("pontuacao"))
    var pontuacao=10+pontuacaoGet
    localStorage.setItem("pontuacao",pontuacao)
window.location.href="nivel1fase5.html"

}

function botao14(){
window.location.href="nivel1fase5.html"
}

function botao15(){
window.location.href="nivel1fase5.html"

}

function botao16(){
window.location.href="nivel1fase5.html"
}



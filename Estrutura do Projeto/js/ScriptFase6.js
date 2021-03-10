setTimeout(
function carta(){var image2=document.getElementsByClassName("image2")
    image2[0].className="animated bounce"}
,1)


function botao21(){
window.location.href="nivel1fase7.html"

}

function botao22(){
window.location.href="nivel1fase7.html"
}

function botao23(){
    var pontuacaoGet= JSON.parse(localStorage.getItem("pontuacao"))
    var pontuacao=10+pontuacaoGet
    localStorage.setItem("pontuacao",pontuacao)
window.location.href="nivel1fase7.html"

}

function botao24(){
window.location.href="nivel1fase7.html"
}
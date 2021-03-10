setTimeout(
    function carta(){var image=document.getElementsByClassName("image")
        image[0].className="animated bounce"}
    ,1)
    

    function botao17(){
    
    window.location.href="nivel1fase6.html"
    
    }
    
    function botao18(){
    window.location.href="nivel1fase6.html"
    }
    
    function botao19(){
    window.location.href="nivel1fase6.html"
    
    }
    
    function botao20(){
        var pontuacaoGet= JSON.parse(localStorage.getItem("pontuacao"))
        var pontuacao=10+pontuacaoGet
        localStorage.setItem("pontuacao",pontuacao)
    window.location.href="nivel1fase6.html"
    }
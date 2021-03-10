setTimeout(
    function carta(){var image=document.getElementsByClassName("image")
        image[0].className="animated slideInDown"}
    ,1)
    setTimeout(localStorage.removeItem("pontuacao2"),1)

    function botao29(){
    window.location.href="nivel2fase2.html"
    
    }
    
    function botao30(){
    window.location.href="nivel2fase2.html"
    }
    
    function botao31(){
    window.location.href="nivel2fase2.html"
    
    }
    
    function botao32(){
        var pontuacao2=0
        var pontuacao2Get= JSON.parse(localStorage.getItem("pontuacao2"))
        var pontuacao2=10+pontuacao2Get
        localStorage.setItem("pontuacao2",pontuacao2)
    window.location.href="nivel2fase2.html"
    }
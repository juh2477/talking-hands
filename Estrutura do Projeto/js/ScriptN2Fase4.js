setTimeout(
    function carta(){var image=document.getElementsByClassName("image")
        image[0].className="animated bounce"}
    ,1)
    
    function botao41(){
        var pontuacao2Get= JSON.parse(localStorage.getItem("pontuacao2"))
        var pontuacao2=10+pontuacao2Get
        localStorage.setItem("pontuacao2",pontuacao2)
    window.location.href="nivel2fase5.html"
    
    }
    
    function botao42(){
    window.location.href="nivel2fase5.html"
    }
    
    function botao43(){
    window.location.href="nivel2fase5.html"
    
    }
    
    function botao44(){
    window.location.href="nivel2fase5.html"
    }
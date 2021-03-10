setTimeout(
    function carta(){var image=document.getElementsByClassName("image")
        image[0].className="animated bounce"}
    ,1)
    
   
    function botao33(){
    window.location.href="nivel2fase3.html"
    
    }
    
    function botao34(){
        var pontuacao2Get= JSON.parse(localStorage.getItem("pontuacao2"))
        var pontuacao2=10+pontuacao2Get
        localStorage.setItem("pontuacao2",pontuacao2)
    window.location.href="nivel2fase3.html"
    }
    
    function botao35(){
    window.location.href="nivel2fase3.html"
    
    }
    
    function botao36(){
    window.location.href="nivel2fase3.html"
    }
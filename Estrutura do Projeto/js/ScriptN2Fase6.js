setTimeout(
    function carta(){var image=document.getElementsByClassName("image")
        image[0].className="animated bounce"}
    ,1)
    
   
    function botao49(){
    window.location.href="nivel2fase7.html"
    
    }
    
    function botao50(){
    window.location.href="nivel2fase7.html"
    }
    
    function botao51(){
    window.location.href="nivel2fase7.html"
    
    }
    
    function botao52(){
        var pontuacao2Get= JSON.parse(localStorage.getItem("pontuacao2"))
        var pontuacao2=10+pontuacao2Get
        localStorage.setItem("pontuacao2",pontuacao2)
    window.location.href="nivel2fase7.html"
    
    }
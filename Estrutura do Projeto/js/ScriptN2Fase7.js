setTimeout(
    function carta(){var image=document.getElementsByClassName("image")
        image[0].className="animated bounce"}
    ,1)
    
    function botao53(){
    
        window.location.href="Fases.html"
    
    }
    
    function botao54(){
        
        var pontuacao2Get= JSON.parse(localStorage.getItem("pontuacao2"))
        var pontuacao2=10+pontuacao2Get
        localStorage.setItem("pontuacao2",pontuacao2)
        alert("Parabéns você conseguiu "+JSON.parse(localStorage.getItem("pontuacao2"))+"/70 pontos!")

        window.location.href="Fases.html"

    }
    
    function botao55(){

        window.location.href="Fases.html"
    
    }
    
    function botao56(){
        window.location.href="Fases.html"
    }



   
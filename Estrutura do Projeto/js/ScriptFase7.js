setTimeout(
    function carta(){var image=document.getElementsByClassName("image")
        image[0].className="animated bounce"}
    ,1)
    

    function botao25(){
	
    var pontuacaoGet= JSON.parse(localStorage.getItem("pontuacao"))
    var pontuacao=10+pontuacaoGet
    localStorage.setItem("pontuacao",pontuacao)
    alert("Você conseguiu "+JSON.parse(localStorage.getItem("pontuacao"))+"/70! ")
    window.location.href="Fases.html"
    
    }
    
    function botao26(){
    window.location.href="Fases.html"
    }
    
    function botao27(){
    window.location.href="Fases.html"
    
    }
    
    function botao28(){
    window.location.href="Fases.html"
    }
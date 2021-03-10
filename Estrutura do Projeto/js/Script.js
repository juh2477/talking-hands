
localStorage.login;
localStorage.senha;

localStorage.loginArray;
localStorage.senhaArray;

var auxLoginArray = new Array();
var auxSenhaArray = new Array();



function cadastrarDadosAA(){

  var l = document.getElementById('login').value;
  var s = document.getElementById('senha').value;

  localStorage.setItem("login", l);//localStorage.login = l;
  localStorage.setItem("senha", s);//localStorage.senha = s;

  auxLoginArray.push(l);
  auxSenhaArray.push(s);

  //localStorage.loginArray = auxLoginArray;
  localStorage.setItem("loginArray", auxLoginArray);
  //localStorage.senhaArray = auxSenhaArray;
  localStorage.setItem("senhaArray", auxSenhaArray);

  console.log(localStorage.loginArray, localStorage.senhaArray);
  alert("Usuário cadastrado com sucesso\nLogin: "+localStorage.login 
  + "\nSenha: " + localStorage.senha);






}

function logar(){
	var l_inf = document.getElementById('loginAutenticacao').value;
	var s_inf = document.getElementById('senhaAutenticacao').value;

	//if(l_inf == localStorage.login && s_inf == localStorage.senha){
	//alert("Math");
	//}

	//var l = localStorage.loginArray.split(",");
	var l = localStorage.getItem("loginArray").split(",");
	//var s = localStorage.senhaArray.split(",");
	var s = localStorage.getItem("senhaArray").split(",");
	
	//console.log(l,s);
	//alert("Login digitado: "+ l_inf + "\nSenha digitada: " + s_inf);
	var logado = false;
	for(var i=0; i<l.length; i++){
	if(l_inf == l[i] && s_inf == s[i]){
	  alert("Match - Usuário e senha existem no sistema");
	  logado = true;
	  window.open('home.html','janela');
	}
	}
	if(logado == false){
	alert("Usuário ou Senha não existem no sistema!");
	}
	//console.log("Login Storage:\n"+localStorage.loginArray, "\nSenhas Storage:\n"+localStorage.senhaArray);
}

function cadastrarDados(){
	alert("Você foi cadastrado!");
	localStorage.removeItem("login")
	localStorage.removeItem("turma")
	var pessoas = [
		{
			name: document.getElementById("login").value,
			turma: document.getElementById("turma").value
		}
		];
		
	localStorage.setItem("pessoinhas", JSON.stringify(pessoas));
		
        
  }
        
                //função do botão do início para jogar
				
        

        function botaoJogar(){

                var mãoslibras2=document.getElementsByClassName("mãoslibras2")
                mãoslibras2[0].className="animated slideOutLeft"
                
                
                var mãoslibras=document.getElementsByClassName("mãoslibras")
                mãoslibras[0].className="animated slideOutRight"
				
				var teste3=document.getElementsByClassName("teste3")
				teste3[0].className="animated fadeOut"
				
				var botaoSumir=document.getElementsByClassName("botaoSumir")
				botaoSumir[0].className="animated fadeOut"

                setTimeout(function proxPagina(){ window.location.href="Fases.html"}, 1000);
				}
				
				
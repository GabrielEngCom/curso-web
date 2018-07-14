
//classe 

Autenticacao = function(){}


//metodo

Autenticacao.prototype.validarCampos = function (){


	
	
	usuario = document.getElementById("txtUsuario").value;
	
	
	
	
	senha = document.getElementById("txtSenha").value;
	

	
	
	if(usuario == "" || senha== ""){
	
		window.alert ("campo vazio");
		return false;
		
	}else {

          window.alert ("bem vindos!: " +usuario);
	      return true;
	}
	

}

//instanciando o objeto

aut = new Autenticacao();


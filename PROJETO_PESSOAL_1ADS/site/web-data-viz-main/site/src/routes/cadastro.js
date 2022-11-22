function validar_campo_cadastro() {
    var nome_usuario = input_nome.value;
    var idade_usuario = input_idade.value;
    var email_usuario = input_email.value;
    var senha_usuario = input_senha.value;
    var repetir_senha = input_confirma_senha.value;
  

    if (input_nome.value == "") {
        alert('Preencha este campo corretamente');
        input_nome.style.borderColor = '#ff0000';


    }else if (input_idade.value == "") {
        alert('Preencha este campo corretamente');
        input_idade.style.borderColor = "#ff0000"


    } else if (input_email.value == ""){
		alert('Campo inválido');
		input_email.style.borderColor = 'red';
		
	} else if (input_email.indexOf('@') == -1 || input_email.indexOf('.') == -1) {
        alert('Preencha este campo corretamente');
        input_email.style.borderColor = '#ff0000';


    } else if (input_senha.length < 8) {
        alert('Sua senha precisa ter  pelo menos oito caracteres');
        input_senha.style.borderColor = '#ff0000';


    } else if (input_confirma_senharepetir_senha.length == 0) {
        input_confrma_senha.style.borderColor = '#ff0000';
        alert('Insira sua senha novamente');


    } else if (senha_usuario.length != repetir_senha.length) {
        input_repetir_senha.style.borderColor = '#ff0000';
        alert('Os campos não coincidem');
    } 

    else {
        input_nome.style.borderColor = 'rgb (0, 255, 0)';
        input_idade.style.borderColor = 'rgb (0, 255, 0)';
        input_email.style.borderColor = 'rgb (0, 255, 0)';
        input_senha.style.borderColor = 'rgb (0, 255, 0)';
        input_confirma_senha.style.borderColor = 'rgb (0, 255, 0)';
        alert('Usuário Cadastrado com sucesso!');
		
		window.replace('../html/login.html');	

    }

};
const nome = document.getElementById('input_nome');
const idade = document.getElementById('input_idade');
const email = document.getElementById('input_email');
const senha = document.getElementById('input_senha');
const confirmar_senha = document.getElementById('input_confirma_senha');

const btn = document.querySelector('button');

btn.addEventListener('click', function cadastrar_usuario(){
    if(nome == ''){
		nome.innerHTML = 'Campo inválido';
		nome.style.borderColor = '#ff0000';
		
	}else if(email.value == ''){
		window.alert('Campo inválido');
	}
});
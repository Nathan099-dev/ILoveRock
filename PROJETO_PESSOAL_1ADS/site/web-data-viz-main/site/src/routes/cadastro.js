const nome = document.getElementById('input_nome');
const idade = document.getElementById('input_idade');
const email = document.getElementById('input_email');
const senha = document.getElementById('input_senha');
const confirma_senha = document.getElementById('input_confirma_senha');

const botao = document.getElementById('botao_cadastrar');

const lista_usuarios = []
botao.addEventListener('click', function cadastrar(){
	for(var novo_usuario_cadastrado = 0; lista_usuarios.length; novo_usuario_cadastrado++){
		lista_usuarios.push(novo_usuario_cadastrado);
		novo_usuario_cadastrado++;
	},
	
	if(nome.value == null){
		alert('Campo inválido');
		nome.style.borderColor = 'red'
		
	}
});

	cadastrar();
const nome = document.getElementById('input_nome');
const idade = document.getElementById('input_idade');
const user_email = document.getElementById('input_email');
const senha = document.getElementById('input_senha');
const confirma_senha = document.getElementById('input_confirma_senha');
const botao = document.getElementById('btn');

botao.addEventListener('click', function cadastrar(){
    if (nome.value == '') {
        window.alert('Campo inválido');
        nome.style.borderColor = 'red';
    }
});

cadastrar();
const nome = document.getElementById('input_nome');
const idade = document.getElementById('input_idade');
const email = document.getElementById('input_email');
const senha = document.getElementById('input_senha');
const confirma_senha = document.getElementById('input_confirma_senha');

const botao = document.querySelector('button');
botao.onclick = function cadastrar(nome, idade, email, senha, confirmar_senha){
    if (nome.value == '') {
        window.alert('Campo inválido');
        nome.style.borderColor = 'red';
    }
}
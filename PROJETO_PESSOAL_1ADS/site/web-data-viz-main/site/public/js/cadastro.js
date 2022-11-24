const nome = document.getElementById('input_nome');
const idade = document.getElementById('input_idade');
const email = document.getElementById('input_email');
const senha = document.getElementById('input_senha');
const confirmar_senha = document.getElementById('input_confirma_senha');

const btn = document.querySelector('button');

btn.onclick = function cadastrar(){
    if (nome.value = '') {
        nome.innerHTML = 'Campo inválido'
        nome.style.borderColor = 'red'
    }
}
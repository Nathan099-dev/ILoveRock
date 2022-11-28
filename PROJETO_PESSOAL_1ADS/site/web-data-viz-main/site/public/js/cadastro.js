const nome = document.getElementById('input_nome');
const idade = document.getElementById('input_idade');
const email = document.getElementById('input_email');
const senha = document.getElementById('input_senha');
const confirmacao = document.getElementById('input_confirma_senha');

const botao = document.getElementById('btn');

botao.onclick = function cadastrar(){
    const nome_usuario = nome.value;
    const idade_usuario = idade.value;
    const email_usuario = email.value;
    const senha_usuario = senha.value;
    const confirmar_senha_cadastrada = confirmacao.value;

    if (nome_usuario == '') {
        window.alert('Campo inválido');
    }
}


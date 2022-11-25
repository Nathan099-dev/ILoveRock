const nome = document.getElementById('input_nome');
const idade = document.getElementById('input_idade');
const email = document.getElementById('input_email');
const senha = document.getElementById('input_senha');
const confirma_senha = document.getElementById('input_confirma_senha');

const botao = document.querySelector('button');

function cadastrar(){
    var nome_usuario = input_nome.value;
    var idade_usuario = input_idade.value;
    var email_usuario = input_email.value;
    var senha_usuario = input_senha.value;
    var confirmar_senha = input_confirma_senha.value;

    if (nome_usuario == '') {
        alert('Campo  nome, inválido');
       
        
    }else if (idade_usuario == '') {
        alert('Campo idade, inválido');
       

    }else if (email_usuario == '') {
        alert('Campo email, inválido');
       

    }else if (email_usuario.indexOf('@').value == -1 || email_usuario.indexOf('.').value == -1) {
        alert('Campo email, inválido');

    }else if (senha_usuario == '') {
        alert('Campo senha, inválido');
        

    }else if (confirmar_senha == '') {
        alert('Campo de confirmação de senha, inválido')

        
    }else if (confirmar_senha != senha_usuario) {
        alert('Suas senhas não coincidem');

    }

    <li><a href="./login.html">Login</a></li>
}
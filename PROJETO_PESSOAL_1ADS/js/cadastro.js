var nome_usuario = document.getElementById('nome');
var idade_usuario = document.getElementById('idade');
var email_usuario = document.getElementById('mail');
var senha_usuario = document.getElementById('pwd');
var confirmar_senha_usuario = document.getElementById('confirmar_senha');

var btn = document.querySelector('button');


btn.addEventListener('click', function cadastrar_validar(){
    if (nome_usuario.value = null) {
        window.alert('Campo inválido');
        nome_usuario.style.borderColor = 'red'

    }else if(idade_usuario.value = null){
        window.alert('Campo inválido');
        idade_usuario.style.borderColor = 'red';

    }else if (email_usuario.value = null) {
        window.alert('Campo inválido');
        email_usuario.style.borderColor = 'red';

    }else if (email_usuario.indexOf('@') == -1 || email_usuario.indexOf('.') == -1) {
        window.alert('Insira um email válido');
        email_usuario.style.borderColor = 'red';

    }else if (senha_usuario.value == null) {
        window.alert('Campo inválido');
        senha_usuario.style.borderColor = 'red';

    }else if (confirmar_senha_usuario != senha_usuario) {
        window.alert('As senhas não são iguais');
        confirmar_senha_usuario.style.borderColor = 'red';
    }
})
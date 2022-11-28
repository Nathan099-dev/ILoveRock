const email = document.getElementById('mail_login');
const senha = document.getElementById('password_login');
const btn = document.getElementById('btn_login');

btn.addEventListener('click', function login(){
    const email_usuario_login = email.value;
    const senha_usuario_login = senha.value;

    if (email_usuario_login == '') {
        email_usuario_login.innerHTML = 'Campo inválido';
        email.style.borderColor = 'red';

    }else if (senha_usuario_login == '') {
        senha_usuario_login.innerHTML = 'Campo inválido';
        senha.borderColor = 'red';
    }
})
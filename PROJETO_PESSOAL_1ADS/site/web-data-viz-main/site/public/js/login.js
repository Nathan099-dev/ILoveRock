const email_cadastrado = document.getElementById('input_email_login');
const senha_cadastrada = document.getElementById('input_password_login');
const btn = document.getElementById('btn_login');

btn.onclick = function logar(email, senha){
    const email_usuario = email.value;
    const senha_usuario = senha.value;

    if (email_usuario == '') {
        window.alert('Campo inválido');
        email.style.borderColor = 'red';
    }
}

logar();
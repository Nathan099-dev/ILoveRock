const email = document.getElementById('mail_login');
const senha = document.getElementById('password_login');
const btn = document.getElementById('btn_login');

btn.addEventListener('click', function login(){
    if (email.value == null) {
        window.alert('Campo inválido');
        email.style.borderColor = 'red';

    }else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        window.alert('Preencha um email válido');
        email.style.borderColor = 'red';

    }else if(senha.value == null){
        window.alert('Digite sua senha');
        senha.style.borderColor = 'red';
    }

    return login();
});



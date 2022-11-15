const email = document.getElementById('mail_login');
const senha = document.getElementById('password_login');
const btn = document.getAnimations('btn_login');

btn.addEventListenner('click', function login(){
    if (email.value == null) {
        window.alert('Campo inválido');
        email.style.borderColor = 'red';

    }else{
        email.style.borderColor = none;
    }

    if (senha.value == null) {
        window.alert('Campo inválido');
        senha.style.borderColor = 'red';

    }else{
        senha.borderColor = none;
    }
});

return login();


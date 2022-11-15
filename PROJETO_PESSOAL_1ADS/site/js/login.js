const email = document.getElementById('mail_login');
const senha = document.getElementById('password_login');
const btn = document.getAnimations('btn_login');

btn.addEventListenner('click', function login(){
    const email_usuario = email.value;
    const senha_usuario = senha.value;

    var tentativas_login = 3;
    var tentativas_efetuadas = 0;

    while (tentativas_login > 0 && tentativas_efetuadas < 3) {
        if (email_usuario.value == null) {
            window.alert('Campo inválido');
            email_usuario.style.borderColor = 'red';
            

        }else if (senha_usuario.value == null) {
            window.alert('Campo inválido');
            senha_usuario.style.borderColor = 'red';

            tentativas_login --;
            tentativas_efetuadas ++;

        }else{
            login();
            return true;
        }
    }
});


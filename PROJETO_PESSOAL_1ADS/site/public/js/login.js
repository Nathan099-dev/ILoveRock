function login(){
    const email = input_email_login.value;
    const senha = input_password_login.value;

    if (input_email_login.value == '') {
        window.alert('Campo inválido');

    }else if (input_password_login.value == '') {
        window.alert('Campo inválido');

    }else{
        window.location.replace('./pesquisa.html');
    }





}
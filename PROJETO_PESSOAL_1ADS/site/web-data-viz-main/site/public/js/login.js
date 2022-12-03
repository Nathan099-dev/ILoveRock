function logar(){
    const email = input_email_login.value;
    const senha = input_password_login.value;

    if (email == '') {
        window.alert('Campo de email, inválido');
        email.style.borderColor = 'red';
    }

    else if (senha == '') {
        window.alert('Campo de senha, inválido')
    }

    else {
        window.location.replace('./dashboard.html');
    }
}
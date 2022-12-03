function logar(){
    const email = mail_login.value;
    const senha = password_login.value;

    if (email == '') {
        window.alert('Campo incorreto');
    }

    if (senha == '') {
        window.alert('Campo invaĺido');
    }

    else{
        window.location.replace('./dashboard.html');
    }
}

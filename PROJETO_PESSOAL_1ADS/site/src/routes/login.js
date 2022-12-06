function logar(){
    const email = input_email_login.value;
    const senha = input_password_login.value;

    if (email == '') {
        window.alert('Campo inválido');
    }

    if (senha == '') {
        window.alert('Campo inválido');
    }

	else{
		window.location = './pesquisa.html';
	}
}
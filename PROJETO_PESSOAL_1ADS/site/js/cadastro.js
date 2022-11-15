function cadastrar(){
    const pessoa = {
        nome: nome.value,
        idade: idade.value,
        email: mail.value,
        senha: pwd.value,
        confirma_senha: confirmacao_senha.value,
    },

    if (nome.value == null) {
        window.alert('Campo inválido');
        nome.style.borderColor = 'red';

    }else if (idade.value == null) {
        window.alert('Campo inválido');
        idade.style.borderColor = 'red';

    }else if (email.value == null) {
        window.alert('Campo inválido');
        email.style.borderColor = 'red';

    }else if (email.indexOf('@').value == -1 || email.indexOf('.').value == -1) {
        window.alert('Isso não é um email');
        email.style.borderColor = 'red';

    }else if (senha.value == null) {
        window.alert('Campo inválido');
        senha.style.borderColor = 'red';

    }else if (senha.length < 8) {
        window.alert('Sua senha precisa ter pelo menos oito caracteres')
        senha.style.borderColor = 'red';

    }else if (confirma_senha != senha) {
        window.alert('As duas senhas cadastradas não coincidem');
        confirma_senha.style.borderColor = 'red';

    }else{
        pessoa.style.borderColor = 'green'
    }

    return cadastrar();
}


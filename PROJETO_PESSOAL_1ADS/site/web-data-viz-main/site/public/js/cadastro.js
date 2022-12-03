function cadastrar(){
    var nome = input_nome.value;
    var idade = input_idade.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var confirmar_senha = input_confirma_senha.value;

    if (nome == '') {
        window.alert(' Campo nome, inválido');
    }

    if (idade == '') {
        window.alert('Campo idade, inválido')
    }

    if (email == '') {
        window.alert('Campo email, inválido');
    }

    if (email.indexOf('@').value == -1 || email.indexOf('.').value == -1) {
        window.alert('Isto não é um endereço de email válido');
    }

    if (senha == '') {
        window.alert('Campo senha, inválido');
    }

    if (senha.length < 8) {
        window.alert('sua senha precisa ter pelo menos oito caracteres');
    }

    if (senha.indexOf('@').value == -1 && senha.index('A').value == -1) {
        window.alert('Sua senha precisa ter pelo menos uma letra maiúscula e um caracter especial');
    }

    if (confirmar_senha == '') {
        window.alert('Campo  confirmar senha, inválido');
    }

    if (confirmar_senha != senha) {
        window.alert('As senhas não são iguais')
    }

    else{
        window.alert('Usuário cadastrado');
        window.location.replace('./login.html');

    }
}



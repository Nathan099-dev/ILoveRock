function cadastrar(){
    const pessoa = {
        nome_pessoa: nome.value,
        idade_pessoa: idade.value,
        email_cadastrado: mail.value,
        senha: pwd.value,
        confirma_senha: confirmacao_senha.value,
    },

    while (pessoa.value == null) {
        window.alert('Campos inválidos');
        pessoa.style.borderColor = 'red';
    }
}
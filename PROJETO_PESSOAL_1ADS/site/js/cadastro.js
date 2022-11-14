function cadastrar(pessoa){
    const pessoa = {
        nome: nome.value,
        idade: idade.value,
        email: mail.value,
        senha: pwd.value,
        confirma_senha: confirmacao_senha.value,
    },

    while (pessoa.value == null) {
        window.alert('Campos inválidos');
        pessoa.style.borderColor = 'red';
    }
}
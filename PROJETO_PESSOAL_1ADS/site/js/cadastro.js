const lista_usuario = []

function cadastrar(){
    const novo_usuario = {
        nome: nome.value,
        idade: idade.value,
        email: email.value,
        senha: senha.value,
        confirmar_sua_senha: confirmacao_senha.value,
    }
    lista_usuario.push(novo_usuario);

    for(var novo_usuario_cadastrado; lista_usuario.length; novo_usuario_cadastrado++){
        if (novo_usuario.value == null) {
            window.alert('Campos inválidos');
            novo_usuario.style.borderColor = 'red';

        }else{
            novo_usuario.style.borderColor = 'green'
        }
    }

    return cadastrar();
}
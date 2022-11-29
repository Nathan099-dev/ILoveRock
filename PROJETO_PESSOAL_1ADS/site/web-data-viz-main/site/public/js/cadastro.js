function cadastrar(){
    const nome_usuario = input_nome.value;
    const idade_usuario = input_idade.value;
    const email_usuario = input_email.value;
    const senha_usuario = input_senha.value;
    const confirmar_senha_cadastrada = input_confirma_senha.value;

    if (input_nome.value == '') {
        window.alert('Campo inválido');
        input_nome.style.borderColor = 'red';

    }else if (input_idade.value == '') {
        window.alert('')
    }
}